"use client";

export default function ArticlesError({ reset }: { reset: () => void }) {
  return (
    <div className="py-24 text-center text-stone-500">
      <p className="italic mb-4">Impossible de charger les articles.</p>
      <button onClick={reset} className="underline text-[#968370]">
        Réessayer
      </button>
    </div>
  );
}
