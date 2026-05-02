export const COOKIE_KEY = "cookie_consent";

export function getCookieConsent(): "accepted" | "rejected" | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(COOKIE_KEY) as any;
}

export function setCookieConsent(value: "accepted" | "rejected") {
  localStorage.setItem(COOKIE_KEY, value);
}