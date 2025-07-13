"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AnimeOngoing() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [ongoingAnime, setOngoingAnime] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/otakudesu/ongoing`)
      .then((res) => res.json())
      .then((json) => {
        const list = json?.data?.animeList;
        if (Array.isArray(list)) {
          setOngoingAnime(list);
        } else {
          console.warn("No animeList found in response.");
        }
      })
      .catch((err) => console.error("Failed to fetch anime:", err));
  }, []);

  if (!ongoingAnime.length) {
    return (
      <p className="text-center text-sm text-muted-foreground">Loading anime…</p>
    );
  }

  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 md:px-6 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
        {ongoingAnime.map((anime) => (
          <Card
            key={anime.animeId}
            className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-0"
          >
            <Link href={anime.href} className="block h-full group">
              {/* Gambar memenuhi bagian atas tanpa jarak */}
              <div className="relative aspect-[2/3] w-full">
                <Image
                  src={anime.poster}
                  alt={anime.title}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>

              <CardContent className="p-4 space-y-1 flex flex-col justify-between">
                <CardTitle className="text-sm font-bold line-clamp-2 text-zinc-900 dark:text-white min-h-[3rem]">
                  {anime.title}
                </CardTitle>
                <CardDescription className="text-xs text-muted-foreground">
                  {anime.episodes} episode • {anime.releaseDay}
                </CardDescription>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Rilis: {anime.latestReleaseDate}
                </p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
