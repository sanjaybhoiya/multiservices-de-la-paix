"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

interface Social {
  facebook?: string;
  instagram?: string;
  tiktok?: string;
}

interface Props {
  social: Social;
  variant?: "header" | "footer";
}

export default function SocialLinks({
  social,
  variant = "footer",
}: Props) {
  const baseIcon =
    "transition-colors duration-300";

  const size = variant === "header" ? "h-3.5 w-3.5" : "h-4 w-4";

  return (
    <div className="flex items-center gap-5">

      {/* FACEBOOK */}
      <motion.a
        href={social.facebook}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className={`${baseIcon} ${
          variant === "header"
            ? "text-white/70 hover:text-[#1877F2]"
            : "text-white/60 hover:text-[#1877F2]"
        }`}
      >
        <FaFacebookF className={size} />
      </motion.a>

      {/* INSTAGRAM */}
      <motion.a
        href={social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className={`${baseIcon} ${
          variant === "header"
            ? "text-white/70 hover:text-[#E4405F]"
            : "text-white/60 hover:text-[#E4405F]"
        }`}
      >
        <FaInstagram className={size} />
      </motion.a>

      {/* TIKTOK */}
      <motion.a
        href={social.tiktok}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className={`${baseIcon} ${
          variant === "header"
            ? "text-white/70 hover:text-[#25F4EE]"
            : "text-white/60 hover:text-[#25F4EE]"
        }`}
      >
        <FaTiktok className={size} />
      </motion.a>

    </div>
  );
}