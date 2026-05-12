export const SERVICE_MAP: Record<string, string> = {
  "serrurerie-habitation": "serrurerie-habitation",
  "serrurerie-auto": "serrurerie-auto",
  "cordonnerie": "cordonnerie",
  "vitrerie": "vitrerie",
  "plaques-gravure": "plaques-gravure",
  "reproduction-cles": "reproduction-cles",

  // aliases / SEO / broken links
  "rideaux-metalliques": "serrurerie-habitation",
  "urgence-serrurerie": "urgence-serrurerie",
  "urgence": "urgence-serrurerie",
  "devis": "demande-devis",
  "contact": "demande-devis",
};

export function resolveService(raw?: string | null): string {
  if (!raw) return "demande-devis";

  try {
    let value = decodeURIComponent(raw)
      .replace(/#/g, "")
      .trim()
      .toLowerCase();

    // extract from broken URLs
    if (value.includes("service=")) {
      value = value.split("service=").pop() || "";
    }

    value = value.replace(/^\/+/, "");

    return SERVICE_MAP[value] ?? "demande-devis";
  } catch {
    return "demande-devis";
  }
}