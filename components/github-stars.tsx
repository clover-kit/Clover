"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

export function GithubStars() {
    const [stars, setStars] = useState<number | null>(null);

    useEffect(() => {
        fetch("https://api.github.com/repos/clover-kit/Clover")
            .then((res) => res.json())
            .then((data) => {
                if (data.stargazers_count) {
                    setStars(data.stargazers_count);
                }
            })
            .catch((err) => console.error("Failed to fetch stars", err));
    }, []);

    return (
        <div className="hidden sm:flex items-center gap-1.5 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-2 py-1 rounded shadow-sm">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-sm font-medium font-mono text-zinc-900 dark:text-zinc-100">
                {stars !== null ? stars : "..."}
            </span>
        </div>
    );
}
