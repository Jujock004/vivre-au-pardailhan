export default function LegalMentions() {
  return (
    <main className="w-full bg-stone-50 pb-24">
      {/* Header de page Sobre */}
      <header className="max-w-4xl mx-auto px-6 pt-20 pb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-stone-900 uppercase tracking-widest">
          Mentions{" "}
          <span className="text-[#968370] italic lowercase">Légales</span>
        </h1>
        <div className="h-1 w-20 bg-[#968370] mt-6"></div>
      </header>

      <div className="max-w-4xl mx-auto px-6 bg-white shadow-sm border border-stone-100 p-10 md:p-16">
        <section className="space-y-12 font-sans text-stone-700 leading-relaxed">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-serif text-[#968370] mb-6 uppercase tracking-wider border-b border-stone-100 pb-2">
              1. Éditeur du site
            </h2>
            <p className="mb-4">
              Le site internet est édité par l&apos;association{" "}
              <strong>Histoire et Patrimoine du Pardailhan</strong>, association
              loi 1901.
            </p>
            <ul className="space-y-3 pl-4 border-l-2 border-stone-100">
              <li>
                <span className="text-stone-400 uppercase text-xs font-semibold tracking-widest block">
                  Siège social
                </span>
                Le château, 4 rue du Sécadou, 34360 Pardailhan
              </li>
              <li>
                <span className="text-stone-400 uppercase text-xs font-semibold tracking-widest block">
                  Numéro RNA
                </span>
                W341008766
              </li>
              <li>
                <span className="text-stone-400 uppercase text-xs font-semibold tracking-widest block">
                  Directeur de la publication
                </span>
                Vincent Joecker
              </li>
              <li>
                <span className="text-stone-400 uppercase text-xs font-semibold tracking-widest block">
                  Contact
                </span>
                association.pardailhan@orange.fr
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-serif text-[#968370] mb-6 uppercase tracking-wider border-b border-stone-100 pb-2">
              2. Hébergement
            </h2>
            <div className="p-4 bg-stone-50 rounded-sm">
              <p>
                <strong>Vercel Inc.</strong>
              </p>
              <p className="text-sm">
                440 N Barranca Ave #4133, Covina, CA 91723
              </p>
              <p className="text-sm italic mt-2">
                Hébergement Cloud haute performance.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-serif text-[#968370] mb-6 uppercase tracking-wider border-b border-stone-100 pb-2">
              3. Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, photographies,
              structure) est la propriété exclusive de l&apos;association{" "}
              <strong>Histoire et Patrimoine du Pardailhan</strong>. Toute
              reproduction, même partielle, est interdite sans autorisation
              préalable écrite.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-serif text-[#968370] mb-6 uppercase tracking-wider border-b border-stone-100 pb-2">
              4. Données personnelles (RGPD)
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-sm">
                  <strong className="block text-stone-900">
                    Responsable du traitement
                  </strong>
                  Histoire et Patrimoine du Pardailhan
                </p>
                <p className="text-sm">
                  <strong className="block text-stone-900">Finalité</strong>
                  Gestion des demandes de contact et envoi de la newsletter.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-sm">
                  <strong className="block text-stone-900">Conservation</strong>
                  3 ans après le dernier contact actif.
                </p>
                <p className="text-sm">
                  <strong className="block text-stone-900">Vos droits</strong>
                  Accès, rectification et suppression. Contactez-nous à
                  l&apos;adresse mail ci-dessus.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Petit message de fin discret */}
      <footer className="max-w-4xl mx-auto px-6 mt-12 text-center text-stone-400 text-xs italic">
        Dernière mise à jour : Mai 2026
      </footer>
    </main>
  );
}
