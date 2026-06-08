import Image from "next/image";
import WeatherWidget from "./WeatherWidget";

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* 1. L'image de fond (Le Village) */}
      <div className="relative h-[35vh] md:h-[55vh] w-full">
        <Image
          src="/pardailhan.jpeg" // photo du village
          alt="Village de Pardailhan"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay léger pour lier l'image au reste du design */}
        <div className="absolute inset-0 bg-black/10"></div>
        <WeatherWidget />
      </div>

      {/* 2. Le Bloc de texte (Le "Overlap") */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="bg-white -mt-24 sm:-mt-32 md:-mt-40 p-6 sm:p-8 md:p-16 shadow-xl text-center border-t-4 border-[#968370]">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-900 uppercase tracking-widest mb-6 md:mb-8">
            Vivre au Pardailhan
          </h1>

          <div className="max-w-2xl mx-auto">
            <p className="text-stone-600 text-base md:text-lg lg:text-xl leading-relaxed italic">
              &quot;Le Pardailhan, entre le Minervois et le Saint-Chinianais est
              situé
              <span className="text-stone-900 font-medium">
                {" "}
                dans les montagnes du bas-languedoc, son étendue est
                considérable, le terroir en est peu fertile. Les habitants y
                vivent d&apos;une manière fort dure.
              </span>
              &quot;
            </p>
            <p className="mt-4 text-[#968370] font-semibold uppercase tracking-widest text-sm">
              Description au 18e siècle
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
