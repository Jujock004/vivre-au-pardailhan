import { Historique } from "@/components/about/Historique";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="w-full pb-24">
      {/* 1. HERO À PROPOS */}
      <header className="max-w-5xl mx-auto px-6 pt-16 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-stone-900 uppercase tracking-widest">
          L&apos;Association
        </h1>
        <p className="mt-6 text-[#968370] italic text-xl font-light max-w-2xl mx-auto">
          &quot;Histoire et Patrimoine du Pardailhan : œuvrer pour que la pierre
          garde sa mémoire et que l&apos;eau garde sa pureté.&quot;
        </p>
        <div className="h-1 w-20 bg-[#968370] mx-auto mt-8"></div>
      </header>

      {/* 2. SECTION NOTRE HISTOIRE */}
      <section className="max-w-7xl mx-auto py-16 px-6 flex flex-col md:flex-row gap-16 items-center">
        <div className="md:w-1/2 relative h-[500px] w-full shadow-2xl">
          <Image
            src="https://images.midilibre.fr/api/v1/images/view/68d0bfe49215bfa80e0b8e83/large/image.jpg?v=1"
            alt="Réunion de l'association"
            fill
            className="object-cover"
          />
        </div>
        <div className="md:w-1/2 space-y-6">
          <h2 className="font-serif text-3xl text-stone-800">
            Une Genèse <span className="text-[#968370] italic">Citoyenne</span>
          </h2>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>
              Fondée sous l&apos;impulsion de passionnés du territoire,
              l&apos;association
              <strong> Histoire et Patrimoine du Pardailhan</strong> est née
              d&apos;un constat simple : la richesse de nos dix hameaux est
              aussi précieuse qu&apos;elle est fragile.
            </p>
            <p>
              Depuis sa création, l&apos;association s&apos;est donné pour
              mission de documenter l&apos;histoire locale — de
              l&apos;engagement révolutionnaire du Baron de Pardailhan
              jusqu&apos;à la vie quotidienne &quot;fort dure&quot; des
              habitants du 18ème siècle.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SECTION NOS MISSIONS (Bloc Marron Beige) */}
      <section className="bg-[#968370] py-20 text-white mt-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl mb-12 italic">Nos engagements</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="text-3xl">🏛️</div>
              <h3 className="font-bold uppercase tracking-wider text-sm">
                Préservation
              </h3>
              <p className="text-sm font-light text-stone-100">
                Veiller à ce que les extensions pavillonnaires ne dénaturent pas
                l&apos;habitat austère d&apos;origine.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-3xl">📜</div>
              <h3 className="font-bold uppercase tracking-wider text-sm">
                Recherche
              </h3>
              <p className="text-sm font-light text-stone-100">
                Explorer les archives du château et les traces du passage du
                Baron dans l&apos;histoire de France.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-3xl">💧</div>
              <h3 className="font-bold uppercase tracking-wider text-sm">
                Éducation
              </h3>
              <p className="text-sm font-light text-stone-100">
                Sensibiliser à la protection de l&apos;aquifère et aux
                contraintes du sol karstique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LE MOT DU PRÉSIDENT */}
      <section className="max-w-4xl mx-auto py-24 px-6 text-center">
        <div className="relative">
          <span className="text-9xl font-serif text-stone-100 absolute -top-16 -left-8 -z-10 tracking-tighter">
            &quot;
          </span>
          <p className="text-2xl font-serif italic text-stone-700 leading-relaxed">
            Rejoindre notre association, c&apos;est devenir le gardien d&apos;un
            paysage qui nous dépasse et d&apos;une histoire qui nous lie.
          </p>
          <p className="mt-8 font-sans uppercase tracking-[0.2em] text-sm font-bold text-[#968370]">
            Vincent Joecker — Président
          </p>
        </div>
      </section>
      <Historique />
    </main>
  );
}
