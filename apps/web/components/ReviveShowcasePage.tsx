'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import type {
  ReviveExpertiseItem,
  ReviveMemberItem,
  RevivePageData,
  ReviveProjectItem,
} from './revive-types';

interface ReviveShowcasePageProps {
  data: RevivePageData;
}

function hoverVideoControl(video: HTMLVideoElement | null, shouldPlay: boolean) {
  if (!video) {
    return;
  }
  if (shouldPlay) {
    video.currentTime = 0;
    video.play().catch(() => {});
  } else {
    video.pause();
  }
}

function ProjectCard({ item, index, featured = false }: { item: ReviveProjectItem; index: number; featured?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.012, transition: { duration: 0.42, delay: 0, ease: [0.22, 1, 0.36, 1] } }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => {
        setHovered(true);
        hoverVideoControl(videoRef.current, true);
      }}
      onMouseLeave={() => {
        setHovered(false);
        hoverVideoControl(videoRef.current, false);
      }}
      className={`group revive-hover-lift revive-diagonal-frame relative overflow-hidden border border-white/15 ${
        featured ? 'min-h-[420px] lg:min-h-[580px] lg:col-span-2' : 'min-h-[280px]'
      }`}
    >
      {item.imageUrl && (
        <img
          src={item.imageUrl}
          alt={item.title || 'Project image'}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
        />
      )}
      {item.videoUrl && (
        <video
          ref={videoRef}
          src={item.videoUrl}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
          style={{ opacity: hovered ? 1 : 0 }}
        />
      )}
      <div className="revive-diagonal-mask absolute inset-0" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,25,0.2),rgba(8,17,25,0.88))]" />
      <div className="absolute left-0 right-0 top-0 h-[2px] bg-[linear-gradient(90deg,#d7ba7c,transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
        <div className="mb-2 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/70">
          <span>{item.location || 'Saudi Arabia'}</span>
          <span className="h-1 w-1 rounded-full bg-[#d7ba7c]" />
          <span>{item.area || 'Strategic Development'}</span>
        </div>
        <h3 className="font-display text-xl font-bold uppercase lg:text-2xl">{item.title || `Project ${index + 1}`}</h3>
      </div>
      <span className="absolute left-6 top-6 font-display text-5xl font-extrabold text-white/10">{String(index + 1).padStart(2, '0')}</span>
    </motion.article>
  );
}

function TeamCard({ member, index }: { member: ReviveMemberItem; index: number }) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.42, delay: 0, ease: [0.22, 1, 0.36, 1] } }}
      className="group revive-hover-lift relative"
      onMouseEnter={() => {
        setHovered(true);
        hoverVideoControl(videoRef.current, true);
      }}
      onMouseLeave={() => {
        setHovered(false);
        hoverVideoControl(videoRef.current, false);
      }}
    >
      <div className="revive-team-glow pointer-events-none absolute -bottom-7 left-1/2 h-16 w-[74%] -translate-x-1/2 rounded-full bg-[#d7ba7c]/45 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-75" />
      <div className="revive-diagonal-frame relative z-10 aspect-[3/4] overflow-hidden">
        {member.imageUrl && (
          <img
            src={member.imageUrl}
            alt={member.name || 'Team member'}
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          />
        )}
        {member.videoUrl && (
          <video
            ref={videoRef}
            src={member.videoUrl}
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
            style={{ opacity: hovered ? 1 : 0 }}
          />
        )}
        <div className="revive-diagonal-mask absolute inset-0" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,18,25,0.05),rgba(10,18,25,0.72))] transition-opacity duration-500 group-hover:opacity-0" />
        <div className="revive-diagonal-stroke absolute inset-0" />
      </div>
      <div className="mt-4">
        <div className="text-[11px] uppercase tracking-[0.18em] text-[#d7ba7c] transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#efd9ad]">
          {String(index + 1).padStart(2, '0')}
        </div>
        <h4 className="mt-1 font-display text-base font-bold leading-snug lg:text-lg">{member.name || 'Team Member'}</h4>
        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/70">{member.role || 'Role'}</p>
      </div>
    </motion.div>
  );
}

