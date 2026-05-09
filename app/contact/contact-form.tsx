"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { toast, Toaster } from "sonner";

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
    <div className="space-y-1">
      <label className="text-[11px] uppercase tracking-[0.2em] text-[#1c2430]/60">
        {label}
      </label>

      {isTextArea ? (
        <textarea
          rows={4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent border-b border-[#1c2430]/20 focus:border-[#d4af37] py-3 text-sm outline-none transition text-[#1c2430] placeholder:text-[#1c2430]/40 resize-none"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent border-b border-[#1c2430]/20 focus:border-[#d4af37] py-3 text-sm outline-none transition text-[#1c2430] placeholder:text-[#1c2430]/40"
        />
      )}

      {error && (
        <p className="text-[10px] text-red-500 animate-pulse">{error}</p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [mounted, setMounted] = useState(false);

  const [status, setStatus] =
    useState<"idle" | "sending" | "success" | "error">("idle");

  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    type: "Dépannage d'urgence",
    message: "",
    consent: false,
  });

  useEffect(() => setMounted(true), []);

  const update = (k: string, v: string | boolean) => {
    setForm((f) => ({ ...f, [k]: v }));
  };

  const validate = () => {
    const e: Record<string, string> = {};

    if (!form.nom) e.nom = "Requis";
    if (!form.prenom) e.prenom = "Requis";
    if (!form.email.includes("@")) e.email = "Email invalide";
    if (form.telephone.length < 8) e.telephone = "Invalide";
    if (form.message.length < 10) e.message = "Trop court";
    if (!form.consent) e.consent = "Obligatoire";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
        console.error("API ERROR:", data);
        throw new Error(data?.message || "Request failed");
      }

      setStatus("success");
      toast.success("Message envoyé");

      setTimeout(() => {
        setForm({
          nom: "",
          prenom: "",
          telephone: "",
          email: "",
          type: "Dépannage d'urgence",
          message: "",
          consent: false,
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
      {/* ✅ FIXED TOAST LAYER */}
      <Toaster
        position="top-right"
        richColors
        toastOptions={{
          style: {
            zIndex: 999999,
          },
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-4xl border border-white/30 bg-white/70 backdrop-blur-xl shadow-2xl p-8 md:p-12 overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 h-72 w-72 bg-[#d4af37]/10 blur-3xl rounded-full" />

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              className="flex flex-col items-center text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <CheckCircle2 className="h-14 w-14 text-[#d4af37]" />
              <h3 className="mt-4 text-2xl font-semibold">
                Message envoyé
              </h3>
              <p className="text-sm text-[#1c2430]/60 mt-2">
                Nous vous répondrons rapidement
              </p>
            </motion.div>
          ) : (
            <motion.form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#1c2430]">
                Contactez-nous
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
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

              <div className="grid sm:grid-cols-2 gap-6">
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

              <div>
                <label className="text-[11px] uppercase tracking-[0.2em] text-[#1c2430]/60">
                  Type de demande
                </label>

                <select
                  value={form.type}
                  onChange={(e) => update("type", e.target.value)}
                  className="w-full bg-transparent border-b border-[#1c2430]/20 py-3 text-sm focus:border-[#d4af37] outline-none"
                >
                  <option>Dépannage d'urgence</option>
                  <option>Devis Gratuit</option>
                  <option>Serrurerie</option>
                  <option>Vitrerie</option>
                  <option>Cordonnerie</option>
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
    </>
  );
}