import Hero from "@/components/home/Hero";
import Highlights from "@/components/home/Highlights";
import Introduction from "@/components/home/Introduction";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-white">
      <main className="w-full flex-1 text-center">
        <Hero />
        <Introduction />
        <Highlights />
      </main>
    </div>
  );
}
