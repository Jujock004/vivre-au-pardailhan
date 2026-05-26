import SectionHeader from "@/components/articles/SectionHeader";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

async function getPosts() {
  const query = `*[_type == "post" && category == "Histoire"] | order(publishedAt desc) {
    title,
    slug,
    mainImage { asset->, crop, hotspot },
    publishedAt,
    excerpt
  }`;
  const posts = await client.fetch(query);
  return posts;
}

const type = "Histoire";

export default async function HistoireSection() {
  const posts = await getPosts();

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      {/* L'en-tête immersif prend toute la largeur */}
      <SectionHeader type={type} />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts.map(
          (post: {
            slug: { current: string };
            mainImage: { asset: { url: string } };
            publishedAt: string;
            title: string;
            excerpt: string;
          }) => (
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
          ),
        )}
      </div>
    </main>
  );
}
