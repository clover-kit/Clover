"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GithubStars } from "@/components/github-stars";
import { useTheme } from "next-themes";
import { Star, Moon, Sun, ChevronRight, Terminal, Copy, Check, Info, Github } from "lucide-react";
import { useState } from "react";

export default function DocsPage() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="min-h-screen bg-[#fbfbfb] dark:bg-zinc-950 font-sans selection:bg-zinc-900 selection:text-white dark:selection:bg-zinc-100 dark:selection:text-zinc-900 flex flex-col text-zinc-900 dark:text-zinc-50 transition-colors duration-300">

            {/* Navigation */}
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
                        <Link href="/presets" className="text-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Presets</Link>
                        <Link href="/docs" className="text-lg text-zinc-900 dark:text-zinc-100 font-medium">Docs</Link>
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
                <div className="max-w-4xl mx-auto">

                    {/* Header */}
                    <div className="mb-16 border-b border-zinc-200 dark:border-zinc-800 pb-10">
                        <h1 className="text-4xl md:text-5xl font-mono text-zinc-900 dark:text-zinc-50 mb-6 tracking-tight">
                            Documentation
                        </h1>
                        <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl font-light leading-relaxed">
                            Everything you need to know about using Clover animations in your Next.js projects.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="space-y-16">

                        {/* Section 1: Introduction */}
                        <section>
                            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                                <Info className="w-6 h-6 text-zinc-400" />
                                Introduction
                            </h2>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-7 mb-4">
                                Clover is a collection of copy-paste text animations built with <strong>Framer Motion</strong> and <strong>Tailwind CSS</strong>. They are designed to be lightweight, performant, and easily customizable directly from your codebase.
                            </p>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-7">
                                Unlike typical libraries, Clover doesn't require you to install a heavy npm package. You simply copy the component code you need and drop it into your project.
                            </p>
                        </section>

                        {/* Section 2: Getting Started */}
                        <section>
                            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">Getting Started</h2>

                            <div className="space-y-6">

                                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
                                    <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-3">1. Install Dependencies</h3>
                                    <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-sm">
                                        Clover relies on Framer Motion for animations. Make sure you have it installed.
                                    </p>
                                    <CodeBlock code="npm install framer-motion clsx tailwind-merge" />
                                </div>

                                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
                                    <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-3">2. Configure Tailwind</h3>
                                    <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-sm">
                                        Ensure your <code>tailwind.config.js</code> is set up correctly. Most Next.js projects are ready out of the box.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: How to Guide */}
                        <section>
                            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">How to Use</h2>

                            <div className="relative border-l-2 border-dashed border-zinc-200 dark:border-zinc-800 ml-4 space-y-12">

                                <Step
                                    number="01"
                                    title="Browse & Choose"
                                    description="Explore the Presets page to find an animation that fits your vibe. Use the new search feature to find specific styles like 'Glitch' or 'System'."
                                />

                                <Step
                                    number="02"
                                    title="Install via Terminal"
                                    description="The fastest way to get started. Copy the command from the 'Install' section of any preset (e.g. `npx shadcn@latest add ...`) and run it. This maps the component directly to your project using the shadcn CLI."
                                />

                                <Step
                                    number="03"
                                    title="Customize & Preview"
                                    description="Want to tweak it first? Click 'Try' on any preset to open the Playground. Adjust parameters like Duration, Stagger, and Blur in real-time."
                                />

                                <Step
                                    number="04"
                                    title="Manual Integration"
                                    description="For full control, head to the Playground's 'Code Preview'. Copy the raw React code and paste it into your codebase (e.g., `components/TextAnim.tsx`). Just ensure `framer-motion` is installed in your project."
                                />

                            </div>
                        </section>

                        {/* Section 4: FAQ (Optional but good) */}
                        <section>
                            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">Common Questions</h2>
                            <div className="grid gap-4">
                                <FAQ
                                    q="Can I use this with plain React?"
                                    a="Yes! While the examples use Next.js, the core components are standard React + Framer Motion. Just remove any Next.js specific imports like 'next/font'."
                                />
                                <FAQ
                                    q="Is it free?"
                                    a="100%. Clover is open source and free to use in personal and commercial projects."
                                />
                            </div>
                        </section>

                    </div>


                </div>
            </main>

            {/* Footer */}
            <footer className="bg-zinc-50 dark:bg-zinc-900 border-t border-dashed border-zinc-300 dark:border-zinc-800 pt-10 pb-8 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
                        <div className="flex gap-12">
                            <div>
                                <h4 className="font-mono text-xs font-semibold uppercase text-zinc-400 mb-4 tracking-widest">Platform</h4>
                                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    <li><Link href="/" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Home</Link></li>
                                    <li><Link href="/presets" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Presets</Link></li>
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

// Helper Components

function CodeBlock({ code }: { code: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group">
            <div className="bg-zinc-900 dark:bg-black rounded-lg p-4 font-mono text-sm text-zinc-100 overflow-x-auto flex items-center justify-between">
                <span>{code}</span>
            </div>
            <button
                onClick={handleCopy}
                className="absolute right-2 top-2 p-2 bg-zinc-800 text-zinc-400 hover:text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
            >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
        </div>
    );
}

function Step({ number, title, description }: { number: string, title: string, description: string }) {
    return (
        <div className="relative pl-10">
            <span className="absolute -left-4 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 font-mono text-xs font-bold text-zinc-500 dark:text-zinc-400 shadow-sm">
                {number}
            </span>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                {description}
            </p>
        </div>
    );
}

function FAQ({ q, a }: { q: string, a: string }) {
    return (
        <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-lg p-5 border border-zinc-100 dark:border-zinc-800/50">
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2 text-sm">{q}</h4>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{a}</p>
        </div>
    );
}
