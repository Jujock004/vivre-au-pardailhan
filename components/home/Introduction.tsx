import Image from "next/image";

export default function Introduction() {
  return (
    <>
      <section className="py-12 md:py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 leading-tight tracking-wide">
              Des Garrigues
              <span className="text-[#968370]"> aux Sommets</span>
            </h2>
            <p className="text-stone-600 leading-relaxed text-base md:text-lg font-sans">
              Le patrimoine naturel est particulièrement riche et varié : des
              garrigues typiquement méditerranéennes, en passant par les
              chataigneraies, jusqu&apos;aux forêts des monts du Pardailhan
              culminant à 822 m.
            </p>
          </div>
          <div className="md:w-1/2 relative h-[260px] md:h-[380px] lg:h-[450px] w-full shadow-2xl">
            <Image
              src="/pardailhan.jpeg"
              alt="Nature Pardailhan"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#968370] py-12 md:py-24 px-6 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
          <div className="md:w-1/2 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl leading-tight italic">
              L&apos;empreinte du calcaire
            </h2>
            <p className="text-white/90 leading-relaxed text-base md:text-lg font-light font-sans">
              La géologie du territoire est marquée par une structure karstique.
              Cette nature souterraine impose des règles rigoureuses : la
              ressource en eau y est limitée et précieuse.
            </p>
          </div>
          <div className="md:w-1/2 relative h-[260px] md:h-[380px] lg:h-[450px] w-full shadow-2xl">
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
