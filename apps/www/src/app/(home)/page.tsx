'use client';

import { ArrowUpRight, BookOpen, Rocket } from 'lucide-react';
import { SiGithub as GitHub } from '@icons-pack/react-simple-icons';
import Image from 'next/image';
import Link from 'next/link';

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
    <div className="flex flex-1 flex-col justify-center items-center px-4 py-24 relative overflow-hidden">
      {/* Background decoration - subtle gradient instead of loud blobs */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-125 bg-linear-to-b from-primary/30 to-transparent" />
      </div>

      {/* Desktop: Two-column layout, Mobile: Stacked */}
      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-8">
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8 flex-1 lg:max-w-[55%]">
            <div className="relative group">
              <Image
                src="/logo-mini.png"
                alt="Bedstack Logo"
                width={100}
                height={100}
                className="drop-shadow-xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute -top-6 -right-4 pointer-events-none select-none">
                <span className="animate-zzz-1 text-yellow-400 font-black text-2xl absolute opacity-0">
                  Z
                </span>
                <span className="animate-zzz-2 text-yellow-400 font-black text-3xl absolute opacity-0">
                  Z
                </span>
                <span className="animate-zzz-3 text-yellow-400 font-black text-4xl absolute opacity-0">
                  Z
                </span>
              </div>
            </div>

            <Link
              href="/docs/what-is-bedstack"
              className="inline-flex overflow-hidden w-fit items-center gap-2 rounded-full border bg-background py-1 pr-3 pl-1 text-foreground text-sm leading-6 shadow-sm hover:bg-accent transition-colors transition duration-150"
            >
              <span className="rounded-full bg-primary text-primary-foreground px-2 font-semibold text-[10px] uppercase tracking-wider">
                New
              </span>
              <span className="truncate">
                Bedstack is now powered by Fumadocs
              </span>
              <ArrowUpRight className="size-4 opacity-50" />
            </Link>

            <h1 className="max-w-3xl text-balance font-bold text-5xl leading-tight tracking-tighter! sm:text-6xl md:text-7xl lg:text-8xl">
              The stack you don&apos;t want to{' '}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-primary via-blue-500 to-primary font-extrabold italic pr-1">
                sleep on
              </span>
            </h1>

            <p className="max-w-xl text-balance text-muted-foreground md:max-w-2xl md:text-xl lg:text-2xl leading-normal font-light">
              An opinionated, typesafe backend stack built with{' '}
              <span className="inline-flex items-center gap-1.5 text-foreground">
                <Image
                  src="/bun-press-kit/logo-square.png"
                  alt="Bun"
                  width={20}
                  height={20}
                  className="inline-block"
                />
                Bun
              </span>
              ,{' '}
              <span className="inline-flex items-center gap-1.5 text-foreground">
                <Image
                  src="/elysiajs-logo.png"
                  alt="ElysiaJS"
                  width={20}
                  height={20}
                  className="inline-block"
                />
                ElysiaJS
              </span>
              , and{' '}
              <span className="inline-flex items-center gap-1.5 text-foreground">
                <Image
                  src="/drizzle-logo.png"
                  alt="Drizzle"
                  width={20}
                  height={20}
                  className="inline-block"
                />
                Drizzle
              </span>
              .
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
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
                <GitHub size={18} />
                GitHub
              </a>
            </div>
          </div>

          {/* Right Column: Bed Image (Desktop) / Below Text (Mobile) */}
          <div className="flex-1 lg:max-w-[45%] flex items-center justify-center lg:justify-end order-first lg:order-last">
            <div className="relative w-full max-w-lg lg:max-w-none aspect-square lg:aspect-auto">
              <Image
                src="/logo-mini.png"
                alt="Bed illustration"
                width={320}
                height={320}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 text-center border-t border-dotted mt-auto">
      <div className="container mx-auto px-4 flex flex-col gap-2 text-sm text-muted-foreground">
        <p>Released under the MIT License</p>
        <p>Copyright © 2023-present Yam Borodetsky</p>
      </div>
    </footer>
  );
};
