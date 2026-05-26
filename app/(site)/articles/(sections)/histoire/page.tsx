import SectionHeader from "@/components/articles/SectionHeader";

export default function HistoireSection() {
  return (
    <main className="max-w-7xl mx-auto px-6">
      {/* L'en-tête immersif prend toute la largeur */}
      <SectionHeader type="Histoire" />

      {/* Reste de ta grille d'articles filtrés */}
      <div className="py-12">{/* ... tes articles ... */}</div>
    </main>
  );
}
