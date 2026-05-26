import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

type Post = {
  slug: { current: string };
  mainImage: {
    asset: {
      _ref: string;
      _type: "reference";
      url?: string;
    };
    crop?: {
      _type: "sanity.imageCrop";
      top: number;
      right: number;
      bottom: number;
      left: number;
    };
    hotspot?: {
      _type: "sanity.imageHotspot";
      x: number;
      y: number;
      height: number;
      width: number;
    };
  };
  publishedAt: string;
  category: string;
  title: string;
  excerpt: string;
};

const categoryColors: Record<string, string> = {
  Actualités: "bg-sky-700",
  Histoire: "bg-amber-800",
  Environnement: "bg-emerald-700",
  Archives: "bg-stone-600",
};

export default function ArticleGrid({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        <p className="text-stone-500 italic">Aucun article pour le moment.</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
      {posts.map((post) => (
        <article key={post.slug.current} className="group cursor-pointer">
          <Link href={`/articles/${post.slug.current}`}>
            <div className="relative h-64 w-full mb-6 overflow-hidden shadow-xl">
              <Image
                src={urlFor(post.mainImage)
                  .width(768)
                  .height(450)
                  .fit("crop")
                  .url()}
                alt={post.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              {post.category && (
                <span
                  className={`absolute top-3 right-3 ${categoryColors[post.category] || "bg-stone-600"} text-white text-[10px] uppercase tracking-widest font-bold px-2 py-1`}
                >
                  {post.category}
                </span>
              )}
            </div>
            <p className="text-xs text-[#968370] font-bold uppercase tracking-tighter mb-2">
              {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
              })}
            </p>
            <h2 className="font-serif text-2xl text-stone-900 group-hover:text-[#968370] transition-colors mb-3">
              {post.title}
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          </Link>
        </article>
      ))}
    </div>
  );
}
