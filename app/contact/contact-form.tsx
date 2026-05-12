"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { toast, Toaster } from "sonner";
import { useSearchParams } from "next/navigation";
import { resolveService } from "@/lib/services/resolveService";

interface FieldProps {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  error?: string;
  onChange: (v: string) => void;
  isTextArea?: boolean;
}

function Field({
  label,
  placeholder,
  type = "text",
  value,
  error,
  onChange,
  isTextArea,
}: FieldProps) {
  return (
    <div className="space-y-1 w-full min-w-0">
      <label className="text-[11px] uppercase tracking-[0.2em] text-[#1c2430]/60">
        {label}
      </label>

      {isTextArea ? (
        <textarea
          rows={4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full max-w-full bg-transparent border-b border-[#1c2430]/20 focus:border-[#d4af37] py-3 text-sm outline-none transition text-[#1c2430] placeholder:text-[#1c2430]/40 resize-none"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full max-w-full bg-transparent border-b border-[#1c2430]/20 focus:border-[#d4af37] py-3 text-sm outline-none transition text-[#1c2430] placeholder:text-[#1c2430]/40"
        />
      )}

      {error && (
        <p className="text-[10px] text-red-500 animate-pulse">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);

  const [status, setStatus] =
    useState<"idle" | "sending" | "success" | "error">("idle");

  const [errors, setErrors] = useState<Record<string, string>>({});

  const [lastSubmit, setLastSubmit] = useState(0);

  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    type: "urgence-serrurerie",
    message: "",
    consent: false,
    website: "",
  });

  useEffect(() => setMounted(true), []);

  // =========================
  // ✅ FIXED SERVICE PARSING (PRODUCTION SAFE + FULLY COMPATIBLE)
  // =========================
  useEffect(() => {
  const raw = searchParams.get("service");

  const matched = resolveService(raw);

  setForm((f) => ({
    ...f,
    type: matched,
  }));

  // 👇 ADD THIS PART (this is the missing UX behavior)
  setTimeout(() => {
    const el = document.getElementById("contact-form");

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, 100);
}, [searchParams]);

  const update = (k: string, v: string | boolean) => {
    setForm((f) => ({ ...f, [k]: v }));
  };

  const validate = () => {
    const e: Record<string, string> = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const frenchPhoneRegex =
      /^(?:(?:\+33|0)[1-9])(?:[\s.-]?\d{2}){4}$/;

    const suspiciousPatterns = [
      "http://",
      "https://",
      "viagra",
      "crypto",
      "bitcoin",
    ];

    if (!form.nom.trim()) e.nom = "Requis";
    if (!form.prenom.trim()) e.prenom = "Requis";

    if (!emailRegex.test(form.email))
      e.email = "Email invalide";

    if (!frenchPhoneRegex.test(form.telephone))
      e.telephone = "Numéro français invalide";

    if (form.message.trim().length < 10)
      e.message = "Trop court";

    if (
      suspiciousPatterns.some((p) =>
        form.message.toLowerCase().includes(p)
      )
    ) {
      e.message = "Message invalide";
    }

    if (!form.consent) e.consent = "Obligatoire";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const now = Date.now();

    if (now - lastSubmit < 15000) {
      toast.error("Veuillez patienter quelques secondes");
      return;
    }

    if (form.website) {
      toast.error("Spam détecté");
      return;
    }

    if (!validate()) {
      toast.error("Corrigez le formulaire");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: `${form.prenom} ${form.nom}`,
          email: form.email,
          telephone: form.telephone,
          service: form.type,
          message: form.message,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.message || "Request failed");
      }

      setLastSubmit(Date.now());
      setStatus("success");

      toast.success("Message envoyé");

      setTimeout(() => {
        setForm({
          nom: "",
          prenom: "",
          telephone: "",
          email: "",
          type: "urgence-serrurerie",
          message: "",
          consent: false,
          website: "",
        });

        setStatus("idle");
      }, 3000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      toast.error("Erreur serveur");

      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  if (!mounted) return null;

  return (
    <>
      <Toaster position="top-right" richColors />

      <div id="contact-form">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full max-w-full min-w-0 rounded-4xl border border-white/30 bg-white/70 backdrop-blur-xl shadow-2xl p-5 sm:p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 h-72 w-72 bg-[#d4af37]/10 blur-3xl rounded-full" />

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div className="flex flex-col items-center text-center py-12 sm:py-16">
                <CheckCircle2 className="h-12 w-12 sm:h-14 sm:w-14 text-[#d4af37]" />
                <h3 className="mt-4 text-xl sm:text-2xl font-semibold">
                  Message envoyé
                </h3>
                <p className="text-sm text-[#1c2430]/60 mt-2">
                  Nous vous répondrons rapidement
                </p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-5 sm:space-y-6 w-full min-w-0"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1c2430]">
                  Contactez-nous
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
                  <Field
                    label="Nom"
                    placeholder="Nom"
                    value={form.nom}
                    error={errors.nom}
                    onChange={(v) => update("nom", v)}
                  />

                  <Field
                    label="Prénom"
                    placeholder="Prénom"
                    value={form.prenom}
                    error={errors.prenom}
                    onChange={(v) => update("prenom", v)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
                  <Field
                    label="Email"
                    placeholder="email@exemple.fr"
                    value={form.email}
                    error={errors.email}
                    onChange={(v) => update("email", v)}
                  />

                  <Field
                    label="Téléphone"
                    placeholder="06..."
                    value={form.telephone}
                    error={errors.telephone}
                    onChange={(v) => update("telephone", v)}
                  />
                </div>

                <div className="w-full">
                  <label className="text-[11px] uppercase tracking-[0.2em] text-[#1c2430]/60">
                    Type de demande
                  </label>

                  <select
                    value={form.type}
                    onChange={(e) => update("type", e.target.value)}
                    className="w-full bg-transparent border-b border-[#1c2430]/20 py-3 text-sm focus:border-[#d4af37] outline-none"
                  >
                    <option value="urgence-serrurerie">Urgence serrurerie</option>
                    <option value="serrurerie-habitation">Serrurerie habitation</option>
                    <option value="serrurerie-auto">Serrurerie auto</option>
                    <option value="reproduction-cles">Reproduction de clés</option>
                    <option value="cordonnerie">Cordonnerie</option>
                    <option value="vitrerie">Vitrerie</option>
                    <option value="plaques-gravure">Plaques & gravure</option>
                    <option value="demande-devis">Demande de devis</option>
                    <option value="autre-demande">Autre demande</option>
                  </select>
                </div>

                <Field
                  isTextArea
                  label="Message"
                  placeholder="Décrivez votre besoin..."
                  value={form.message}
                  error={errors.message}
                  onChange={(v) => update("message", v)}
                />

                <input
                  type="text"
                  className="hidden"
                  value={form.website}
                  onChange={(e) => update("website", e.target.value)}
                />

                <label className="flex gap-3 text-xs text-[#1c2430]/60">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => update("consent", e.target.checked)}
                  />
                  J'accepte la politique de confidentialité
                </label>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full btn-gold inline-flex items-center justify-center gap-2 rounded px-6 py-4 shadow-lg font-medium uppercase tracking-[0.2em] text-[11px]"
                >
                  {status === "sending" ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  Envoyer
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}