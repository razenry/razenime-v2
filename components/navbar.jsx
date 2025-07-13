"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import GenreDropdown from "@/components/genre-dropdown";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-300 dark:border-gray-800 px-4 py-3 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex flex-wrap gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="font-bold hover:underline"
              >
                RazenimeV2
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="hover:underline">
                Anime
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Genre Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:underline">
                Genre
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white text-black dark:bg-zinc-900 dark:text-white p-4 rounded-md shadow-md">
                <GenreDropdown />
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="hover:underline">
                Jadwal
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search Box */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Input
            type="text"
            placeholder="Search"
            className="h-8 w-full sm:w-[160px] bg-white text-black placeholder-gray-600 dark:bg-zinc-800 dark:text-white dark:placeholder-gray-400"
          />
          <Button className="h-8 px-3 bg-white text-black hover:bg-gray-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700">
            Search
          </Button>
        </div>
      </div>
    </nav>
  );
}
