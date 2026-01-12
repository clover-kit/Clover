"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GithubStars } from "@/components/github-stars";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Star, Moon, Sun, ArrowRight, Zap, Terminal, AlignLeft, Sparkles, Copy, Monitor, Smartphone, RotateCcw, MoveVertical, Video, Search, Github } from "lucide-react";
import { PRESETS } from "@/lib/presets";

export default function PresetsPage() {
    const { theme, setTheme } = useTheme();
    const [searchQuery, setSearchQuery] = useState("");

    // Effect to handle Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setSearchQuery("");
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const PRESET_ITEMS = [
        {
            title: "Modern Fade",
            fontClass: "font-sans",
            description: "Clean, blurred entry. Perfect for minimalist headlines.",
            icon: <Sparkles className="w-5 h-5" />,
            preview: <PreviewFade />
        },
        {
            title: "Terminal",
            fontClass: "font-jetbrains-mono",
            description: "Classic typewriter effect with cursor. Great for code blogs.",
            icon: <Terminal className="w-5 h-5" />,
            preview: <PreviewTypewriter />
        },
        {
            title: "Editorial",
            fontClass: "font-serif italic",
            description: "Elegant, staggered rise. Ideal for storytelling and hero sections.",
            icon: <AlignLeft className="w-5 h-5" />,
            preview: <PreviewStagger />
        },
        {
            title: "System Glitch",
            fontClass: "font-mono",
            description: "Digital artifacting and displacement. For high-tech vibes.",
            icon: <Zap className="w-5 h-5" />,
            preview: <PreviewGlitch />
        },
        {
            title: "Pop In",
            fontClass: "font-sans font-bold",
            description: "Spring-loaded scale animation. High energy and attention grabbing.",
            icon: <MoveVertical className="w-5 h-5" />,
            preview: <PreviewPop />
        },
        {
            title: "Cinematic",
            fontClass: "font-serif tracking-widest uppercase",
            description: "Slow, misty reveal. Best used for dramatic titles.",
            icon: <Video className="w-5 h-5" />,
            preview: <PreviewCinematic />
        },
        {
            title: "Elastic",
            fontClass: "font-sans font-black uppercase",
            description: "Big movement with a bouncy finish. Fun and playful.",
            icon: <RotateCcw className="w-5 h-5" />,
            preview: <PreviewElastic />
        }
    ];

    const filteredPresets = PRESET_ITEMS.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[#fbfbfb] dark:bg-zinc-950 font-sans selection:bg-zinc-900 selection:text-white dark:selection:bg-zinc-100 dark:selection:text-zinc-900 flex flex-col text-zinc-900 dark:text-zinc-50 transition-colors duration-300">

            {/* Navigation (Reused from Home) */}
            <nav className="border-b border-dashed border-zinc-300 dark:border-zinc-800 bg-[#fbfbfb]/80 dark:bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group cursor-pointer">
                        <Image
                            src="/logo-text.png"
                            alt="Clover"
                            width={160}
                            height={66}
                            className="object-contain h-28 w-auto group-hover:opacity-70 transition-opacity dark:invert"
                        />
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/presets" className="text-lg text-zinc-900 dark:text-zinc-100 font-medium">Presets</Link>
                        <Link href="/docs" className="text-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Docs</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <GithubStars />
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="relative p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                        >
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-zinc-600" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 top-2 left-2 text-zinc-400" />
                            <span className="sr-only">Toggle theme</span>
                        </button>
                    </div>
                </div>
            </nav>

            <main className="flex-grow pt-20 pb-24 px-6 relative">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="mb-10 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-mono text-zinc-900 dark:text-zinc-50 mb-6 tracking-tight">
                            Animation <span className="text-zinc-400 dark:text-zinc-600">Presets</span>
                        </h1>
                        <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl font-light">
                            A collection of handcrafted text animations. Copy the code or open in playground to customize.
                        </p>
                    </div>

                    {/* Search Bar - Command Palette Style */}
                    <div className="relative max-w-2xl w-full mb-16 group mx-auto md:mx-0">
                        <div className="absolute inset-y-0 left-0 pl-1.5 flex items-center pointer-events-none">
                            <div className="h-9 w-9 flex items-center justify-center rounded-lg text-zinc-400 dark:text-zinc-500">
                                <Search className="w-5 h-5" />
                            </div>
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="block w-full pl-12 pr-12 py-3.5 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl text-base text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 dark:focus:ring-zinc-100/10 focus:border-zinc-900 dark:focus:border-zinc-700 transition-all shadow-sm font-sans"
                            placeholder="Search for presets..."
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <kbd className="hidden sm:inline-flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded px-2 py-0.5 text-[10px] font-mono font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                                ESC
                            </kbd>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
                        {filteredPresets.length > 0 ? (
                            filteredPresets.map((preset, index) => (
                                <PresetCard
                                    key={index}
                                    title={preset.title}
                                    fontClass={preset.fontClass}
                                    description={preset.description}
                                    icon={preset.icon}
                                    preview={preset.preview}
                                />
                            ))
                        ) : (
                            <div className="col-span-full flex flex-col items-center justify-center py-20 text-center opacity-0 animate-in fade-in duration-500 fill-mode-forwards" style={{ opacity: 1 }}>
                                <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-full mb-4">
                                    <Search className="w-8 h-8 text-zinc-400 dark:text-zinc-600" />
                                </div>
                                <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-2">No presets found</h3>
                                <p className="text-zinc-500 dark:text-zinc-500">
                                    We couldn't find anything matching "{searchQuery}".
                                </p>
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="mt-6 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 underline decoration-dashed underline-offset-4"
                                >
                                    Clear search
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </main>


            {/* Footer */}
            <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-dashed border-zinc-300 dark:border-zinc-800 pt-10 pb-8 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
                        <div className="flex gap-12">
                            <div>
                                <h4 className="font-mono text-xs font-semibold uppercase text-zinc-400 mb-4 tracking-widest">Platform</h4>
                                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    <li><Link href="/" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Home</Link></li>
                                    <li><Link href="/presets" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Presets</Link></li>
                                    <li><Link href="/playground" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Playground</Link></li>
                                    <li><Link href="/docs" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Documentation</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-mono text-xs font-semibold uppercase text-zinc-400 mb-4 tracking-widest">Resources</h4>
                                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    <li><a href="https://github.com/clover-kit/Clover" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">GitHub</a></li>
                                    <li><a href="https://github.com/clover-kit/Clover/releases" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Changelog</a></li>
                                    <li><a href="https://github.com/clover-kit/Clover/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">License</a></li>
                                    <li><a href="https://github.com/clover-kit/Clover/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Contributing</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center w-full pt-8 border-t border-dashed border-zinc-300 dark:border-zinc-800 text-xs text-zinc-500 font-mono">
                        <div className="flex items-center gap-1">
                            <span>Developed by</span>
                            <a href="https://github.com/AVBharath10" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Bharath</a>
                            <span className="mx-1">.</span>
                            <span>The source code is available on</span>
                            <a href="https://github.com/clover-kit/Clover" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">GitHub</a>
                        </div>

                        <div className="flex items-center gap-4 mt-4 md:mt-0">
                            <a href="https://github.com/clover-kit/Clover" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                                <Github className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}



function PresetCard({ title, description, fontClass, icon, preview }: any) {
    const [copied, setCopied] = useState(false);

    const installCommand = `npx shadcn@latest add https://clover-kit.vercel.app/registry/${title.toLowerCase().replace(/\s+/g, "-")}.json`;

    const handleCopy = () => {
        navigator.clipboard.writeText(installCommand);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-black/50 transition-all duration-300 hover:-translate-y-1">
            <div className="h-48 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50 flex items-center justify-center p-8 relative overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 opacity-20 dark:opacity-10" style={{ backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)", backgroundSize: "12px 12px" }}></div>
                <div className={`relative z-10 text-3xl md:text-4xl text-zinc-900 dark:text-zinc-50 ${fontClass}`}>
                    {preview}
                </div>
            </div>
            <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-900 dark:text-zinc-100">
                        {icon}
                    </div>
                    <h3 className="text-lg font-semibold font-mono text-zinc-900 dark:text-zinc-100">{title}</h3>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6 h-10 line-clamp-2">
                    {description}
                </p>
                <div className="flex gap-2">
                    <Link href={`/playground?preset=${encodeURIComponent(title)}`} className="flex-1 flex items-center justify-center gap-2 bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 py-2 rounded text-sm font-medium transition-colors">
                        <Monitor className="w-3.5 h-3.5" />
                        Try
                    </Link>
                </div>
                <div className="mt-4 pt-4 border-t border-dashed border-zinc-200 dark:border-zinc-800">
                    <p className="text-[10px] text-zinc-400 mb-1.5 font-mono uppercase tracking-wider">Install</p>
                    <div className="group/code relative">
                        <div
                            className="absolute inset-y-0 right-0 flex items-center pr-1 opacity-0 group-hover/code:opacity-100 transition-opacity"
                            onClick={handleCopy}
                        >
                            <div className="bg-zinc-200 dark:bg-zinc-700 p-1 rounded cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-600" title="Copy command">
                                {copied ? <span className="text-[10px] font-bold text-green-500 px-1">Copied!</span> : <Copy className="w-3 h-3 text-zinc-600 dark:text-zinc-300" />}
                            </div>
                        </div>
                        <code className="text-[10px] text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/50 px-2 py-2 rounded block truncate font-mono select-all hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors cursor-text">
                            {installCommand}
                        </code>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Mini Animation Components
function PreviewFade() {
    return (
        <motion.span
            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.6 }}
        >
            Hello World
        </motion.span>
    )
}

function PreviewTypewriter() {
    return (
        <span className="flex">
            {"Code".split("").map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.1, duration: 0 }}
                >{char}</motion.span>
            ))}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="ml-1 w-2 h-8 bg-current block"
            />
        </span>
    )
}

function PreviewStagger() {
    return (
        <span className="flex gap-[1px]">
            {"Elegant".split("").map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
                >{char}</motion.span>
            ))}
        </span>
    )
}

function PreviewGlitch() {
    return (
        <motion.span
            initial={{ opacity: 0, x: -5 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ x: [0, -2, 2, -1, 0] }}
            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
        >
            Glitch
        </motion.span>
    )
}

function PreviewPop() {
    return (
        <span className="flex gap-0.5">
            {"Boing!".split("").map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: i * 0.05, type: "spring", stiffness: 300, damping: 15 }}
                >{char}</motion.span>
            ))}
        </span>
    )
}

function PreviewCinematic() {
    return (
        <motion.span
            initial={{ opacity: 0, filter: "blur(20px)", scale: 1.1 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
        >
            CINEMA
        </motion.span>
    )
}

function PreviewElastic() {
    return (
        <span className="flex gap-0.5">
            {"Jump".split("").map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, type: "spring", stiffness: 400, damping: 10 }}
                >{char}</motion.span>
            ))}
        </span>
    )
}
