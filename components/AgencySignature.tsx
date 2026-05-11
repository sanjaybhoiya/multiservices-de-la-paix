import { agency } from "@/lib/agency";

export default function AgencySignature() {
  const { signature } = agency;

  return (
    <a
      href={signature.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 text-[11px] text-white/30  transition-colors duration-500 hover:text-gold hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.7)]"
    >
      <span className="h-px w-6 bg-white/20 group-hover:w-8 transition-all duration-500" />

      <span className="opacity-60">{signature.labelPrefix}</span>

<span className="tracking-[0.35em] relative transition-colors duration-500 hover:text-gold hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.7)]">
        {signature.name}
        <span className="absolute left-0 -bottom-1 h-px w-0 bg-white/60 group-hover:w-full transition-all duration-500" />
      </span>

      <span className="opacity-60">{signature.suffix}</span>
    </a>
  );
}