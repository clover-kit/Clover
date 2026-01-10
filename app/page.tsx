"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
              <span className="text-sm font-medium font-mono text-zinc-900 dark:text-zinc-100">1</span>
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
            <Link href="/playground" className="flex items-center gap-2 bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 py-3 px-6 rounded-lg text-lg font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Open Playground <ArrowRight className="w-5 h-5" />
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

      </main>

      {/* Features Section */}
      <section className="border-t border-zinc-200 dark:border-zinc-800 py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            <FeatureCard icon={<Zap className="w-6 h-6 text-zinc-900 dark:text-zinc-100" />} title="Zero Config" description="Copy paste production ready code. No need to install complex libraries or set up context providers." />
            <FeatureCard icon={<Sliders className="w-6 h-6 text-zinc-900 dark:text-zinc-100" />} title="Real-Time Control" description="Fine-tune delay, stagger duration, and easing curves with instant visual feedback in the playground." />
            <FeatureCard icon={<Keyboard className="w-6 h-6 text-zinc-900 dark:text-zinc-100" />} title="Keyboard First" description={<>Switch presets with <code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm border border-zinc-200 dark:border-zinc-700">Cmd+K</code>. Designed for power users who want to stay in the flow.</>} />
            <FeatureCard icon={<Share2 className="w-6 h-6 text-zinc-900 dark:text-zinc-100" />} title="Shareable URLs" description="Your configuration is stored in the URL. Send a link to a teammate and they see exactly what you designed." />
            <FeatureCard icon={<Moon className="w-6 h-6 text-zinc-900 dark:text-zinc-100" />} title="Dark Mode" description="Built-in dark mode support that respects system preferences and transitions smoothly." />
            <FeatureCard icon={<Github className="w-6 h-6 text-zinc-900 dark:text-zinc-100" />} title="Open Source" description="MIT Licensed. Contribute new presets or customize the core logic to fit your specific design system." />
          </div>
        </div>
      </section>

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

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: React.ReactNode }) {
  return (
    <div className="group">
      <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 group-hover:border-zinc-900 dark:group-hover:border-zinc-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3 tracking-tight">{title}</h3>
      <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
        {description}
      </p>
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
