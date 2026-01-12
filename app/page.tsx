"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GithubStars } from "@/components/github-stars";
import { motion } from "framer-motion";
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
  ArrowRight
} from "lucide-react";

export default function LandingPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-[#fbfbfb] dark:bg-zinc-950 font-sans selection:bg-zinc-900 selection:text-white dark:selection:bg-zinc-100 dark:selection:text-zinc-900 flex flex-col text-zinc-900 dark:text-zinc-50 transition-colors duration-300">

      {/* Top Announcement Bar */}
      {/* <div className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 py-2 px-4 flex justify-center items-center text-sm font-medium relative z-20">
        <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
          <span className="bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded px-1.5 py-0.5 text-xs font-mono text-zinc-900 dark:text-zinc-100"></span>
          <span>Now with multi-line stagger support</span>
          <a href="#" className="ml-2 text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-600 underline-offset-2 hover:decoration-zinc-900 dark:hover:decoration-zinc-100 transition-all">Read Changelog</a>
        </div>
      </div> */}

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

      <main className="flex-grow flex flex-col items-center justify-start pt-20 pb-20 px-6 relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60 dark:opacity-30" style={{ backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)", backgroundSize: "24px 24px", color: "var(--foreground)" }}></div>

        {/* Hero Text */}
        <div className="relative z-10 max-w-4xl w-full text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-mono text-zinc-900 dark:text-zinc-50 mb-6 leading-[1.1] tracking-tight">
            Type text. Make it <br className="hidden md:block" />
            <span className="relative inline-block px-4 py-1 mt-2 md:mt-0 border-2 border-dashed border-zinc-300 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 font-mono rounded-lg">
              <span className="text-zinc-900 dark:text-zinc-100">Alive</span>
              <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 dark:bg-zinc-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-zinc-900 dark:bg-zinc-100"></span>
              </span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
            Instant text animations for React & Framer Motion. <br />
            Select a style below to customize.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="/presets" className="flex items-center gap-2 bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 py-3 px-6 rounded-lg text-lg font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Open Presets <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Demos Gallery Grid */}
        <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DemoCard title="Typewriter" delay={0.1}>
            <span className="font-mono">Typing...</span>
          </DemoCard>
          <DemoCard title="Fade In" delay={0.2}>
            <span className="blur-[1px]">Fade</span>
          </DemoCard>
          <DemoCard title="Glitch" delay={0.3}>
            <span className="font-mono tracking-tighter">G-Glitch</span>
          </DemoCard>
          <DemoCard title="Stagger" delay={0.4}>
            <span className="italic">Stagger</span>
          </DemoCard>
        </div>

        {/* Community Callout */}
        <section className="relative z-10 w-full max-w-6xl mt-20 mb-8">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-50 dark:bg-zinc-800/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 z-0"></div>

            <div className="relative z-10 max-w-xl">
              <h2 className="text-2xl md:text-3xl font-mono font-bold text-zinc-900 dark:text-zinc-50 mb-3 tracking-tight">
                Give us a <span className="text-amber-500">Star</span> & Contribute.
              </h2>
              <p className="font-mono text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Clover is proudly open-source. Help us grow by starring the repo or submitting your own text animation presets.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a
                href="https://github.com/clover-kit/Clover"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-6 py-3 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm"
              >
                <Github className="w-5 h-5" />
                <span>Star Repo</span>
              </a>
              <a
                href="https://github.com/clover-kit/Clover"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 px-6 py-3 rounded-lg font-medium hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
              >
                <Zap className="w-5 h-5 text-amber-500" />
                <span>Contribute</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Features Section */}
      <section className="border-t border-dashed border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto border-x border-dashed border-zinc-300 dark:border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-8 border-b md:border-b-0 md:border-r border-dashed border-zinc-300 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
              <Zap className="w-5 h-5 mb-6 text-zinc-900 dark:text-zinc-100" />
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider mb-2 text-zinc-900 dark:text-zinc-100">Zero Config</h3>
              <p className="text-zinc-500 dark:text-zinc-400 font-mono text-sm leading-relaxed">Copy paste production ready code. No complex libraries or context providers needed.</p>
            </div>
            <div className="p-8 border-b md:border-b-0 md:border-r border-dashed border-zinc-300 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
              <Sliders className="w-5 h-5 mb-6 text-zinc-900 dark:text-zinc-100" />
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider mb-2 text-zinc-900 dark:text-zinc-100">Real-Time Control</h3>
              <p className="text-zinc-500 dark:text-zinc-400 font-mono text-sm leading-relaxed">Fine-tune delay, stagger duration, and easing curves with instant visual feedback.</p>
            </div>
            <div className="p-8 border-dashed border-zinc-300 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
              <Keyboard className="w-5 h-5 mb-6 text-zinc-900 dark:text-zinc-100" />
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider mb-2 text-zinc-900 dark:text-zinc-100">Keyboard First</h3>
              <p className="text-zinc-500 dark:text-zinc-400 font-mono text-sm leading-relaxed">Designed for flow. Switch presets with <code className="bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded text-xs border border-zinc-200 dark:border-zinc-700">Cmd+K</code>.</p>
            </div>
          </div>
        </div>
      </section>

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

            <div className="flex flex-col justify-end">
              <Image
                src="/logo-text.png"
                alt="Clover"
                width={100}
                height={30}
                className="object-contain h-8 w-auto opacity-50 dark:invert mb-2"
              />
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



function DemoCard({ title, children, delay }: { title: string, children: React.ReactNode, delay: number }) {
  return (
    <Link href={`/playground?preset=${encodeURIComponent(title)}`} className="group relative block">
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 rounded-xl transform transition-transform group-hover:scale-[1.02] -z-10"></div>
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 h-48 rounded-xl flex items-center justify-center relative overflow-hidden group-hover:border-zinc-400 dark:group-hover:border-zinc-600 transition-colors">
        <div className="absolute inset-0 opacity-20 dark:opacity-10" style={{ backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)", backgroundSize: "12px 12px" }}></div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: delay, duration: 0.5 }}
          className="text-2xl text-zinc-900 dark:text-zinc-100 z-10"
        >
          {children}
        </motion.div>
      </div>
      <div className="mt-3 flex items-center justify-between px-2">
        <span className="font-mono text-sm font-medium text-zinc-600 dark:text-zinc-400">{title}</span>
        <ArrowRight className="w-4 h-4 text-zinc-400 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
      </div>
    </Link>
  )
}
