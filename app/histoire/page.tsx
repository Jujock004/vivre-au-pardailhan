import Image from "next/image";

export default function HistoirePage() {
  return (
    <main className="w-full pb-24">
      {/* 1. Header de page avec titre imposant */}
      <header className="max-w-5xl mx-auto px-6 pt-16 pb-8">
        <h1 className="text-4xl md:text-5xl font-serif text-stone-900 uppercase tracking-widest">
          Histoire & Patrimoine
        </h1>
        <div className="h-1 w-20 bg-[#968370] mt-6"></div>
      </header>

      {/* 2. Section : Le 18ème siècle (Rudesse et Territoire) */}
      <section className="max-w-7xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h2 className="font-serif text-3xl text-stone-800 leading-tight uppercase tracking-wider">
            Un Terroir <br />
            <span className="text-[#968370] italic text-2xl lowercase">
              &quot;Peu fertile&quot;
            </span>
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed font-sans">
            Le Pardailhan, entre le Minervois et le Saint-Chinianais, est situé
            dans les montagnes du Bas-Languedoc. Son étendue est considérable,
            mais son terroir est décrit dès le 18e siècle comme peu fertile. Une
            terre de labeur où les habitants vivaient &quot;d’une manière fort
            dure&quot;.
          </p>
        </div>
        <div className="md:w-1/2 relative h-[450px] w-full shadow-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
          <Image
            src="https://pays-saint-ponais.fr/pontguiraud.jpg"
            alt="Paysage historique du Pardailhan"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Section : Le Baron et son Fief */}
      <section className="py-24 bg-stone-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Montage Visuel : Le Château + Le Baron */}
            <div className="relative w-full h-[550px]">
              {/* Image principale : Le Château */}
              <div className="absolute inset-0 w-4/5 h-4/5 shadow-2xl z-0 overflow-hidden rounded-sm">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/2/26/Ch%C3%A2teau_de_Pardailhan.JPG"
                  alt="Le Château de Pardailhan"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Image superposée : Le Baron (gravure ou portrait) */}
              <div className="absolute bottom-0 right-0 w-2/6 h-2/4 shadow-2xl z-10 border-8 border-white overflow-hidden rounded-sm">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/0/02/Thomas-de-Pardailhan.JPG"
                  alt="Portrait de Thomas de Treil de Pardailhan"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Texte fusionné */}
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <h2 className="font-serif text-4xl text-stone-900 leading-tight">
                  L&apos;héritage de <br />
                  <span className="text-[#968370] italic">Thomas de Treil</span>
                </h2>
                <div className="h-1 w-20 bg-[#968370]"></div>
              </div>

              <div className="space-y-6">
                <p className="text-xl font-serif text-stone-700 leading-relaxed italic border-l-4 border-[#968370] pl-6">
                  Le château de Pardailhan conserve le souvenir du dernier
                  seigneur baron de Pardailhan, témoin et acteur engagé de la
                  Révolution française.
                </p>

                <p className="text-stone-600 font-sans leading-relaxed">
                  Figure de transition entre la noblesse d&apos;Ancien Régime et
                  l&apos;idéal républicain, le Baron incarne la dualité de ce
                  territoire : une ancrage seigneurial profond dans une terre de
                  caractère, tourné vers les grands bouleversements de la
                  Nation.
                </p>
              </div>

              {/* Petit détail technique discret */}
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">
                Seigneurie acquise en 1750 — Diocèse de Saint-Pons
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section : Les Dix Hameaux (Ton code optimisé) */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-stone-900 uppercase tracking-widest">
              Les Dix Hameaux
            </h2>
            <div className="h-1 w-20 bg-[#968370] mx-auto mt-4"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4 text-stone-600 font-sans text-lg">
                <p>
                  La commune de Pardailhan est composée de dix hameaux groupant
                  un habitat datant pour l&apos;essentiel du 18ème et 19ème
                  siècle, simple voire austère.
                </p>
                <p>
                  Les extensions pavillonnaires restent peu importantes,
                  limitées par les contraintes environnementales du territoire
                  karstique.
                </p>
              </div>
            </div>

            <div className="md:w-1/2 relative h-[300px] w-full shadow-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <Image
                src="https://pays-saint-ponais.fr/st-jean-minervois.JPG"
                alt="Paysage historique du Pardailhan"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
