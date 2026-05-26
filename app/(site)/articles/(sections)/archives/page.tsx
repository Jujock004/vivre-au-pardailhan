import SectionHeader from "@/components/articles/SectionHeader";
import ArticleGrid from "@/components/articles/ArticleGrid";
import { getPostsByCategory } from "@/sanity/lib/queries";

export default async function ArchivesSection() {
  const posts = await getPostsByCategory("Archives");
  return (
    <>
      <SectionHeader type="Archives" />
      <ArticleGrid posts={posts} />
    </>
  );
}
