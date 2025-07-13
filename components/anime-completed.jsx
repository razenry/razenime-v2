"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AnimeCompleted() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [ongoingAnime, setOngoingAnime] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/otakudesu/completed`)
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
    return <p className="text-center text-sm text-muted-foreground">Loading carousel…</p>;
  }

  return (
    <section className="w-full max-w-screen-xl px-4 md:px-6 mx-auto py-6">
      <Carousel className="relative">
        <CarouselContent className="gap-4">
          {ongoingAnime.map((anime) => (
            <CarouselItem
              key={anime.animeId}
              className="basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <Link
                href={anime.href}
                className="group flex flex-col h-full rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-shadow hover:shadow-md hover:-translate-y-1 duration-300 ease-in-out"
              >
                <div className="relative w-full h-48 sm:h-56 md:h-60 overflow-hidden rounded-t-lg">
                  <Image
                    src={anime.poster}
                    alt={anime.title}
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-between flex-grow p-3 space-y-1">
                  <h3 className="text-sm font-semibold line-clamp-2 min-h-[3.5rem] text-zinc-900 dark:text-white">
                    {anime.title}
                  </h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    {anime.episodes} episode • <Star size={12} className="text-yellow-600"/> {anime.score} 
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Rilis: {anime.lastReleaseDate}
                  </p>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 -translate-x-1/2" />
        <CarouselNext className="right-0 translate-x-1/2" />
      </Carousel>
    </section>
  );
}
