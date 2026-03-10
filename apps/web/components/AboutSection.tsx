'use client';

import Image from 'next/image';
import { urlForImage } from '@sanity-lib/image';
import { motion } from 'framer-motion';

interface Stat {
  label?: string;
  value?: string;
  suffix?: string;
}

interface AboutSectionProps {
  data: {
    title?: string;
    content?: string;
    image?: unknown;
    stats?: Stat[];
  };
}

export default function AboutSection({ data }: AboutSectionProps) {
  const imageUrl = data.image ? urlForImage(data.image as never)?.width(1000).height(1200).fit('crop').url() : null;
  const paragraphs = (data.content || '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
  const stats = data.stats?.filter((stat) => stat?.value && stat?.label) || [];

  return (
    <section id="about" className="relative overflow-hidden px-6 py-24 md:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(190,149,74,0.09),transparent_42%,rgba(17,67,94,0.08))]" />
      <div className="relative mx-auto grid w-full max-w-[1380px] gap-12 lg:grid-cols-12 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75 }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[2.1rem] border border-white/75 shadow-[0_22px_75px_rgba(10,35,52,0.17)]">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={data.title || 'About Al Rawaf'}
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-[linear-gradient(140deg,#0f344d,#be954a)]" />
            )}
            <div className="absolute inset-0 bg-[linear-gradient(170deg,rgba(17,67,94,0.08),rgba(17,67,94,0.55))]" />
          </div>
          <div className="absolute -bottom-6 -right-2 max-w-[240px] rounded-2xl border border-[var(--ink-200)] bg-white px-5 py-4 shadow-xl">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--ink-600)]">Operational Lens</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ink-700)]">
              Every initiative is planned for long-term utility, measured delivery, and resilient growth.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, delay: 0.08 }}
          className="lg:col-span-7"
        >
          <p className="text-xs uppercase tracking-[0.34em] text-[var(--ink-600)]">About</p>
          <h2 className="font-display mt-4 text-[clamp(2rem,5.2vw,4.4rem)] uppercase leading-[0.9] text-[var(--ink-900)]">
            {data.title || 'Built on Discipline. Driven by Vision.'}
          </h2>

          <div className="mt-7 space-y-4 text-base leading-relaxed text-[var(--ink-700)] md:text-lg">
            {(paragraphs.length ? paragraphs : ['Add rich company story content from Sanity to present your vision here.']).map(
              (paragraph, index) => (
                <p key={`about-p-${index}`}>{paragraph}</p>
              ),
            )}
          </div>

          {stats.length > 0 && (
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <motion.div
                  key={`${stat.label}-${index}`}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="rounded-2xl border border-[var(--ink-200)] bg-white px-6 py-4"
                >
                  <p className="font-display text-3xl uppercase leading-none text-[var(--ink-900)]">
                    {stat.value}
                    {stat.suffix || ''}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--ink-600)]">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
