import SectionHeader from "@/components/articles/SectionHeader";
import ArticleGrid from "@/components/articles/ArticleGrid";
import { getPostsByCategory } from "@/sanity/lib/queries";

export default async function ActualitesSection() {
  const posts = await getPostsByCategory();
  return (
    <>
      <SectionHeader type="Articles" />
      <ArticleGrid posts={posts} />
    </>
  );
}
