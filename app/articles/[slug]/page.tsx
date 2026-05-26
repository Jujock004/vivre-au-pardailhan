import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

// 1. On s'assure que la fonction reçoit bien le slug
async function getArticle(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    mainImage,
    publishedAt,
    body,
    "author": author
  }`;

  // On passe explicitement l'objet de variables en deuxième argument
  return await client.fetch(query, { slug });
}

// 2. Dans Next.js 14/15, params est une Promise
export default async function ArticleDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // On attend la résolution des paramètres de l'URL
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return (
      <div className="py-24 text-center font-serif text-stone-500">
        Article introuvable.
      </div>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <header className="mb-12 text-center">
        <p className="text-[#968370] uppercase tracking-widest text-[10px] font-bold mb-4">
          {new Date(article.publishedAt).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <h1 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight mb-8">
          {article.title}
        </h1>
        {article.mainImage && (
          <div className="relative h-[450px] w-full shadow-2xl overflow-hidden rounded-sm bg-stone-100">
            <Image
              src={urlFor(article.mainImage).url()}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </header>

      {/* Rendu du texte riche avec style Typography */}
      <div className="prose prose-stone prose-lg max-w-none font-sans leading-relaxed text-stone-800">
        <PortableText value={article.body} />
      </div>

      <footer className="mt-16 pt-8 border-t border-stone-200">
        <p className="italic text-stone-500 text-sm">
          Rédigé par {article.author || "Association Vivre au Pardailhan"}
        </p>
      </footer>
    </main>
  );
}
