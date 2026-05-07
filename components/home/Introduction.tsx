import Image from "next/image";

export default function Introduction() {
  return (
    <>
      {/* Exemple de la Section 1 : Nature */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* Texte */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="font-serif text-4xl text-stone-900 leading-tight tracking-wide">
              Des Garrigues
              <span className="text-[#968370]"> aux Sommets</span>
            </h2>
            <p className="text-stone-600 leading-relaxed text-lg font-sans">
              Le patrimoine naturel est particulièrement riche et varié : des
              garrigues typiquement méditerranéennes, en passant par les
              chataigneraies, jusqu’aux forêts des monts du Pardailhan culminant
              à 822 m.
            </p>
          </div>
          {/* Image */}
          <div className="md:w-1/2 relative h-[450px] w-full shadow-2xl">
            <Image
              src="/pardailhan.jpeg"
              alt="Nature Pardailhan"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Exemple de la Section 2 : Géologie (Inversée et Colorée) */}
      <section className="bg-[#968370] py-24 px-6 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
          {/* Texte */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="font-serif text-4xl leading-tight italic">
              L&apos;empreinte du calcaire
            </h2>
            <p className="text-white/90 leading-relaxed text-lg font-light font-sans">
              La géologie du territoire est marquée par une structure karstique.
              Cette nature souterraine impose des règles rigoureuses : la
              ressource en eau y est limitée et précieuse.
            </p>
          </div>
          {/* Image */}
          <div className="md:w-1/2 relative h-[450px] w-full shadow-2xl">
            <Image
              src="https://pays-saint-ponais.fr/ruines-pardailho.JPG"
              alt="Géologie"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
