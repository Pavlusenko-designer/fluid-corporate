'use client';

import Image from 'next/image';
import { urlForImage } from '@sanity-lib/image';
import { motion } from 'framer-motion';

interface Project {
  title?: string;
  description?: string;
  image?: unknown;
  category?: string;
  link?: string;
  featured?: boolean;
}

interface ProjectsSectionProps {
  data: {
    title?: string;
    subtitle?: string;
    projects?: Project[];
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

export default function ProjectsSection({ data }: ProjectsSectionProps) {
  const projects = data.projects || [];
  const featuredProject = projects.find((project) => project.featured) || projects[0];
  const standardProjects = projects.filter((project) => project !== featuredProject);

  return (
    <section id="projects" className="relative overflow-hidden bg-[var(--ink-950)] px-6 py-24 text-white md:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(190,149,74,0.28),transparent_42%)]" />
        <div className="absolute -left-20 bottom-14 h-60 w-80 rotate-[14deg] border border-white/15" />
      </div>

      <div className="relative mx-auto w-full max-w-[1380px]">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.34em] text-[var(--accent-300)]">Selected Work</p>
          <h2 className="font-display mt-4 text-[clamp(2rem,5.5vw,4.7rem)] uppercase leading-[0.91]">
            {data.title || 'Signature Projects Across Sectors'}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            {data.subtitle ||
              'A curated portfolio combining engineering intelligence, architectural expression, and delivery rigor.'}
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-12">
          {featuredProject && (
            <motion.article
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.72 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/5 lg:col-span-7"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                {featuredProject.image ? (
                  <Image
                    src={urlForImage(featuredProject.image as never)?.width(1500).height(1000).fit('crop').url() || ''}
                    alt={featuredProject.title || 'Featured project'}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[linear-gradient(150deg,#1d4260,#be954a)]" />
                )}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,21,32,0),rgba(8,21,32,0.9))]" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent-300)]">
                  {featuredProject.category || 'Featured'}
                </p>
                <h3 className="font-display mt-3 text-3xl uppercase leading-tight md:text-4xl">
                  {featuredProject.title || 'Flagship Development'}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/78 md:text-base">
                  {featuredProject.description ||
                    'Showcase your most strategic development as the homepage focal point from Sanity.'}
                </p>
                {featuredProject.link && (
                  <a
                    href={featuredProject.link}
                    {...getHrefProps(featuredProject.link)}
                    className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white"
                  >
                    View Project
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                      -&gt;
                    </span>
                  </a>
                )}
              </div>
            </motion.article>
          )}

          <div className="grid gap-6 lg:col-span-5">
            {standardProjects.slice(0, 3).map((project, index) => {
              const imageUrl = project.image ? urlForImage(project.image as never)?.width(900).height(650).fit('crop').url() : null;

              return (
                <motion.article
                  key={`${project.title}-${index}`}
                  initial={{ opacity: 0, y: 44 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.66, delay: index * 0.08 }}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/5"
                >
                  <div className="grid min-h-[200px] grid-cols-[120px_1fr] gap-4 sm:grid-cols-[170px_1fr]">
                    <div className="relative overflow-hidden">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={project.title || 'Project image'}
                          fill
                          sizes="(max-width: 1024px) 30vw, 15vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,#be954a,#18435f)]" />
                      )}
                    </div>
                    <div className="px-1 py-5 pr-5">
                      <p className="text-[0.64rem] uppercase tracking-[0.22em] text-[var(--accent-300)]">
                        {project.category || 'Project'}
                      </p>
                      <h3 className="font-display mt-2 text-xl uppercase leading-snug">{project.title || 'Project Title'}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/76">
                        {project.description || 'Add project summary content in Sanity CMS.'}
                      </p>
                      {project.link && (
                        <a
                          href={project.link}
                          {...getHrefProps(project.link)}
                          className="mt-4 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white"
                        >
                          Open
                          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                            -&gt;
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
