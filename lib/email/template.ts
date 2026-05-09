export const buildEmailHtml = (data: {
  nom: string;
  email: string;
  telephone: string;
  service: string;
  message: string;
}) => {
  const { nom, email, telephone, service, message } = data;

  const card = (label: string, value: string, highlight = false) => `
    <div style="padding:14px;border:1px solid #eee;border-radius:12px;background:${highlight ? '#fffaf0' : '#fff'};">
      <p style="margin:0;font-size:11px;color:#888;text-transform:uppercase;">
        ${label}
      </p>
      <p style="margin:6px 0 0;font-size:14px;font-weight:600;color:${highlight ? '#d4af37' : '#1c2430'};">
        ${value}
      </p>
    </div>
  `;

  return `
    <div style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial,sans-serif;background:#f5f0e6;padding:40px 0;">

      <div style="max-width:640px;margin:0 auto;background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.08);">

        <div style="background:linear-gradient(135deg,#1c2430,#0f172a);padding:28px 30px;">
          <h2 style="margin:0;color:#fff;font-size:18px;">
            Nouveau Lead
          </h2>
        </div>

        <div style="padding:30px;display:grid;gap:14px;">
          ${card("Nom", nom)}
          ${card("Email", email)}
          ${card("Téléphone", telephone || "Non renseigné")}
          ${card("Service", service, true)}
        </div>

        <div style="padding:0 30px 30px;">
          <div style="padding:16px;border-radius:12px;background:#fafafa;border:1px solid #eee;">
            <p style="margin:0;font-size:11px;color:#888;">Message</p>
            <p style="margin:8px 0 0;font-size:14px;line-height:1.6;color:#1c2430;">
              ${message}
            </p>
          </div>
        </div>

      </div>
    </div>
  `;
};