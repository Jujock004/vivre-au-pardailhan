import { categoryColors, categorySlug } from "@/lib/categories";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

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
      <h1 className="text-2xl md:text-3xl font-serif font-bold mt-10 mb-4 text-stone-900">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl md:text-2xl font-serif font-bold mt-8 mb-3 text-stone-900">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg md:text-xl font-serif font-semibold mt-6 mb-2 text-stone-800">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-base md:text-lg font-semibold mt-4 mb-2 text-stone-800">
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

async function getArticle(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    mainImage { asset->, crop, hotspot },
    publishedAt,
    body,
    category,
    "author": author
  }`;
  return await client.fetch(query, { slug });
}

export default async function ArticleDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
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
    <main className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-24">
      <header className="mb-8 md:mb-12 text-center">
        <p className="text-[#968370] uppercase tracking-widest text-[10px] font-bold mb-4">
          {new Date(article.publishedAt).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif text-stone-900 leading-tight mb-4">
          {article.title}
        </h1>
        {article.category && (
          <Link
            href={`/articles/${categorySlug[article.category] ?? article.category.toLowerCase()}`}
            className={`inline-block ${categoryColors[article.category] ?? "bg-[#968370]"} text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 mb-6 md:mb-8 hover:opacity-80 transition-opacity`}
          >
            {article.category}
          </Link>
        )}
        {article.mainImage && (
          <div className="relative h-[220px] md:h-[340px] lg:h-[450px] w-full shadow-2xl overflow-hidden rounded-sm bg-stone-100">
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

      <div className="font-sans leading-relaxed text-stone-800">
        <PortableText
          value={article.body}
          components={portableTextComponents}
        />
      </div>

      <footer className="mt-10 md:mt-16 pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between">
        <p className="italic text-stone-500 text-sm">
          Rédigé par {article.author || "Association Vivre au Pardailhan"}
        </p>
        <Link
          href="/articles"
          className="text-[#968370] uppercase tracking-widest text-[10px] font-bold hover:text-stone-900 transition-colors"
        >
          ← Tous les articles
        </Link>
      </footer>
    </main>
  );
}
