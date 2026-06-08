import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

async function getFeaturedPosts() {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc, featured desc) [0..5] {
      title,
      slug,
      category,
      mainImage { asset->, crop, hotspot }
    }`,
  );
}

export default async function FeaturedArticles() {
  const articles = await getFeaturedPosts();

  return (
    <section className="max-w-7xl mx-auto py-12 md:py-20 px-6 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold font-serif text-center mb-10 md:mb-16 uppercase tracking-[0.2em] text-stone-900">
        Articles à la une
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {articles.map((article: any) => (
          <Link
            href={`/articles/${article.slug.current}`}
            key={article.slug.current}
            className="group flex flex-col h-full"
          >
            <div className="relative h-48 md:h-64 w-full overflow-hidden">
              <Image
                src={urlFor(article.mainImage)
                  .width(600)
                  .height(400)
                  .fit("crop")
                  .url()}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div
              className={`bg-[#968370] p-8 flex flex-col flex-grow text-white`}
            >
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
