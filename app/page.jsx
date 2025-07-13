import AnimeCompleted from "@/components/anime-completed";
import AnimeOngoing from "@/components/anime-ongoing";

export default function Home() {
  return (
    <>
      <main className="px-4 py-3">
        <h1 className="text-2xl font-bold mt-8">Ongoing anime</h1>
        <AnimeOngoing />

        <h1 className="text-2xl font-bold">Completed anime</h1>
        <AnimeCompleted />
      </main>
    </>
  );
}
