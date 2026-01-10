"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, Variants } from "framer-motion";

import { useTheme } from "next-themes";
import {
    Star,
    Moon,
    Sun,
    Copy,
    Zap,
    Sliders,
    Keyboard,
    Share2,
    Github,
    Download,
    RotateCcw,
    Monitor,
    Smartphone,
    Code2,
    ChevronUp,
    ArrowLeft
} from "lucide-react";
import { PRESETS, PresetConfig } from "@/lib/presets";

function PlaygroundContent() {
    const [text, setText] = useState("Ship faster.\nDesign better.");
    const { theme, setTheme } = useTheme();
    const searchParams = useSearchParams();

    // Animation Parameters
    const [duration, setDuration] = useState(0.5);
    const [stagger, setStagger] = useState(0.02);
    const [yOffset, setYOffset] = useState(20);
    const [xOffset, setXOffset] = useState(0);
    const [scale, setScale] = useState(1); // New Scale support
    const [blur, setBlur] = useState(false);
    const [presetName, setPresetName] = useState("Custom");

    useEffect(() => {
        const presetParam = searchParams.get("preset");
        if (presetParam) {
            // Case-insensitive lookup
            const pKey = Object.keys(PRESETS).find(k => k.toLowerCase() === presetParam.toLowerCase());
            const p = pKey ? PRESETS[pKey] : undefined;

            if (p) {
                setPresetName(presetParam);
                setDuration(p.duration);
                setStagger(p.stagger);
                setYOffset(p.yOffset);
                setXOffset(p.xOffset || 0);
                setScale(p.scale ?? 1);
                setBlur(p.blur);
            }
        }
    }, [searchParams]);

    // Generate Code Snippet (Dynamic)
    const isGlitch = presetName.toLowerCase().includes("glitch");
    const codeSnippet = `import { motion, Variants } from "framer-motion";


export const AnimatedText = ({ text }) => {
  return (
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: ${stagger} } },
        hidden: {},
      }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={{
             hidden: { opacity: 0, y: ${yOffset}, x: ${isGlitch ? -10 : xOffset}, scale: ${scale}${blur ? ", filter: 'blur(10px)'" : ""} },
             visible: { 
               opacity: 1, 
               y: 0, 
               ${isGlitch
            ? `x: [0, -2, 2, -1, 0],\n               transition: { duration: ${duration}, times: [0, 0.2, 0.5, 0.8, 1] }`
            : `x: 0, scale: 1${blur ? ", filter: 'blur(0px)'" : ""},\n               transition: { duration: ${duration} }`
        }
             },
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h2>
  );
};`;

    return (
        <div className="flex-grow flex flex-col items-center justify-start pt-20 pb-20 px-6 relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-60 dark:opacity-30" style={{ backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)", backgroundSize: "24px 24px", color: "var(--foreground)" }}></div>

            {/* Hero Text */}
            <div className="relative z-10 max-w-4xl w-full text-center mb-10">
                <Link href="/presets" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 mb-6 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Presets
                </Link>
                <h1 className="text-4xl md:text-5xl font-mono text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight">
                    Editing: <span className="text-zinc-400 dark:text-zinc-500">{presetName}</span>
                </h1>
            </div>

            {/* Playground Interface */}
            <div className="relative z-10 w-full max-w-6xl bg-white dark:bg-zinc-900 rounded-xl shadow-2xl shadow-zinc-200 dark:shadow-black/50 border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col md:flex-row min-h-[500px]">

                {/* Left: Controls */}
                <div className="w-full md:w-80 border-b md:border-b-0 md:border-r border-dashed border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 p-6 flex flex-col gap-8 overflow-y-auto">

                    <div className="space-y-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="font-mono text-sm font-semibold uppercase text-zinc-500 dark:text-zinc-400 tracking-wider">Parameters</h3>
                            <button
                                onClick={() => {
                                    setDuration(0.5); setStagger(0.02); setYOffset(20); setXOffset(0); setScale(1); setBlur(false); setPresetName("Custom");
                                }}
                                className="text-xs text-zinc-400 dark:text-zinc-500 underline hover:text-zinc-900 dark:hover:text-zinc-100"
                            >
                                Reset
                            </button>
                        </div>

                        {/* Speed Slider */}
                        <div className="group">
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Duration</label>
                                <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">{duration}s</span>
                            </div>
                            <input
                                type="range"
                                min="0.1"
                                max="3"
                                step="0.1"
                                value={duration}
                                onChange={(e) => setDuration(parseFloat(e.target.value))}
                                className="w-full h-1 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>

                        {/* Stagger Slider */}
                        <div className="group">
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Stagger</label>
                                <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">{stagger}s</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={stagger}
                                onChange={(e) => setStagger(parseFloat(e.target.value))}
                                className="w-full h-1 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>

                        {/* Y Offset Slider */}
                        <div className="group">
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Y Offset</label>
                                <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">{yOffset}px</span>
                            </div>
                            <input
                                type="range"
                                min="-100"
                                max="100"
                                step="5"
                                value={yOffset}
                                onChange={(e) => setYOffset(parseInt(e.target.value))}
                                className="w-full h-1 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>

                        {/* X Offset Slider */}
                        <div className="group">
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">X Offset</label>
                                <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">{xOffset}px</span>
                            </div>
                            <input
                                type="range"
                                min="-50"
                                max="50"
                                step="1"
                                value={xOffset}
                                onChange={(e) => setXOffset(parseInt(e.target.value))}
                                className="w-full h-1 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>

                        {/* Scale Slider */}
                        <div className="group">
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Initial Scale</label>
                                <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">{scale}</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="2"
                                step="0.1"
                                value={scale}
                                onChange={(e) => setScale(parseFloat(e.target.value))}
                                className="w-full h-1 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>

                        {/* Toggles */}
                        <div className="flex items-center justify-between py-2 border-t border-dashed border-zinc-200 dark:border-zinc-800 mt-4">
                            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Blur Effect</span>
                            <div className="relative inline-block w-10 h-6 align-middle select-none">
                                <input
                                    type="checkbox"
                                    name="toggle"
                                    id="blur-toggle"
                                    checked={blur}
                                    onChange={(e) => setBlur(e.target.checked)}
                                    className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white dark:bg-zinc-200 border-2 border-zinc-300 dark:border-zinc-600 appearance-none cursor-pointer transition-all duration-300 ease-in-out top-1 left-1"
                                />
                                <label htmlFor="blur-toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-zinc-200 dark:bg-zinc-700 cursor-pointer transition-colors duration-300 ease-in-out"></label>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto pt-6 border-t border-dashed border-zinc-200 dark:border-zinc-800">
                        <button className="w-full flex items-center justify-center gap-2 bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 py-2.5 rounded-lg text-sm font-medium transition-all shadow-sm">
                            <Download className="w-4 h-4" />
                            Export Component
                        </button>
                    </div>
                </div>

                {/* Right: Preview Area */}
                <div className="flex-grow flex flex-col relative bg-white dark:bg-zinc-950">
                    {/* Toolbar */}
                    <div className="h-12 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between px-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm z-20">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-700"></div>
                            <div className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-700"></div>
                            <div className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-700"></div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-1.5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 cursor-pointer">
                                <Monitor className="w-4 h-4" />
                            </div>
                            <div className="flex items-center gap-1.5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 cursor-pointer">
                                <Smartphone className="w-4 h-4" />
                            </div>
                        </div>
                        <button
                            className="flex items-center gap-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer transition-colors"
                            onClick={() => {
                                setDuration(d => d + 0.0001);
                                setTimeout(() => setDuration(d => d - 0.0001), 10);
                            }}
                        >
                            <RotateCcw className="w-4 h-4" />
                            <span className="text-xs font-medium">Replay</span>
                        </button>
                    </div>

                    {/* Canvas */}
                    <div className={`flex-grow flex items-center justify-center p-12 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] ${presetName.toLowerCase().includes('terminal') ? 'font-mono' : 'font-sans'}`}>
                        <div className="w-full max-w-2xl text-center">
                            <motion.h2
                                key={JSON.stringify({ duration, stagger, yOffset, xOffset, scale, blur, text, presetName })}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-6xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight leading-tight outline-none"
                                variants={{
                                    visible: { transition: { staggerChildren: stagger } },
                                    hidden: {},
                                }}
                            >
                                {text.split(/(\s+)/).map((word, wIndex) => (
                                    <span key={wIndex} className="inline-block">
                                        {word.split("").map((char, cIndex) => {
                                            const isGlitch = presetName.toLowerCase().includes("glitch");

                                            // Determine variants based on mode
                                            const variants: Variants = isGlitch ? {
                                                hidden: { opacity: 0, x: -10, scale: scale },
                                                visible: {
                                                    opacity: 1,
                                                    x: [0, -2, 2, -1, 0], // Keyframes for glitch shake
                                                    scale: 1,
                                                    transition: { duration: duration, times: [0, 0.2, 0.5, 0.8, 1] }
                                                }
                                            } : {
                                                hidden: { opacity: 0, y: yOffset, x: xOffset, scale: scale, filter: blur ? 'blur(10px)' : 'none' },
                                                visible: { opacity: 1, y: 0, x: 0, scale: 1, filter: 'blur(0px)', transition: { duration: duration, type: "spring", bounce: 0.2 } },
                                            };

                                            return (
                                                <motion.span
                                                    key={`${wIndex}-${cIndex}`}
                                                    variants={variants}
                                                    className="inline-block"
                                                >
                                                    {char}
                                                </motion.span>
                                            )
                                        })}
                                    </span>
                                ))}
                            </motion.h2>

                            <input
                                type="text"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                className="mt-8 text-center w-full bg-transparent border-b border-dashed border-zinc-300 dark:border-zinc-700 focus:border-zinc-900 dark:focus:border-zinc-100 focus:outline-none py-2 text-xl text-zinc-500 dark:text-zinc-400 placeholder-zinc-300 dark:placeholder-zinc-600"
                                placeholder="Type something..."
                            />
                        </div>
                    </div>

                    {/* Code View */}
                    <div className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 p-4">
                        <div className="flex items-center justify-between cursor-pointer group">
                            <div className="flex items-center gap-2">
                                <div className="bg-zinc-200 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded p-1">
                                    <Code2 className="w-3.5 h-3.5" />
                                </div>
                                <span className="font-mono text-sm text-zinc-600 dark:text-zinc-400 font-medium">Code Preview</span>
                            </div>
                            <ChevronUp className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
                        </div>
                        <div className="mt-4 font-mono text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 overflow-x-auto whitespace-pre rounded bg-zinc-100 dark:bg-black/50 p-4 border border-zinc-200 dark:border-zinc-800">
                            {codeSnippet}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function LiveTextPlayground() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="min-h-screen bg-[#fbfbfb] dark:bg-zinc-950 font-sans selection:bg-zinc-900 selection:text-white dark:selection:bg-zinc-100 dark:selection:text-zinc-900 flex flex-col text-zinc-900 dark:text-zinc-50 transition-colors duration-300">

            {/* Top Announcement Bar */}
            <div className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 py-2 px-4 flex justify-center items-center text-sm font-medium relative z-20">
                <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                    <span className="bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded px-1.5 py-0.5 text-xs font-mono text-zinc-900 dark:text-zinc-100">v2.0</span>
                    <span>Now with multi-line stagger support</span>
                    <a href="#" className="ml-2 text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-600 underline-offset-2 hover:decoration-zinc-900 dark:hover:decoration-zinc-100 transition-all">Read Changelog</a>
                </div>
            </div>

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
                        <Link href="/docs" className="text-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Docs</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center gap-1.5 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-2 py-1 rounded shadow-sm">
                            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                            <span className="text-sm font-medium font-mono text-zinc-900 dark:text-zinc-100">1.2k</span>
                        </div>
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

            <Suspense fallback={<div>Loading editor...</div>}>
                <PlaygroundContent />
            </Suspense>

            {/* Footer */}
            <footer className="bg-zinc-50 dark:bg-zinc-900 border-t border-dashed border-zinc-300 dark:border-zinc-800 py-12">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/logo-text.png"
                            alt="Clover"
                            width={140}
                            height={40}
                            className="object-contain h-28 w-auto dark:invert"
                        />
                    </div>

                    <div className="flex gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                        <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">GitHub</a>
                        <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Twitter</a>
                    </div>

                    <p className="text-sm text-zinc-400 dark:text-zinc-600">
                        &copy; 2026 Clover. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
