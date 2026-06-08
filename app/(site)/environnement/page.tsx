import Image from "next/image";
import Link from "next/link";

export default function EnvironnementPage() {
  return (
    <main className="w-full pb-16 md:pb-24">
      <header className="max-w-5xl mx-auto px-6 pt-12 md:pt-16 pb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-900 uppercase tracking-widest">
          Environnement
        </h1>
        <div className="h-1 w-20 bg-[#968370] mt-6"></div>
      </header>

      <section className="max-w-7xl mx-auto py-10 md:py-16 px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="md:w-1/2 space-y-6">
          <h2 className="font-serif text-2xl md:text-3xl text-stone-800 leading-tight">
            Un patrimoine naturel <br />
            <span className="text-[#968370] italic">riche et varié</span>
          </h2>
          <p className="text-stone-600 text-base md:text-lg leading-relaxed">
            Le territoire se déploie à travers des paysages contrastés : des
            garrigues typiquement méditerranéennes, en passant par les
            châtaignieraies, jusqu&apos;aux forêts des monts du Pardailhan
            culminant à 822 m.
          </p>
        </div>
        <div className="md:w-1/2 relative h-[260px] md:h-[340px] lg:h-[400px] w-full shadow-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1505245208761-ba872912fac0?auto=format&fit=crop&q=80&w=800"
            alt="Paysage de garrigue et monts"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-stone-50 py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl text-stone-800">
              La structure{" "}
              <span className="italic text-[#968370]">karstique</span>
            </h2>
            <p className="text-stone-600 text-base md:text-lg leading-relaxed">
              La géologie du territoire est marquée par un sous-sol calcaire.
              Cette configuration crée un réseau complexe de cavités et de
              failles souterraines qui définit toute l&apos;écologie locale.
            </p>
          </div>
          <div className="md:w-1/2 relative h-[260px] md:h-[340px] lg:h-[400px] w-full shadow-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=800"
              alt="Détail roche calcaire"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-12 md:py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <div className="bg-[#968370] text-white p-8 md:p-12 shadow-2xl transition-transform hover:-translate-y-2 duration-300">
            <h3 className="font-serif text-xl md:text-2xl mb-4 md:mb-6 italic">
              Une ressource rare
            </h3>
            <p className="font-light leading-relaxed text-white/90">
              Le relief karstique de Pardailhan entraîne une contrainte majeure
              :{" "}
              <strong className="text-white">
                la ressource en eau y est très limitée
              </strong>
              . L&apos;eau s&apos;infiltre immédiatement dans les profondeurs du
              calcaire, façonnant un paysage sec en surface mais riche de
              réseaux souterrains.
            </p>
          </div>

          <div className="border-2 border-[#968370] p-8 md:p-12 bg-white shadow-xl transition-transform hover:-translate-y-2 duration-300">
            <h3 className="font-serif text-xl md:text-2xl text-[#968370] mb-4 md:mb-6 italic">
              Préserver l&apos;Avenir
            </h3>
            <p className="text-stone-700 leading-relaxed font-light">
              Le risque de pollution de l&apos;aquifère qui alimente le
              Saint-Chinianais impose des{" "}
              <strong className="text-stone-900">
                règles rigoureuses en matière d&apos;aménagement
              </strong>
              . Notre patrimoine géologique est le garant de la qualité de
              l&apos;eau pour tout le territoire.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 text-center border-t border-stone-100">
        <p className="text-[#968370] uppercase tracking-widest text-xs font-bold mb-4">
          Aller plus loin
        </p>
        <h2 className="font-serif text-2xl md:text-3xl text-stone-900 mb-8">
          Tous nos articles sur{" "}
          <span className="italic">l&pos;environnement</span>
        </h2>
        <Link
          href="/articles/environnement"
          className="inline-block bg-stone-900 text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-[#968370] transition-colors duration-300"
        >
          Consulter les articles
        </Link>
      </section>
    </main>
  );
}