function CursorTrail() {
  const prefersReducedMotion = useReducedMotion();
  const cursorX = useMotionValue(-120);
  const cursorY = useMotionValue(-120);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);

  const trailA = {
    x: useSpring(cursorX, { stiffness: 360, damping: 36, mass: 0.24 }),
    y: useSpring(cursorY, { stiffness: 360, damping: 36, mass: 0.24 }),
  };
  const trailB = {
    x: useSpring(cursorX, { stiffness: 260, damping: 32, mass: 0.36 }),
    y: useSpring(cursorY, { stiffness: 260, damping: 32, mass: 0.36 }),
  };
  const trailC = {
    x: useSpring(cursorX, { stiffness: 180, damping: 28, mass: 0.48 }),
    y: useSpring(cursorY, { stiffness: 180, damping: 28, mass: 0.48 }),
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const media = window.matchMedia('(pointer: fine)');
    const sync = () => setEnabled(media.matches);
    sync();

    const onMove = (event: PointerEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      setActive(true);
    };
    const onLeave = () => setActive(false);

    media.addEventListener('change', sync);
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerleave', onLeave);

    return () => {
      media.removeEventListener('change', sync);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
    };
  }, [cursorX, cursorY, prefersReducedMotion]);

  if (!enabled || prefersReducedMotion) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] hidden lg:block">
      <motion.span
        style={{ x: trailC.x, y: trailC.y }}
        animate={{ opacity: active ? 0.22 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute -ml-6 -mt-6 h-12 w-12 rounded-full bg-[#d7ba7c]"
      />
      <motion.span
        style={{ x: trailB.x, y: trailB.y }}
        animate={{ opacity: active ? 0.35 : 0 }}
        transition={{ duration: 0.32 }}
        className="absolute -ml-4 -mt-4 h-8 w-8 rounded-full border border-[#d7ba7c]/70"
      />
      <motion.span
        style={{ x: trailA.x, y: trailA.y }}
        animate={{ opacity: active ? 0.95 : 0 }}
        transition={{ duration: 0.24 }}
        className="absolute -ml-1.5 -mt-1.5 h-3 w-3 rounded-full bg-[#d7ba7c] shadow-[0_0_18px_rgba(215,186,124,0.7)]"
      />
    </div>
  );
}

export default function ReviveShowcasePage({ data }: ReviveShowcasePageProps) {
  const pageRef = useRef<HTMLElement | null>(null);
  const expertiseSectionRef = useRef<HTMLElement | null>(null);
  const expertiseMediaRef = useRef<HTMLDivElement | null>(null);
  const journeySectionRef = useRef<HTMLElement | null>(null);
  const journeyCardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const expertiseHoverDelayRef = useRef<number | null>(null);
  const expertise = data.expertiseItems || [];
  const timeline = data.timelineItems || [];
  const projects = data.projectItems || [];
  const featuredProject = projects.find((item) => item.featured) || projects[0];
  const otherProjects = projects.filter((item) => item !== featuredProject);
  const firstRowProject = otherProjects[0];
  const secondRowProjects = otherProjects.slice(1);
  const boardMembers = data.boardMembers || [];
  const teamMembers = data.teamMembers || [];
  const trustedBy = data.trustedBy || [];
  const mediaItems = data.mediaItems || [];
  const [scrollExpertiseIndex, setScrollExpertiseIndex] = useState<number | null>(null);
  const [hoverExpertiseIndex, setHoverExpertiseIndex] = useState<number | null>(null);
  const [activeJourneyIndex, setActiveJourneyIndex] = useState<number | null>(null);

  const activeExpertiseVisualIndex = useMemo(() => {
    if (!expertise.length) {
      return null;
    }
    if (hoverExpertiseIndex !== null) {
      return hoverExpertiseIndex;
    }
    return scrollExpertiseIndex;
  }, [expertise.length, hoverExpertiseIndex, scrollExpertiseIndex]);

  const displayedExpertiseIndex = useMemo(() => {
    if (!expertise.length) {
      return null;
    }
    if (activeExpertiseVisualIndex !== null) {
      return activeExpertiseVisualIndex;
    }
    return 0;
  }, [activeExpertiseVisualIndex, expertise.length]);

  const expertisePreview = useMemo<ReviveExpertiseItem | undefined>(() => {
    if (!expertise.length) {
      return undefined;
    }
    if (displayedExpertiseIndex === null) {
      return expertise[0];
    }
    return expertise[displayedExpertiseIndex] || expertise[0];
  }, [displayedExpertiseIndex, expertise]);

  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ['start start', 'end end'],
  });
  const { scrollYProgress: journeyScrollProgress } = useScroll({
    target: journeySectionRef,
    offset: ['start 72%', 'end 36%'],
  });
  const heroAuraY = useSpring(useTransform(scrollYProgress, [0, 0.4], [0, 170]), {
    stiffness: 120,
    damping: 30,
    mass: 0.25,
  });
  const heroGridY = useSpring(useTransform(scrollYProgress, [0, 0.4], [0, 110]), {
    stiffness: 120,
    damping: 34,
    mass: 0.3,
  });
  const heroContentY = useSpring(useTransform(scrollYProgress, [0, 0.35], [0, -64]), {
    stiffness: 130,
    damping: 35,
    mass: 0.26,
  });
  const heroImageY = useSpring(useTransform(scrollYProgress, [0, 0.45], [0, 95]), {
    stiffness: 110,
    damping: 32,
    mass: 0.3,
  });
  const heroContentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const expertiseMediaY = useSpring(useTransform(scrollYProgress, [0.1, 0.9], [0, -90]), {
    stiffness: 120,
    damping: 35,
    mass: 0.28,
  });
  const journeyLineScaleY = useSpring(useTransform(journeyScrollProgress, [0, 1], [0, 1]), {
    stiffness: 180,
    damping: 30,
    mass: 0.28,
  });

  useEffect(() => {
    if (!expertise.length) {
      setScrollExpertiseIndex(null);
      return;
    }
    setScrollExpertiseIndex(null);
  }, [expertise.length]);

  useEffect(() => {
    if (!expertise.length) {
      return;
    }

    let frameId: number | null = null;

    const updateExpertiseFromMediaViewport = () => {
      const mediaFrame = expertiseMediaRef.current;
      if (!mediaFrame) {
        return;
      }

      const rect = mediaFrame.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const frameHeight = rect.height;

      if (rect.bottom <= 0 || rect.top >= viewportHeight) {
        setScrollExpertiseIndex((previous) => (previous === null ? previous : null));
        return;
      }

      const fullVisibleStartTop = Math.max(0, viewportHeight - frameHeight);
      const fullVisibleEndTop = 0;
      const triggerPadding = 200;

      let normalizedProgress: number | null = null;

      if (frameHeight < viewportHeight) {
        const triggerStartTop = fullVisibleStartTop + triggerPadding;
        const triggerEndTop = fullVisibleEndTop - triggerPadding;
        const triggerRange = triggerStartTop - triggerEndTop;

        if (triggerRange > 0) {
          if (rect.top > triggerStartTop || rect.top < triggerEndTop) {
            setScrollExpertiseIndex((previous) => (previous === null ? previous : null));
            return;
          }
          normalizedProgress = (triggerStartTop - rect.top) / triggerRange;
        }
      } else {
        const fallbackStartTop = viewportHeight * 0.78 + triggerPadding;
        const fallbackEndTop = -frameHeight * 0.08 - triggerPadding;
        if (rect.top > fallbackStartTop || rect.top < fallbackEndTop) {
          setScrollExpertiseIndex((previous) => (previous === null ? previous : null));
          return;
        }
        const denominator = Math.max(1, fallbackStartTop - fallbackEndTop);
        normalizedProgress = (fallbackStartTop - rect.top) / denominator;
      }

      if (normalizedProgress === null) {
        return;
      }

      const clampedProgress = Math.max(0, Math.min(0.9999, normalizedProgress));
      const segmentSize = 1 / expertise.length;
      const nextIndex = Math.min(expertise.length - 1, Math.floor(clampedProgress / segmentSize));
      setScrollExpertiseIndex((previous) => (previous === nextIndex ? previous : nextIndex));
    };

    const requestUpdate = () => {
      if (frameId !== null) {
        return;
      }
      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        updateExpertiseFromMediaViewport();
      });
    };

    requestUpdate();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, [expertise.length]);

  useEffect(() => {
    return () => {
      if (expertiseHoverDelayRef.current !== null) {
        window.clearTimeout(expertiseHoverDelayRef.current);
      }
    };
  }, []);

  const handleExpertiseMouseEnter = (index: number) => {
    if (expertiseHoverDelayRef.current !== null) {
      window.clearTimeout(expertiseHoverDelayRef.current);
    }
    expertiseHoverDelayRef.current = window.setTimeout(() => {
      setHoverExpertiseIndex(index);
      expertiseHoverDelayRef.current = null;
    }, 300);
  };

  const handleExpertiseMouseLeave = () => {
    if (expertiseHoverDelayRef.current !== null) {
      window.clearTimeout(expertiseHoverDelayRef.current);
      expertiseHoverDelayRef.current = null;
    }
    setHoverExpertiseIndex(null);
  };

  useEffect(() => {
    journeyCardRefs.current = journeyCardRefs.current.slice(0, timeline.length);

    let frameId: number | null = null;
    const updateActiveJourneyCard = () => {
      const section = journeySectionRef.current;
      if (!section) {
        return;
      }

      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const sectionRect = section.getBoundingClientRect();
      const withinJourneySection = sectionRect.top < viewportHeight && sectionRect.bottom > 0;

      if (!withinJourneySection) {
        setActiveJourneyIndex((previous) => (previous === null ? previous : null));
        return;
      }

      let nextActiveIndex = -1;
      journeyCardRefs.current.forEach((card, index) => {
        if (!card) {
          return;
        }
        const rect = card.getBoundingClientRect();
        const fullyVisible = rect.top >= 0 && rect.bottom <= viewportHeight;
        if (fullyVisible) {
          nextActiveIndex = index;
        }
      });

      if (nextActiveIndex === -1) {
        journeyCardRefs.current.forEach((card, index) => {
          if (!card) {
            return;
          }
          const rect = card.getBoundingClientRect();
          const partiallyVisible = rect.top < viewportHeight && rect.bottom > 0;
          if (partiallyVisible) {
            nextActiveIndex = index;
          }
        });
      }

      const normalizedActiveIndex = nextActiveIndex >= 0 ? nextActiveIndex : null;
      setActiveJourneyIndex((previous) => (previous === normalizedActiveIndex ? previous : normalizedActiveIndex));
    };

    const requestUpdate = () => {
      if (frameId !== null) {
        return;
      }
      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        updateActiveJourneyCard();
      });
    };

    requestUpdate();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, [timeline.length]);

  return (
    <main ref={pageRef} className="bg-[#0b1722] text-white">
      <CursorTrail />
      <section className="relative flex min-h-[80vh] items-center overflow-hidden px-4 py-16 lg:px-8">
        {data.heroImageUrl && (
          <motion.img
            style={{ y: heroImageY }}
            src={data.heroImageUrl}
            alt={data.heroImageAlt || data.heroTitle || 'Revive hero background'}
            className="pointer-events-none absolute inset-0 h-[120%] w-full object-cover opacity-35"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,25,0.48),rgba(8,17,25,0.8))]" />
        <motion.div
          style={{ y: heroAuraY }}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(190,149,74,0.2),transparent_38%),radial-gradient(circle_at_85%_40%,rgba(28,78,109,0.32),transparent_42%)]"
        />
        <motion.div
          style={{ y: heroGridY }}
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(155deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(-155deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:34px_34px]"
        />
        <motion.div style={{ y: heroContentY, opacity: heroContentOpacity }} className="relative mx-auto w-full max-w-[1360px]">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-xs uppercase tracking-[0.28em] text-[#d7ba7c]">
            {data.heroBadge || '* Al Rawaf Contracting - Est. 1996'}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-display mt-6 max-w-5xl text-4xl font-extrabold uppercase leading-[0.95] lg:text-7xl"
          >
            {data.heroTitle}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="mt-6 max-w-3xl text-base leading-relaxed text-white/78 lg:text-lg">
            {data.heroSubtitle}
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="mt-4 max-w-3xl text-sm leading-relaxed text-white/62 lg:text-base">
            {data.heroTagline}
          </motion.p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#revive-projects" className="revive-cta revive-focus-ring inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#07121b]">
              Explore Projects
            </a>
            <a href="#revive-contact" className="revive-ghost-cta revive-focus-ring inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em]">
              Get In Touch
            </a>
          </div>
        </motion.div>
      </section>

      <section ref={expertiseSectionRef} className="relative px-4 py-20 lg:px-8">
        <div className="revive-section-cut pointer-events-none absolute inset-x-0 top-0 h-16" />
        <div className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              className="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#d7ba7c]"
            >
              * Our Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="font-display mt-5 text-4xl font-extrabold uppercase leading-[1] lg:text-6xl"
            >
              OUR EXPERTISE
            </motion.h2>
            {expertise.length > 0 && (
              <div className="mt-8 grid gap-2" style={{ gridTemplateColumns: `repeat(${expertise.length}, minmax(0, 1fr))` }}>
                {expertise.map((_, index) => (
                  <span
                    key={`expertise-segment-${index}`}
                    className={`revive-expertise-segment h-[3px] rounded-full ${
                      activeExpertiseVisualIndex === index ? 'revive-expertise-segment-active' : ''
                    }`}
                  />
                ))}
              </div>
            )}
            <div className="mt-10">
              {expertise.map((item, index) => (
                <motion.div
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 10, transition: { duration: 0.3, delay: 0, ease: [0.22, 1, 0.36, 1] } }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
                  className={`group revive-hover-row revive-expertise-card cursor-pointer border-b border-white/15 py-6 ${
                    activeExpertiseVisualIndex === index ? 'revive-expertise-active' : ''
                  }`}
                  onMouseEnter={() => handleExpertiseMouseEnter(index)}
                  onMouseLeave={handleExpertiseMouseLeave}
                >
                  <div className="flex items-start gap-4">
                    <span className="revive-expertise-index font-display text-4xl font-extrabold text-white/20">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="revive-expertise-title font-display text-xl font-bold text-white lg:text-2xl">{item.title}</h3>
                      <p className="revive-expertise-text mt-2 text-sm leading-relaxed text-[#d7ba7c]">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative lg:col-span-6 lg:self-stretch">
            <div ref={expertiseMediaRef} className="revive-diagonal-frame relative h-full min-h-[360px] overflow-hidden border border-white/15 lg:min-h-0">
              <motion.div style={{ y: expertiseMediaY }} className="absolute inset-0">
                <AnimatePresence mode="sync" initial={false}>
                  {expertisePreview?.imageUrl && (
                    <motion.img
                      key={`expertise-image-${expertisePreview.imageUrl}`}
                      src={expertisePreview.imageUrl}
                      alt={expertisePreview.title || 'Expertise preview'}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                </AnimatePresence>
                <AnimatePresence mode="sync" initial={false}>
                  {expertisePreview?.videoUrl && (
                    <motion.video
                      key={`expertise-video-${expertisePreview.videoUrl}`}
                      src={expertisePreview.videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.85 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                </AnimatePresence>
              </motion.div>
              <div className="revive-diagonal-mask absolute inset-0" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,25,0.25),rgba(8,17,25,0.82))]" />
            </div>
          </div>
        </div>
      </section>

      <section ref={journeySectionRef} className="relative bg-[#09131d] px-4 py-20 lg:px-8">
        <div className="revive-section-cut pointer-events-none absolute inset-x-0 top-0 h-20 opacity-60" />
        <div className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              className="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#d7ba7c]"
            >
              * Our Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="font-display mt-5 text-4xl font-extrabold uppercase leading-[1] lg:text-6xl"
            >
              28 YEARS OF BUILDING
            </motion.h2>
          </div>
          <div className="relative lg:col-span-8">
            <div className="absolute bottom-0 left-4 top-0 w-px overflow-hidden bg-white/15">
              <motion.div style={{ scaleY: journeyLineScaleY }} className="revive-journey-line-progress h-full w-full origin-top" />
            </div>
            <div className="space-y-10 pl-14">
              {timeline.map((item, index) => {
                const isJourneyCardActive = activeJourneyIndex === index;
                return (
                <motion.div
                  key={`${item.year}-${index}`}
                  ref={(node) => {
                    journeyCardRefs.current[index] = node;
                  }}
                  initial={{ opacity: 0, x: -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className={`group revive-journey-card relative overflow-hidden rounded-2xl border border-transparent px-4 py-4 transition-transform duration-500 hover:translate-x-2 ${
                    isJourneyCardActive ? 'revive-journey-active' : ''
                  }`}
                >
                  <div className="revive-journey-aura pointer-events-none absolute inset-0" />
                  <div className="revive-journey-dot absolute -left-[46px] top-7 h-3 w-3 rounded-full bg-[linear-gradient(90deg,#d7ba7c,#b28d49)]" />
                  <span className="revive-journey-year font-display text-5xl font-extrabold text-white/10 lg:text-7xl">{item.year}</span>
                  <h3 className="revive-journey-title font-display mt-1 text-2xl font-bold uppercase">{item.title}</h3>
                  <p className="revive-journey-text mt-2 max-w-xl text-sm leading-relaxed text-white/70">{item.text}</p>
                </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="revive-projects" className="relative px-4 py-20 lg:px-8">
        <div className="revive-section-cut pointer-events-none absolute inset-x-0 top-0 h-20 opacity-40" />
        <div className="mx-auto max-w-[1360px]">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                className="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#d7ba7c]"
              >
                * Portfolio
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="font-display mt-5 text-4xl font-extrabold uppercase leading-[1] lg:text-6xl"
              >
                FEATURED PROJECTS
              </motion.h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/70">
              From mega infrastructure to urban development - delivering excellence across the Kingdom.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {featuredProject && <ProjectCard item={featuredProject} index={0} featured />}
            {firstRowProject && <ProjectCard key={`${firstRowProject.title}-1`} item={firstRowProject} index={1} />}
          </div>
          {secondRowProjects.length > 0 && (
            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              {secondRowProjects.map((item, index) => (
                <ProjectCard key={`${item.title}-${index + 2}`} item={item} index={index + 2} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="relative bg-[#09131d] px-4 py-20 lg:px-8">
        <div className="revive-section-cut pointer-events-none absolute inset-x-0 top-0 h-20 opacity-60" />
        <div className="mx-auto max-w-[1360px]">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                className="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#d7ba7c]"
              >
                * Leadership
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="font-display mt-5 text-4xl font-extrabold uppercase leading-[1] lg:text-6xl"
              >
                {data.leadershipHeadline || 'OUR TEAM'}
              </motion.h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/70">{data.leadershipDescription}</p>
          </div>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">{boardMembers.map((member, index) => <TeamCard key={`${member.name}-${index}`} member={member} index={index} />)}</div>
          <div className="my-16 h-px bg-white/20" />
          <h3 className="font-display mb-8 text-2xl font-bold uppercase">The Company&apos;s Working Team</h3>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">{teamMembers.map((member, index) => <TeamCard key={`${member.name}-${index}`} member={member} index={index + boardMembers.length} />)}</div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-white/15 py-12">
        <div className="mx-auto max-w-[1360px] px-4 text-center">
          <span className="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#d7ba7c]">* Trusted By</span>
        </div>
        <div className="mt-8 space-y-4">
          <div className="revive-marquee-track">
            {[...trustedBy, ...trustedBy].map((item, index) => (
              <div
                key={`trusted-a-${index}`}
                className="revive-logo-chip inline-flex min-w-[220px] items-center justify-center border border-white/15 px-6 py-3 text-xs uppercase tracking-[0.1em] text-white/75"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="revive-marquee-track revive-marquee-track-reverse">
            {[...trustedBy.slice().reverse(), ...trustedBy.slice().reverse()].map((item, index) => (
              <div
                key={`trusted-b-${index}`}
                className="revive-logo-chip inline-flex min-w-[220px] items-center justify-center border border-white/15 px-6 py-3 text-xs uppercase tracking-[0.1em] text-white/75"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-20 lg:px-8">
        <div className="revive-section-cut pointer-events-none absolute inset-x-0 top-0 h-20 opacity-40" />
        <div className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              className="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#d7ba7c]"
            >
              * Latest News
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="font-display mt-5 text-4xl font-extrabold uppercase leading-[1] lg:text-6xl"
            >
              MEDIA CENTER
            </motion.h2>
          </div>
          <div className="lg:col-span-8">
            {mediaItems.map((item, index) => (
              <motion.article
                key={`${item.title}-${index}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ x: 10, transition: { duration: 0.3, delay: 0, ease: [0.22, 1, 0.36, 1] } }}
                transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group revive-hover-row relative border-b border-white/15 py-6"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="font-display mt-2 text-xl font-bold lg:text-2xl">{item.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#d7ba7c]">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="revive-contact" className="relative bg-[#09131d] px-4 py-20 lg:px-8">
        <div className="revive-section-cut pointer-events-none absolute inset-x-0 top-0 h-20 opacity-60" />
        <div className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              className="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#d7ba7c]"
            >
              * Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="font-display mt-5 text-4xl font-extrabold uppercase leading-[1] lg:text-6xl"
            >
              {data.contactTitle || "LET'S TALK"}
            </motion.h2>
            <div className="mt-8 space-y-4 text-sm text-white/80">
              <p className="whitespace-pre-line">{data.contactAddress}</p>
              <p>{data.contactPhone}</p>
              <p>{data.contactEmail}</p>
            </div>
          </div>
          <div className="relative lg:col-span-7">
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden revive-diagonal-frame">
              <div className="revive-contact-glow absolute inset-0 bg-[radial-gradient(circle_at_50%_78%,rgba(215,186,124,0.22),rgba(215,186,124,0)_68%)]" />
              <div className="revive-contact-glow-secondary absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(215,186,124,0.15),rgba(215,186,124,0)_72%)]" />
            </div>
            <form className="revive-diagonal-frame relative z-10 space-y-5 border border-white/15 bg-white/5 p-6 lg:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <input className="revive-field border-b border-white/20 bg-transparent px-1 py-3 text-sm outline-none placeholder:text-white/45" placeholder="Your full name" />
                <input
                  className="revive-field border-b border-white/20 bg-transparent px-1 py-3 text-sm outline-none placeholder:text-white/45"
                  placeholder="your@email.com"
                  type="email"
                />
              </div>
              <input className="revive-field w-full border-b border-white/20 bg-transparent px-1 py-3 text-sm outline-none placeholder:text-white/45" placeholder="+966 ..." />
              <textarea
                rows={4}
                className="revive-field w-full resize-none border-b border-white/20 bg-transparent px-1 py-3 text-sm outline-none placeholder:text-white/45"
                placeholder="Tell us about your project..."
              />
              <div className="relative inline-flex w-fit">
                <span
                  aria-hidden
                  className="revive-send-underglow pointer-events-none absolute -bottom-2 left-1/2 h-5 w-[76%] -translate-x-1/2 rounded-full bg-[#d7ba7c]/45 blur-md"
                />
                <button
                  type="button"
                  className="revive-cta revive-focus-ring relative z-10 inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#07121b]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/15 px-4 py-12 text-center text-xs uppercase tracking-[0.18em] text-white/55 lg:px-8">
        <p>{data.footerTagline || "Part of Sakef Holding - building Saudi Arabia's future through infrastructure excellence since 1996."}</p>
        <p className="mt-3">KINGDOM OF SAUDI ARABIA</p>
      </footer>
    </main>
  );
}
