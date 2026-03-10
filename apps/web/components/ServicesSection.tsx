'use client';

import Image from 'next/image';
import { urlForImage } from '@sanity-lib/image';
import { motion } from 'framer-motion';

interface Service {
  title?: string;
  description?: string;
  icon?: string;
  image?: unknown;
  link?: string;
}

interface ServicesSectionProps {
  data: {
    title?: string;
    subtitle?: string;
    services?: Service[];
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

export default function ServicesSection({ data }: ServicesSectionProps) {
  const services = data.services || [];

  return (
    <section id="services" className="relative overflow-hidden bg-[var(--ink-900)] px-6 py-24 text-[var(--sand-50)] md:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-16 top-[-80px] h-72 w-72 rotate-12 border border-white/15" />
        <div className="absolute left-[-180px] top-1/2 h-80 w-[460px] -translate-y-1/2 rotate-[18deg] bg-[linear-gradient(90deg,rgba(190,149,74,0.36),transparent)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1380px]">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent-300)]">Core Services</p>
          <h2 className="font-display mt-4 text-[clamp(2rem,5.5vw,4.6rem)] uppercase leading-[0.92]">
            {data.title || 'Disciplined Delivery at Every Scale'}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/78 md:text-lg">
            {data.subtitle ||
              'From strategy to field execution, each service is structured for measurable impact and operational continuity.'}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const imageUrl = service.image ? urlForImage(service.image as never)?.width(900).height(700).fit('crop').url() : null;
            const skewClass = index % 2 === 0 ? '-skew-y-1' : 'skew-y-1';

            return (
              <motion.article
                key={`${service.title}-${index}`}
                initial={{ opacity: 0, y: 52 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className={`group relative overflow-hidden rounded-[1.6rem] border border-white/15 bg-white/5 transition-transform duration-500 hover:-translate-y-3 ${skewClass}`}
              >
                <div className="absolute inset-x-0 top-0 h-[4px] bg-[linear-gradient(90deg,var(--accent-500),transparent)]" />
                <div className="relative mx-5 mt-5 h-44 overflow-hidden rounded-[1.1rem]">
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={service.title || 'Service image'}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[linear-gradient(155deg,rgba(190,149,74,0.65),rgba(32,71,96,0.72))]" />
                  )}
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,26,38,0),rgba(10,26,38,0.62))]" />
                </div>

                <div className="px-6 pb-7 pt-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--accent-300)]">Service {index + 1}</p>
                  <h3 className="font-display mt-3 text-2xl uppercase leading-tight">{service.title || 'Strategic Service'}</h3>
                  <p className="mt-3 min-h-[88px] text-sm leading-relaxed text-white/80">
                    {service.description || 'Service details can be managed from the homepage document in Sanity Studio.'}
                  </p>
                  {service.link && (
                    <a
                      href={service.link}
                      {...getHrefProps(service.link)}
                      className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sand-50)]"
                    >
                      Learn More
                      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                        -&gt;
                      </span>
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
