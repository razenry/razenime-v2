"use client";

import { useEffect, useState } from "react";

export default function GenreDropdown() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [genres, setGenres] = useState([]);
    
  useEffect(() => {
    fetch(`${apiUrl}/otakudesu/genres`)
      .then((res) => res.json())
      .then((json) => setGenres(json.data.genreList))
      .catch((err) => console.error("Failed to fetch genres:", err));
  }, []);

  return (
    <div className="w-full md:w-[700px] px-2 py-3">
      <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {genres.map((genre) => (
          <li key={genre.genreId}>
            <a
              href={genre.href}
              className="block text-sm px-3 py-2 rounded-md text-center transition-colors whitespace-nowrap hover:bg-gray-200 hover:text-black dark:hover:bg-zinc-700 dark:hover:text-white"
            >
              {genre.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
