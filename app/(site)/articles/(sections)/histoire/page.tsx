import SectionHeader from "@/components/articles/SectionHeader";
import ArticleGrid from "@/components/articles/ArticleGrid";
import { getPostsByCategory } from "@/sanity/lib/queries";

export default async function HistoireSection() {
  const posts = await getPostsByCategory("Histoire");
  return (
    <>
      <SectionHeader type="Histoire" />
      <ArticleGrid posts={posts} />
    </>
  );
}
