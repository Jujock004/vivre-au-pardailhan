import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Le village vu du ciel",
    category: "Environnement",
    slug: "vue-panoramique",
    img: "https://images.unsplash.com/photo-1505245208761-ba872912fac0?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Les ruelles historiques",
    category: "Histoire",
    slug: "ruelles-typiques",
    img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Détails d'architecture",
    category: "Actualités",
    slug: "details-architecture",
    img: "https://images.unsplash.com/photo-1505245208761-ba872912fac0?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Le village vu du ciel",
    category: "Environnement",
    slug: "vue-panoramique",
    img: "https://images.unsplash.com/photo-1505245208761-ba872912fac0?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Les ruelles historiques",
    category: "Histoire",
    slug: "ruelles-typiques",
    img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    title: "Détails d'architecture",
    category: "Actualités",
    slug: "details-architecture",
    img: "https://images.unsplash.com/photo-1505245208761-ba872912fac0?auto=format&fit=crop&q=80&w=800",
  },
];

export default function FeaturedArticles() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6 bg-white">
      <h2 className="text-3xl font-bold font-serif text-center mb-16 uppercase tracking-[0.2em] text-stone-900">
        Articles à la une
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            href={`/articles/${article.slug}`}
            key={article.id}
            className="group flex flex-col h-full"
          >
            {/* Partie Image (Moitié supérieure) */}
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={article.img}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Partie Texte (Moitié inférieure) */}
            <div className="bg-[#968370] p-8 flex flex-col flex-grow text-white">
              {" "}
              <span className="text-xs uppercase tracking-[0.2em] text-white/70 mb-3 font-sans">
                {article.category}
              </span>
              <h3 className="text-xl md:text-2xl font-serif leading-snug mb-6 flex-grow">
                {article.title}
              </h3>
              <div className="mt-auto">
                <span className="text-sm font-semibold uppercase tracking-widest border-b-2 border-white/50 pb-1 group-hover:border-white transition-colors">
                  Lire l&apos;article
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
