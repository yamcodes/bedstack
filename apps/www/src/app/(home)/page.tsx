'use client';

import Link from 'next/link';
import { ArrowUpRight, Github, BookOpen, Rocket } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <Footer />
    </div>
  );
}

const Hero = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center text-center gap-8 px-4 py-24 relative overflow-hidden">
      {/* Background decoration - subtle gradient instead of loud blobs */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-125 bg-linear-to-b from-primary/30 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        <Link
          href="/docs/what-is-bedstack"
          className="inline-flex overflow-hidden w-fit items-center gap-2 rounded-full border bg-background py-1 pr-3 pl-1 text-foreground text-sm leading-6 shadow-sm hover:bg-accent transition-colors"
        >
          <span className="rounded-full bg-primary text-primary-foreground px-2 font-semibold text-[10px] uppercase tracking-wider">
            New
          </span>
          <span className="font-medium truncate">
            Bedstack is now powered by Fumadocs
          </span>
          <ArrowUpRight className="size-4 opacity-50" />
        </Link>

        <h1 className="max-w-3xl text-balance text-center font-bold text-5xl leading-tight tracking-tighter! sm:text-6xl md:max-w-4xl md:text-8xl">
          The stack you don&apos;t want to{' '}
          <span className="bg-clip-text text-transparent bg-linear-to-r from-primary via-blue-500 to-primary font-extrabold italic pr-1">
            sleep on
          </span>
        </h1>

        <p className="max-w-xl text-balance text-center text-muted-foreground md:max-w-2xl md:text-xl lg:text-2xl leading-normal font-medium">
          Framework-agnostic, type-safe toolkit for building backend
          applications with{' '}
          <div className="relative inline-flex size-3 mx-1">
            <div className="bg-green-500 inline-block size-full rounded-full" />
            <div className="bg-green-500 absolute size-full animate-ping rounded-full opacity-75" />
          </div>{' '}
          <span className="text-foreground"> Bun</span>,
          <span className="text-foreground"> ElysiaJS</span>, and{' '}
          <span className="text-foreground"> Drizzle</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            href="/docs/getting-started"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-all shadow-md shadow-primary/20"
          >
            <Rocket size={18} className="fill-current" />
            Quickstart
          </Link>
          <Link
            href="/docs/what-is-bedstack"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-background text-foreground font-semibold rounded-full hover:bg-accent transition-all border border-border shadow-xs"
          >
            <BookOpen size={18} />
            Documentation
          </Link>
          <a
            href="https://github.com/yamcodes/bedstack"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-background text-foreground font-semibold rounded-full hover:bg-accent transition-all border border-border shadow-xs"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 text-center border-t border-dotted mt-auto">
      <div className="container mx-auto px-4 flex flex-col gap-2">
        <p className="text-muted-foreground text-sm font-medium">
          Released under the MIT License
        </p>
        <p className="text-muted-foreground text-sm font-medium">
          Copyright © 2025-present Yam Borodetsky
        </p>
      </div>
    </footer>
  );
};
