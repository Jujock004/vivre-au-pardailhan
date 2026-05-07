export function Historique() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl text-stone-900 uppercase tracking-widest">
          Notre Parcours
        </h2>
        <p className="text-[#968370] italic mt-2">
          Les grandes étapes de notre engagement
        </p>
      </div>

      <div className="relative border-l-2 border-stone-200 ml-4 md:ml-auto md:mr-auto md:border-l-0 md:before:absolute md:before:left-1/2 md:before:h-full md:before:w-0.5 md:before:bg-stone-200">
        {/* Date 1 - La Création */}
        <div className="mb-12 relative md:flex md:justify-between md:items-center w-full">
          <div className="hidden md:block w-[45%]"></div>
          <div className="absolute -left-[9px] md:left-1/2 md:-ml-2 w-4 h-4 rounded-full bg-[#968370] border-4 border-white shadow"></div>
          <div className="md:w-[45%] pl-8 md:pl-0 md:text-right">
            <span className="font-serif text-2xl text-[#968370] block mb-1">
              20XX
            </span>
            <h3 className="font-bold text-stone-800 uppercase tracking-wide mb-2 text-sm">
              Fondation de l&apos;Association
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Réunion des membres fondateurs au Château pour structurer la
              protection du patrimoine bâti et naturel des dix hameaux.
            </p>
          </div>
        </div>

        {/* Date 2 - Premier Inventaire */}
        <div className="mb-12 relative md:flex md:justify-between md:items-center w-full">
          <div className="md:w-[45%] pr-8 text-left md:text-right order-2 md:order-1 pl-8 md:pl-0">
            <span className="font-serif text-2xl text-[#968370] block mb-1">
              20XX
            </span>
            <h3 className="font-bold text-stone-800 uppercase tracking-wide mb-2 text-sm">
              Inventaire du Petit Patrimoine
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Recensement des capitelles, murets et vestiges liés à
              l&apos;activité pastorale et agricole historique de la commune.
            </p>
          </div>
          <div className="absolute -left-[9px] md:left-1/2 md:-ml-2 w-4 h-4 rounded-full bg-stone-300 border-4 border-white shadow"></div>
          <div className="hidden md:block w-[45%] order-1 md:order-2"></div>
        </div>

        {/* Date 3 - Dossier Environnement */}
        <div className="mb-12 relative md:flex md:justify-between md:items-center w-full">
          <div className="hidden md:block w-[45%]"></div>
          <div className="absolute -left-[9px] md:left-1/2 md:-ml-2 w-4 h-4 rounded-full bg-stone-300 border-4 border-white shadow"></div>
          <div className="md:w-[45%] pl-8 md:pl-0">
            <span className="font-serif text-2xl text-[#968370] block mb-1">
              20XX
            </span>
            <h3 className="font-bold text-stone-800 uppercase tracking-wide mb-2 text-sm">
              Action Aquifère & Karst
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Lancement d&apos;une campagne de sensibilisation sur la fragilité
              des ressources en eau et l&apos;importance du réseau karstique
              souterrain.
            </p>
          </div>
        </div>

        {/* Date 4 - Aujourd&apos;hui */}
        <div className="relative md:flex md:justify-between md:items-center w-full">
          <div className="md:w-[45%] pr-8 text-left md:text-right order-2 md:order-1 pl-8 md:pl-0">
            <span className="font-serif text-2xl text-[#968370] block mb-1">
              Aujourd&apos;hui
            </span>
            <h3 className="font-bold text-stone-800 uppercase tracking-wide mb-2 text-sm">
              Digitalisation du Savoir
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Lancement du nouveau site internet pour partager nos archives et
              nos articles de recherche avec le plus grand nombre.
            </p>
          </div>
          <div className="absolute -left-[9px] md:left-1/2 md:-ml-2 w-4 h-4 rounded-full bg-[#968370] border-4 border-white shadow"></div>
          <div className="hidden md:block w-[45%] order-1 md:order-2"></div>
        </div>
      </div>
    </section>
  );
}
