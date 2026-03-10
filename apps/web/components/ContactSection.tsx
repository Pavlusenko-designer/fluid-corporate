'use client';

import { motion } from 'framer-motion';

interface SocialLink {
  platform?: string;
  url?: string;
  icon?: string;
}

interface ContactSectionProps {
  data: {
    title?: string;
    subtitle?: string;
    email?: string;
    phone?: string;
    address?: string;
    socialLinks?: SocialLink[];
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

export default function ContactSection({ data }: ContactSectionProps) {
  const socialLinks = (data.socialLinks || []).filter((link) => link.url);

  return (
    <section id="contact" className="relative overflow-hidden px-6 pb-24 md:px-10">
      <div className="relative mx-auto w-full max-w-[1380px] overflow-hidden rounded-[2rem] border border-[var(--ink-800)] bg-[linear-gradient(140deg,#0d273b,#173d56_50%,#0d273b)] px-7 py-10 text-white md:px-12 md:py-14">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 top-0 h-52 w-72 rotate-[22deg] bg-[linear-gradient(90deg,rgba(190,149,74,0.35),transparent)]" />
          <div className="absolute -right-20 bottom-0 h-52 w-72 -rotate-[18deg] bg-[linear-gradient(90deg,transparent,rgba(190,149,74,0.3))]" />
        </div>

        <div className="relative grid gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-7"
          >
            <p className="text-xs uppercase tracking-[0.34em] text-[var(--accent-300)]">Contact</p>
            <h2 className="font-display mt-4 text-[clamp(2rem,4.8vw,4.2rem)] uppercase leading-[0.9]">
              {data.title || 'Build the Next Landmark Together'}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
              {data.subtitle ||
                'Use this area to invite partners and clients into your pipeline. All text, links, and channels are editable in Sanity.'}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {data.email && (
                <a
                  href={`mailto:${data.email}`}
                  className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink-900)]"
                >
                  {data.email}
                </a>
              )}
              {data.phone && (
                <a
                  href={`tel:${data.phone}`}
                  className="inline-flex items-center rounded-full border border-white/35 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white"
                >
                  {data.phone}
                </a>
              )}
            </div>
          </motion.div>

          <div className="grid gap-4 lg:col-span-5">
            {data.address && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55 }}
                className="rounded-2xl border border-white/25 bg-white/10 px-5 py-4"
              >
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-[var(--accent-300)]">Office</p>
                <p className="mt-2 text-sm leading-relaxed text-white/84">{data.address}</p>
              </motion.div>
            )}

            {socialLinks.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="rounded-2xl border border-white/25 bg-white/10 px-5 py-4"
              >
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-[var(--accent-300)]">Social</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {socialLinks.map((link, index) => (
                    <a
                      key={`${link.platform}-${index}`}
                      href={link.url}
                      {...getHrefProps(link.url)}
                      className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 px-3 text-xs font-semibold uppercase tracking-[0.1em] transition-colors duration-300 hover:bg-[var(--accent-500)]"
                      aria-label={link.platform || 'social link'}
                    >
                      {(link.platform || 'social').slice(0, 2)}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
