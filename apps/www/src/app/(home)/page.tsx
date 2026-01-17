'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Rocket, BookOpen, Github } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden flex flex-col items-center justify-center text-center bg-background">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/30 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo-mini.png"
              alt="Bedstack Logo"
              width={120}
              height={120}
              className="drop-shadow-2xl animate-float"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-blue-500">
              Bedstack
            </span>
          </h1>

          <p className="text-2xl md:text-3xl font-semibold text-muted-foreground">
            Bun + ElysiaJS + Drizzle
          </p>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            RealWorld example app for the stack you don't want to sleep on.
            Bleeding-edge, typesafe, and high-performance.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/docs/what-is-bedstack"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:opacity-90 transition-all shadow-lg shadow-primary/25"
            >
              <BookOpen size={20} />
              What is Bedstack?
            </Link>
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-secondary-foreground font-bold rounded-full hover:bg-secondary/80 transition-all border border-border"
            >
              <Rocket size={20} />
              Quickstart
            </Link>
            <a
              href="https://github.com/yamcodes/bedstack"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-muted text-muted-foreground font-bold rounded-full hover:bg-muted/80 transition-all border border-border"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 underline decoration-primary/30 decoration-4 underline-offset-8">
            Core Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background border border-border p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 flex items-center mb-6">
                <Image
                  src="/bun-press-kit/logo-centered.svg"
                  alt="Bun"
                  width={60}
                  height={60}
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Bun</h3>
              <p className="text-muted-foreground">
                All-in-one JavaScript runtime & toolkit designed for speed,
                complete with a bundler, test runner, and Node.js-compatible
                package manager.
              </p>
            </div>

            <div className="bg-background border border-border p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 flex items-center mb-6">
                <Image
                  src="/elysiajs-logo.png"
                  alt="ElysiaJS"
                  width={60}
                  height={60}
                />
              </div>
              <h3 className="text-xl font-bold mb-3">ElysiaJS</h3>
              <p className="text-muted-foreground">
                TypeScript framework supercharged by Bun with End-to-End Type
                Safety, unified type system and outstanding developer
                experience.
              </p>
            </div>

            <div className="bg-background border border-border p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 flex items-center mb-6">
                <Image
                  src="/drizzle-logo.png"
                  alt="Drizzle"
                  width={60}
                  height={60}
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Drizzle</h3>
              <p className="text-muted-foreground">
                Lightweight, performant, typesafe, non-lactose, gluten-free,
                flexible, serverless-ready, and headless TypeScript ORM.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
