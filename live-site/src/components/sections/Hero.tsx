import { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { heroImage } from '@/data/siteContent';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!prefersReducedMotion.matches) {
      void videoRef.current?.play().catch(() => undefined);
    }
  }, []);

  return (
    <section id="top" className="relative isolate flex min-h-screen items-center overflow-hidden bg-navy-900">
      <div className="absolute inset-0 -z-10">
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="metadata"
          poster={heroImage}
          onPlay={() => setIsVideoPlaying(true)}
          onPause={() => setIsVideoPlaying(false)}
          aria-hidden="true"
          tabIndex={-1}
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-70"
        >
          <source src="/nexovant-brand-intro.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/55 via-navy-900/35 to-navy-900/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/75 via-navy-900/35 to-transparent" />
        <div className="absolute -left-40 top-1/4 h-[32rem] w-[32rem] rounded-full bg-primary-600/30 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-accent-500/20 blur-[120px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-5 pb-24 pt-36 sm:px-8 lg:grid-cols-12 lg:pt-40">
        <div className="lg:col-span-7">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-navy-100 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-accent-400" />
            Zoho Consulting & Custom Software
          </div>

          <div className={`transition-opacity duration-1000 ${isVideoPlaying ? 'opacity-25' : 'opacity-100'}`}>
            <h1
              className="animate-fade-up mt-8 text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
              style={{ animationDelay: '120ms' }}
            >
              Software That Makes Your Business{' '}
              <span className="text-gradient">Work Smarter</span>
            </h1>
          </div>

          <p
            className="animate-fade-up mt-6 max-w-xl text-base leading-[1.5] text-navy-200 sm:text-lg"
            style={{ animationDelay: '240ms' }}
          >
            We help growing businesses streamline operations with Zoho solutions, custom applications, and modern web and mobile platforms, built to fit the way your team actually works.
          </p>
          <div className="animate-fade-up mt-8 flex flex-wrap gap-4" style={{ animationDelay: '360ms' }}>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-primary-600 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-primary-600/30 transition-all hover:-translate-y-0.5 hover:bg-primary-500">Book Consultation</a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10">Explore Services</a>
          </div>
        </div>

      </div>

      <a
        href="#metrics"
        aria-label="Scroll to trust metrics"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-navy-300 transition-colors hover:text-white md:flex"
      >
        Scroll
        <span className="flex h-10 w-6 justify-center rounded-full border border-white/30 pt-2">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white" />
        </span>
      </a>
    </section>
  );
}
