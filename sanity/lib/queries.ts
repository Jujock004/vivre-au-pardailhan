import { client } from "@/sanity/lib/client";

export async function getPostsByCategory(category?: string) {
  const filter = category
    ? `_type == "post" && category == "${category}"`
    : `_type == "post"`;
  const query = `*[${filter}] | order(publishedAt desc) {
    title,
    slug,
    mainImage { asset->, crop, hotspot },
    publishedAt,
    category,
    excerpt
  }`;
  return client.fetch(query);
}
