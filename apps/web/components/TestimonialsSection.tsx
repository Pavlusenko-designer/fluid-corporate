'use client';

import Image from 'next/image';
import { urlForImage } from '@sanity-lib/image';
import { motion } from 'framer-motion';

interface Testimonial {
  quote?: string;
  author?: string;
  position?: string;
  company?: string;
  avatar?: unknown;
}

interface TestimonialsSectionProps {
  data: {
    title?: string;
    testimonials?: Testimonial[];
  };
}

export default function TestimonialsSection({ data }: TestimonialsSectionProps) {
  const testimonials = data.testimonials || [];
  const hasTestimonials = testimonials.length > 0;

  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(17,67,94,0.08),transparent_40%,rgba(190,149,74,0.14))]" />
      <div className="relative mx-auto w-full max-w-[1380px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.33em] text-[var(--ink-600)]">Client Voice</p>
          <h2 className="font-display mt-4 text-[clamp(1.9rem,5vw,4rem)] uppercase leading-[0.92] text-[var(--ink-900)]">
            {data.title || 'Trusted by Partners and Stakeholders'}
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {(hasTestimonials ? testimonials : [{ quote: 'Add testimonials in Sanity to complete this section.' }]).map(
            (testimonial, index) => {
              const avatar = testimonial.avatar
                ? urlForImage(testimonial.avatar as never)?.width(180).height(180).fit('crop').url()
                : null;

              return (
                <motion.article
                  key={`${testimonial.author || 'testimonial'}-${index}`}
                  initial={{ opacity: 0, y: 40, rotate: -1.5 }}
                  whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -0.8 : 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="relative rounded-[1.4rem] border border-[var(--ink-200)] bg-white px-6 py-7 shadow-[0_14px_38px_rgba(10,35,52,0.1)]"
                >
                  <p className="font-display absolute left-5 top-3 text-6xl leading-none text-[var(--accent-200)]">&quot;</p>
                  <p className="relative z-10 min-h-[112px] pt-5 text-sm leading-relaxed text-[var(--ink-700)] md:text-base">
                    {testimonial.quote}
                  </p>

                  {(testimonial.author || testimonial.company) && (
                    <div className="mt-6 flex items-center gap-3">
                      {avatar ? (
                        <Image
                          src={avatar}
                          alt={testimonial.author || 'Author avatar'}
                          width={44}
                          height={44}
                          className="rounded-full object-cover"
                        />
                      ) : (
                        <div className="h-11 w-11 rounded-full bg-[var(--ink-200)]" />
                      )}
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--ink-900)]">
                          {testimonial.author || 'Client Name'}
                        </p>
                        <p className="text-xs uppercase tracking-[0.14em] text-[var(--ink-600)]">
                          {[testimonial.position, testimonial.company].filter(Boolean).join(', ')}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.article>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}
