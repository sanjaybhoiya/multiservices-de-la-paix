"use client";

import { RevealOnScroll } from "@/components/RevealOnScroll";

export function RevealProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RevealOnScroll />
      {children}
    </>
  );
}