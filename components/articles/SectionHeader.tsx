"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeaderProps {
  type: "Histoire" | "Environnement" | "Actualites";
}

import { SECTIONS_DATA } from "@/constants/sections";

export default function SectionHeader({ type }: HeaderProps) {
  const data = SECTIONS_DATA[type];

  if (!data) return null;

  return (
    <div className="relative h-[60vh] min-h-[400px] w-full w-screen left-[50%] right-[50%] -ml-[50vw] +mr-[50vw] overflow-hidden mb-16 bg-stone-900">
      {/* Image de fond avec effet Parallaxe / Zoom au chargement */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full"
      >
        <Image
          src={data.bgImage}
          alt={data.title}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Overlay sombre pour la lisibilité */}
      <div
        className={`absolute inset-0 ${data.bgOverlay} mix-blend-multiply`}
      />

      {/* Contenu textuel centré */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[11px] font-bold uppercase tracking-[0.4em] text-stone-300 block mb-3"
          >
            {data.subtitle}
          </motion.span>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl md:text-6xl tracking-wide mb-6 font-light"
          >
            {data.title.split(" & ")[0]}
            {data.title.includes(" & ") && (
              <span className="italic font-normal font-serif text-stone-300">
                {" "}
                & {data.title.split(" & ")[1]}
              </span>
            )}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
            className="w-24 h-[1px] bg-stone-400 mx-auto mb-6"
          />

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-stone-200 font-sans font-light text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
          >
            {data.description}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
