import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 mt-12">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Brand */}
          <div>
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Razenime</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Streaming anime terkini & lengkap.</p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/" className="text-zinc-700 dark:text-zinc-300 hover:underline">Home</Link>
            <Link href="/ongoing" className="text-zinc-700 dark:text-zinc-300 hover:underline">Ongoing</Link>
            <Link href="/completed" className="text-zinc-700 dark:text-zinc-300 hover:underline">Completed</Link>
            <Link href="/about" className="text-zinc-700 dark:text-zinc-300 hover:underline">About</Link>
          </div>
        </div>

        <div className="mt-6 border-t border-zinc-200 dark:border-zinc-800 pt-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} Razenime. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
