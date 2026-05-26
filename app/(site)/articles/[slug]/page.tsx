import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || ""}
            width={800}
            height={500}
            className="rounded-sm object-cover w-full"
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-serif font-bold mt-10 mb-4 text-stone-900">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-serif font-bold mt-8 mb-3 text-stone-900">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-serif font-semibold mt-6 mb-2 text-stone-800">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold mt-4 mb-2 text-stone-800">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="mb-4 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#968370] pl-5 my-6 italic text-stone-600">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-[#968370] hover:text-stone-900"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-4 space-y-1">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4 space-y-1">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
};

// 1. On s'assure que la fonction reçoit bien le slug
async function getArticle(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    mainImage { asset->, crop, hotspot },
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
              src={urlFor(article.mainImage)
                .width(768)
                .height(450)
                .fit("crop")
                .url()}
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
        <PortableText
          value={article.body}
          components={portableTextComponents}
        />
      </div>

      <footer className="mt-16 pt-8 border-t border-stone-200">
        <p className="italic text-stone-500 text-sm">
          Rédigé par {article.author || "Association Vivre au Pardailhan"}
        </p>
      </footer>
    </main>
  );
}
