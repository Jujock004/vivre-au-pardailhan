import Image from "next/image";
import Link from "next/link";

export default function HistoirePage() {
  return (
    <main className="w-full pb-12 md:pb-24">
      <header className="max-w-5xl mx-auto px-6 pt-10 md:pt-16 pb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-900 uppercase tracking-widest">
          Histoire & Patrimoine
        </h1>
        <div className="h-1 w-20 bg-[#968370] mt-6"></div>
      </header>

      <section className="max-w-7xl mx-auto py-10 md:py-16 px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="md:w-1/2 space-y-6">
          <h2 className="font-serif text-2xl md:text-3xl text-stone-800 leading-tight uppercase tracking-wider">
            Un Terroir <br />
            <span className="text-[#968370] italic text-xl md:text-2xl lowercase">
              &quot;Peu fertile&quot;
            </span>
          </h2>
          <p className="text-stone-600 text-base md:text-lg leading-relaxed font-sans">
            Le Pardailhan, entre le Minervois et le Saint-Chinianais, est situé
            dans les montagnes du Bas-Languedoc. Son étendue est considérable,
            mais son terroir est décrit dès le 18e siècle comme peu fertile. Une
            terre de labeur où les habitants vivaient &quot;d'une manière fort
            dure&quot;.
          </p>
        </div>
        <div className="md:w-1/2 relative h-[260px] md:h-[360px] lg:h-[450px] w-full shadow-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
          <Image
            src="https://pays-saint-ponais.fr/pontguiraud.jpg"
            alt="Paysage historique du Pardailhan"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="py-12 md:py-24 bg-stone-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
            <div className="order-2 lg:order-1 relative w-full h-[350px] md:h-[460px] lg:h-[550px]">
              <div className="absolute inset-0 w-4/5 h-4/5 shadow-2xl z-0 overflow-hidden rounded-sm">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/2/26/Ch%C3%A2teau_de_Pardailhan.JPG"
                  alt="Le Château de Pardailhan"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-2/6 h-2/4 shadow-2xl z-10 border-8 border-white overflow-hidden rounded-sm">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/0/02/Thomas-de-Pardailhan.JPG"
                  alt="Portrait de Thomas de Treil de Pardailhan"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <h2 className="font-serif text-3xl md:text-4xl text-stone-900 leading-tight">
                  L&apos;héritage de <br />
                  <span className="text-[#968370] italic">Thomas de Treil</span>
                </h2>
                <div className="h-1 w-20 bg-[#968370]"></div>
              </div>

              <div className="space-y-6">
                <p className="text-base md:text-xl font-serif text-stone-700 leading-relaxed italic border-l-4 border-[#968370] pl-6">
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

              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">
                Seigneurie acquise en 1750 — Diocèse de Saint-Pons
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 uppercase tracking-widest">
              Les Dix Hameaux
            </h2>
            <div className="h-1 w-20 bg-[#968370] mx-auto mt-4"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
            <div className="lg:w-1/2 space-y-6 md:space-y-8">
              <div className="space-y-4 text-stone-600 font-sans text-base md:text-lg">
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

            <div className="w-full lg:w-1/2 relative h-[220px] md:h-[300px] shadow-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
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

      <section className="py-12 md:py-16 text-center border-t border-stone-100">
        <p className="text-[#968370] uppercase tracking-widest text-xs font-bold mb-4">
          Aller plus loin
        </p>
        <h2 className="font-serif text-2xl md:text-3xl text-stone-900 mb-8">
          Tous nos articles <span className="italic">d'histoire</span>
        </h2>
        <Link
          href="/articles/histoire"
          className="inline-block bg-stone-900 text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-[#968370] transition-colors duration-300"
        >
          Consulter les articles
        </Link>
      </section>
    </main>
  );
}
