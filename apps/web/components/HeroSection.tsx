'use client';

import Image from 'next/image';
import { urlForImage } from '@sanity-lib/image';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  data: {
    headline?: string;
    subheadline?: string;
    backgroundImage?: unknown;
    backgroundVideo?: string;
    ctaText?: string;
    ctaLink?: string;
    scrollIndicator?: boolean;
  };
}

const getHrefProps = (href?: string) => {
  if (!href) {
    return {};
  }

  if (href.startsWith('http://') || href.startsWith('https://')) {
    return { target: '_blank', rel: 'noreferrer' as const };
  }

  return {};
};

export default function HeroSection({ data }: HeroSectionProps) {
  const imageUrl = data.backgroundImage ? urlForImage(data.backgroundImage as never)?.width(1800).height(1300).fit('crop').url() : null;

  return (
    <section className="relative isolate min-h-screen overflow-hidden px-6 pb-16 pt-28 md:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(17,67,94,0.18),transparent_44%),radial-gradient(circle_at_78%_40%,rgba(190,149,74,0.3),transparent_45%)]" />
        <div className="home-diagonal-grid absolute inset-0 opacity-30" />
        <div className="absolute -left-24 top-16 h-72 w-72 rotate-[16deg] rounded-[3rem] border border-[rgba(255,255,255,0.45)] bg-white/20 backdrop-blur-[1px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1380px] gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex -skew-x-12 bg-[var(--ink-900)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--sand-50)]"
          >
            Al Rawaf Corporate
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-[clamp(2.7rem,8vw,7.1rem)] uppercase leading-[0.88] text-[var(--ink-900)]"
          >
            {data.headline || 'Shaping Saudi Landmarks with Precision and Intent'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.22 }}
            className="mt-7 max-w-2xl text-base leading-relaxed text-[var(--ink-700)] md:text-lg"
          >
            {data.subheadline ||
              'Al Rawaf delivers future-ready environments through engineering depth, operational excellence, and bold architecture.'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.32 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={data.ctaLink || '#projects'}
              {...getHrefProps(data.ctaLink)}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--ink-900)] px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--sand-50)] transition-transform duration-300 hover:-translate-y-1"
            >
              {data.ctaText || 'Explore Projects'}
              <span aria-hidden>-&gt;</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-b border-[var(--ink-700)] pb-1 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ink-700)] transition-colors duration-300 hover:text-[var(--ink-900)]"
            >
              Start a Conversation
              <span aria-hidden>-&gt;</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 52 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05, delay: 0.2 }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[540px] overflow-hidden rounded-[2rem] border border-white/60 shadow-[0_24px_90px_rgba(14,34,51,0.24)]">
            {data.backgroundVideo ? (
              <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
                <source src={data.backgroundVideo} type="video/mp4" />
              </video>
            ) : imageUrl ? (
              <Image
                src={imageUrl}
                alt={data.headline || 'Al Rawaf hero visual'}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-[linear-gradient(145deg,#0f344d,#214e67_52%,#be954a)]" />
            )}
            <div className="absolute inset-0 bg-[linear-gradient(165deg,rgba(11,28,42,0.1),rgba(11,28,42,0.7))]" />
            <div
              aria-hidden
              className="absolute -bottom-16 -left-20 h-56 w-[130%] rotate-[-10deg] bg-[linear-gradient(90deg,rgba(245,241,231,0.75),rgba(245,241,231,0.1))]"
            />
          </div>
        </motion.div>
      </div>

      {data.scrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex h-10 w-6 justify-center rounded-full border border-[var(--ink-600)]">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="mt-2 h-3 w-1 rounded-full bg-[var(--ink-600)]"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
