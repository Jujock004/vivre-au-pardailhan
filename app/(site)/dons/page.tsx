import HelloAssoWidget from "@/components/dons/HelloAssoWidget";
import Link from "next/link";

export default function DonsPage() {
  return (
    <main className="w-full pb-16 md:pb-24">
      <header className="max-w-5xl mx-auto px-6 pt-12 md:pt-16 pb-10 text-center">
        <p className="text-[#968370] uppercase tracking-widest text-xs font-bold mb-4">
          Nous soutenir
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-900 uppercase tracking-widest">
          Faire un don
        </h1>
        <div className="h-1 w-20 bg-[#968370] mx-auto mt-6"></div>
      </header>

      <section className="max-w-3xl mx-auto px-4 md:px-6">
        <HelloAssoWidget />
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-16 md:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-stone-100 pt-12">
          <div className="text-center space-y-3">
            <div className="text-3xl">🏛️</div>
            <h3 className="font-bold uppercase tracking-wider text-sm text-stone-800">
              Préserver
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              Financer la restauration et la documentation du patrimoine.
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="text-3xl">📜</div>
            <h3 className="font-bold uppercase tracking-wider text-sm text-stone-800">
              Transmettre
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              Soutenir la publication de recherches et l&apos;organisation
              d&apos;événements culturels.
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="text-3xl">💧</div>
            <h3 className="font-bold uppercase tracking-wider text-sm text-stone-800">
              Protéger
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              Agir pour la préservation de l&apos;environnement local.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center mt-16 px-6">
        <p className="text-stone-400 text-xs uppercase tracking-widest">
          Vous pouvez aussi nous contacter directement
        </p>
        <Link
          href="/contacts"
          className="inline-block mt-3 text-[#968370] uppercase tracking-widest text-xs font-bold hover:text-stone-900 transition-colors"
        >
          Nous écrire →
        </Link>
      </section>
    </main>
  );
}
