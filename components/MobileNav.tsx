"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Histoire", href: "/histoire" },
  { label: "Environnement", href: "/environnement" },
  { label: "L'Association", href: "/about" },
  { label: "Contact", href: "/contacts" },
];

const articleLinks = [
  { label: "Histoire", href: "/articles/histoire" },
  { label: "Environnement", href: "/articles/environnement" },
  { label: "Actualités", href: "/articles/actualites" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(true);
  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        className="p-3 -mr-1 cursor-pointer text-stone-600 hover:text-[#968370] transition-colors touch-manipulation"
      >
        {open ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-stone-200 shadow-xl z-50 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={close}
              className="uppercase tracking-widest text-[12px] font-medium text-stone-700 hover:text-[#968370] transition-colors"
            >
              {l.label}
            </Link>
          ))}

          <div>
            <Link
              href="/articles"
              onClick={close}
              className="uppercase tracking-widest text-[12px] font-medium text-stone-700 hover:text-[#968370] transition-colors"
            >
              Articles
            </Link>
            <div className="mt-3 pl-4 flex flex-col gap-3 border-l border-stone-200">
              {articleLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="text-[11px] uppercase tracking-widest text-stone-500 hover:text-[#968370] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/dons"
            onClick={close}
            className="bg-[#968370] text-white text-center py-3 uppercase tracking-widest text-xs font-semibold hover:bg-[#7d6b5d] transition-colors"
          >
            Nous soutenir
          </Link>
        </div>
      )}
    </div>
  );
}
