"use client";

interface HeaderProps {
  type: "Histoire" | "Environnement" | "Actualites" | "Articles" | "Archives";
}

import { SECTIONS_DATA } from "@/constants/sections";

export default function SectionHeader({ type }: HeaderProps) {
  const data = SECTIONS_DATA[type];

  if (!data) return null;

  return (
    <header className="mb-16">
      <span className="text-[#968370] uppercase tracking-widest text-xs font-bold">
        {data.subtitle}
      </span>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-900 mt-2">
        {data.title}
      </h1>
      <div className="h-1 w-20 bg-[#968370] mt-6"></div>
    </header>
  );
}
