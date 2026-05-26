import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <Link href="/" className="group">
            <h1 className="font-serif text-2xl text-stone-900 leading-none">
              Vivre au <span className="text-[#968370]">Pardailhan</span>
            </h1>
            <h2 className="font-sans text-[10px] uppercase tracking-[0.3em] text-stone-500 font-semibold mt-1">
              Histoire & Patrimoine
            </h2>
          </Link>

          {/* NAVIGATION */}
          <ul className="hidden md:flex items-center gap-8 uppercase text-[12px] tracking-widest font-medium">
            <li>
              <Link
                href="/histoire"
                className="text-stone-600 hover:text-[#968370] transition-colors"
              >
                Histoire
              </Link>
            </li>
            <li>
              <Link
                href="/environnement"
                className="text-stone-600 hover:text-[#968370] transition-colors"
              >
                Environnement
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-stone-600 hover:text-[#968370] transition-colors"
              >
                L&apos;Association
              </Link>
            </li>

            {/* DROPDOWN ARTICLES */}
            <li className="relative group py-2">
              <Link
                href="/articles"
                className="inline-flex items-center gap-1 text-stone-600 group-hover:text-[#968370] transition-colors"
              >
                <span>Articles</span>
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>

              <ul className="absolute left-0 top-full hidden group-hover:block bg-white border border-stone-100 shadow-xl py-3 z-10 min-w-48">
                {[
                  { label: "Histoire", slug: "histoire" },
                  { label: "Environnement", slug: "environnement" },
                  { label: "Actualités", slug: "actualites" },
                ].map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/articles/${cat.slug}`}
                      className="block px-6 py-2 text-stone-600 hover:bg-stone-50 hover:text-[#968370] lowercase first-letter:uppercase transition-colors"
                    >
                      {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* BOUTON DON */}
            <li>
              <Link
                href="/dons"
                className="bg-[#968370] text-white px-5 py-2.5 rounded-sm hover:bg-[#7d6b5d] transition-all duration-300 font-semibold shadow-sm"
              >
                Nous soutenir
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
