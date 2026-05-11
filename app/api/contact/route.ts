import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getDb } from "@/lib/db";

export const runtime = "nodejs";

/* =========================
   BASIC SANITIZER
   ========================= */
const safe = (val: any) =>
  String(val || "")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .trim();

/* =========================
   EMAIL VALIDATION
   ========================= */
const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

/* =========================
   ROUTE
   ========================= */
export async function POST(req: Request) {
  try {
    /* =========================
       ENV CHECK (SAFE)
       ========================= */
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;
    const forwardEmail = process.env.FORWARD_EMAIL;

    if (!resendApiKey || !contactEmail) {
      console.error("❌ Missing required env variables");
      return NextResponse.json(
        { success: false, message: "Server not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    /* =========================
       REQUEST BODY
       ========================= */
    const body = await req.json();

    const nom = safe(body.nom);
    const email = safe(body.email);
    const telephone = safe(body.telephone);
    const service = safe(body.service || "non spécifié");
    const message = safe(body.message);

    /* =========================
       VALIDATION
       ========================= */
    if (!nom || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      );
    }

    /* =========================
       DB (SAFE LAZY LOAD)
       ========================= */
    try {
      const db = await getDb();

      await db.execute(
        `INSERT INTO leads (nom, email, telephone, service, message)
         VALUES (?, ?, ?, ?, ?)`,
        [nom, email, telephone, service, message]
      );

      console.log("💾 Lead saved");
    } catch (dbErr) {
      console.error("❌ DB ERROR:", dbErr);
    }

    /* =========================
       EMAIL TEMPLATE
       ========================= */
    const emailHtml = `
      <h2>📩 Nouveau message</h2>

      <p><b>Nom:</b> ${nom}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Téléphone:</b> ${telephone || "Non renseigné"}</p>
      <p><b>Service:</b> ${service}</p>

      <hr />

      <p><b>Message:</b></p>
      <p>${message}</p>
    `;

    /* =========================
       MAIN EMAIL
       ========================= */
    await resend.emails.send({
      from: "Multi Services <contact@multiservicesdelapaix.fr>",
      to: contactEmail,
      subject: `Nouveau contact - ${service}`,
      html: emailHtml,
    });

    /* =========================
       ADMIN COPY
       ========================= */
    if (forwardEmail) {
      try {
        await resend.emails.send({
          from: "Multi Services <contact@multiservicesdelapaix.fr>",
          to: forwardEmail,
          subject: `📌 COPY - ${service}`,
          html: emailHtml,
        });
      } catch (err) {
        console.error("⚠️ Admin copy failed:", err);
      }
    }

    /* =========================
       AUTO REPLY
       ========================= */
    try {
      await resend.emails.send({
        from: "Multi Services <contact@multiservicesdelapaix.fr>",
        to: email,
        subject: `Nous avons bien reçu votre demande - ${service}`,
        html: `
          <p>Bonjour ${nom},</p>
          <p>Nous avons bien reçu votre demande concernant :</p>
          <p><b>${service}</b></p>
          <p>Notre équipe vous répondra rapidement.</p>
          <br/>
          <p>— Multi Services de la Paix</p>
        `,
      });
    } catch (err) {
      console.error("⚠️ Auto-reply failed:", err);
    }

    /* =========================
       RESPONSE
       ========================= */
    return NextResponse.json({
      success: true,
      message: "Email sent + saved to database",
    });

  } catch (err: any) {
    console.error("🔥 API ERROR:", err);

    return NextResponse.json(
      {
        success: false,
        message: err?.message || "Server error",
      },
      { status: 500 }
    );
  }
}