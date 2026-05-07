import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-400 py-16 mt-24 border-t-4 border-[#968370]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Identité - 5 colonnes sur 12 pour donner de l'importance */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="inline-block">
              <h3 className="font-serif text-3xl text-white leading-none">
                Vivre au <span className="text-[#968370]">Pardailhan</span>
              </h3>
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-stone-500 font-semibold mt-2">
                Histoire & Patrimoine
              </p>
            </Link>
            <div className="text-sm leading-relaxed space-y-1 pt-4">
              <p className="flex items-center gap-2">
                <span className="text-[#968370]">📍</span> 4 Rue du Secadou, Le
                Château
              </p>
              <p className="pl-6">34360 Pardailhan</p>
              <p className="pt-4 flex items-center gap-2">
                <span className="text-[#968370]">✉️</span>
                <a
                  href="mailto:vincent-joecker@orange.fr"
                  className="text-white hover:text-[#968370] transition-colors"
                >
                  association.pardailhan@orange.fr
                </a>
              </p>
            </div>
          </div>

          {/* Navigation - 3 colonnes */}
          <div className="md:col-span-3">
            <h3 className="text-white font-serif text-xl mb-6">Navigation</h3>
            <ul className="text-sm space-y-3 uppercase tracking-wider text-[12px]">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#968370] transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/histoire"
                  className="hover:text-[#968370] transition-colors"
                >
                  Histoire
                </Link>
              </li>
              <li>
                <Link
                  href="/environnement"
                  className="hover:text-[#968370] transition-colors"
                >
                  Environnement
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#968370] transition-colors"
                >
                  L&apos;Association
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="hover:text-[#968370] transition-colors"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="hover:text-[#968370] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Engagement - 4 colonnes */}
          <div className="md:col-span-4 space-y-8">
            <div>
              <h3 className="text-white font-serif text-xl mb-6">
                Soutenir l&apos;action
              </h3>
              <p className="text-sm mb-6 leading-relaxed">
                Aidez-nous à préserver et faire rayonner le patrimoine
                exceptionnel de nos hameaux.
              </p>
              <Link
                href="/dons"
                className="inline-block bg-white text-stone-900 px-6 py-3 rounded-sm font-semibold hover:bg-[#968370] hover:text-white transition-all duration-300 uppercase text-xs tracking-widest"
              >
                Faire un don
              </Link>
            </div>

            <div className="pt-4">
              <a
                href="#"
                className="flex items-center gap-3 text-sm hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 rounded-full border border-stone-700 flex items-center justify-center group-hover:border-[#968370]">
                  fb
                </span>
                Suivre l&apos;actualité sur Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Crédits */}
        <div className="border-t border-stone-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] uppercase tracking-[0.2em] text-stone-500 text-center md:text-left">
          <div>
            <p>
              &copy; {currentYear} Pardailhan —{" "}
              <Link
                href="/mentions-legales"
                className="hover:text-white transition-colors underline underline-offset-4 decoration-stone-700"
              >
                Mentions Légales
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span>Conçu avec passion par</span>
            <span className="text-stone-300 font-semibold tracking-normal">
              Julien Joecker
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
