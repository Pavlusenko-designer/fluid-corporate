import { client } from '@sanity-lib/client';
import { revivePageQuery } from '@sanity-lib/groq';
import ReviveShowcasePage from '../../components/ReviveShowcasePage';
import type { RevivePageData } from '../../components/revive-types';

export const revalidate = 30;

const fallbackReviveData: RevivePageData = {
  title: 'Al Rawaf Revive Showcase',
  heroBadge: '* Al Rawaf Contracting - Est. 1996',
  heroImageUrl: '/assets/hero-construction-DRSryszf.jpg',
  heroImageAlt: 'Al Rawaf infrastructure hero background',
  heroTitle: 'Infrastructure, construction, water & energy solutions across Saudi Arabia - empowering Vision 2030.',
  heroSubtitle: 'Transforming the contracting sector from randomness to professional institutional excellence.',
  heroTagline: 'Building distinguished long-term relationships with partners based on ethical and professional standards.',
  expertiseItems: [
    {
      title: 'Infrastructure & Urban Development',
      description:
        'Expert design, planning, and construction services creating vibrant environments and integrated communities throughout Saudi Arabia.',
      imageUrl: '/assets/project-urban-BJxxTBz-.jpg',
      videoUrl: '/assets/project-urban-video-Cc_xKSp9.mp4',
    },
    {
      title: 'Water & Energy Solutions',
      description:
        'Implementing the highest environmental sustainability standards using the latest technologies to reduce energy consumption and ensure continuous water supply.',
      imageUrl: '/assets/project-water-DStk6OMj.jpg',
      videoUrl: '/assets/project-water-video-a7BMk3mI.mp4',
    },
    {
      title: 'Roads & Maintenance',
      description:
        'Meeting urban and population expansion needs by enhancing mobility and improving the urban landscape of cities across the Kingdom.',
      imageUrl: '/assets/hero-roads-D6fJ6ITH.jpg',
      videoUrl: '/assets/project-roads-video--8hRsuCJ.mp4',
    },
    {
      title: 'Strategic Infrastructure Delivery',
      description:
        'Advanced infrastructure characterized by efficiency and reliability, designed to support sustainable development and rapid changes.',
      imageUrl: '/assets/hero-construction-DRSryszf.jpg',
      videoUrl: '/assets/service-maintenance-video-CJbdvrFl.mp4',
    },
  ],
  timelineItems: [
    { year: '1996', title: 'Foundation', text: 'Commercial register issued. Road and network works begin.' },
    { year: '2006', title: 'Expansion', text: 'Infrastructure works start. Major projects launched across the Kingdom.' },
    {
      year: '2017',
      title: 'Excellence',
      text: 'First classification in all fields. ISO certificates obtained. Design-build model adopted.',
    },
    {
      year: '2024',
      title: 'Vision 2030',
      text: 'Environmental sustainability integrated. PIF program projects underway. Regional expansion.',
    },
  ],
  projectItems: [
    {
      title: 'ALASSALAH',
      location: 'Riyadh',
      area: '3.8M m2',
      imageUrl: '/assets/hero-construction-DRSryszf.jpg',
      videoUrl: '/assets/project-construction-video-C4RroqNJ.mp4',
      featured: true,
    },
    {
      title: 'South Ring Water Transmission',
      location: 'Riyadh City',
      area: 'Major Pipeline',
      imageUrl: '/assets/project-water-DStk6OMj.jpg',
      videoUrl: '/assets/project-water-video-a7BMk3mI.mp4',
    },
    {
      title: 'Green Riyadh',
      location: 'Riyadh',
      area: 'Urban Greening',
      imageUrl: '/assets/project-urban-BJxxTBz-.jpg',
      videoUrl: '/assets/project-urban-video-Cc_xKSp9.mp4',
    },
    {
      title: 'Sadayem Suburb',
      location: 'Jeddah',
      area: '3.8M m2',
      imageUrl: '/assets/hero-roads-D6fJ6ITH.jpg',
      videoUrl: '/assets/project-roads-video--8hRsuCJ.mp4',
    },
  ],
  leadershipHeadline: 'OUR TEAM',
  leadershipDescription: "Visionary leaders and experienced professionals driving Al Rawaf's mission to build the Kingdom's future.",
  boardMembers: [
    {
      name: 'Abdullah Suleiman Al-Rawaf',
      role: 'Chairman of the Board',
      imageUrl: '/assets/team-abdullah-suleiman-B7SIJmNT.webp',
      videoUrl: '/assets/team-abdullah-suleiman-video-BcR5gQsh.mp4',
    },
    {
      name: 'Ghassan Abdullah Al-Rawaf',
      role: 'Secretary of the Executive Council',
      imageUrl: '/assets/team-ghassan-D1D-969J.webp',
      videoUrl: '/assets/team-ghassan-video-Bovx3ciB.mp4',
    },
    {
      name: 'Khalid Ibrahim Al-Rawaf',
      role: 'Chief Executive Officer (CEO)',
      imageUrl: '/assets/team-khalid-pusMLanO.webp',
      videoUrl: '/assets/team-khalid-video-OM4_8idI.mp4',
    },
    {
      name: 'Abdullah Mansour Al-Rawaf',
      role: 'Deputy Chief Executive Officer',
      imageUrl: '/assets/team-abdullah-mansour-BRW5wvIV.webp',
      videoUrl: '/assets/team-abdullah-mansour-video-CjLEZ6xA.mp4',
    },
  ],
  teamMembers: [
    {
      name: 'Eng. Mohamed El Adl',
      role: 'Governance & Digital Transformation Director',
      imageUrl: '/assets/team-mohamed-CIizgy7i.webp',
      videoUrl: '/assets/team-mohamed-video-Dm42fF1h.mp4',
    },
    {
      name: 'Eng. Mustafa Zidan',
      role: 'Western Sector Projects Manager',
      imageUrl: '/assets/team-mustafa-BcAqNHdp.webp',
      videoUrl: '/assets/team-mustafa-video-6SlJBsjF.mp4',
    },
    {
      name: 'Eng. Saleh Ahmed Al-Gharras',
      role: 'Head of North Sector & Business Development',
      imageUrl: '/assets/team-saleh-D7lQMC3Y.webp',
      videoUrl: '/assets/team-saleh-video-CJql7_Sa.mp4',
    },
    {
      name: 'Muhammed Kanjari',
      role: 'Director of Organizational Development',
      imageUrl: '/assets/team-muhammed-CrISWQvr.webp',
      videoUrl: '/assets/team-muhammed-video-D2slKIWi.mp4',
    },
  ],
  trustedBy: [
    'Ministry of Environment, Water & Agriculture',
    'Ministry of Education',
    'Ministry of Defense',
    'Ministry of Transport',
    'Ministry of National Guard',
    'The Green Riyadh',
    'Saudi Water Partnerships Company',
    'Royal Commission for Riyadh',
    'National Housing Company',
    'Riyadh Municipality',
    'Qassim University',
    'National Water Company',
    'MODON',
    'NEOM',
  ],
  mediaItems: [
    {
      title: 'Framework Agreement with Roshn Group',
      description: 'Implementing high-quality projects that contribute to infrastructure development.',
    },
    {
      title: 'Strategic Alliance for Khuzam Logistics City',
      description: 'Enhancing supply chain efficiency in the real estate sector and supporting future projects.',
    },
    {
      title: 'MODON Outstanding Partners Award',
      description: 'Outstanding Partner in Infrastructure Development within the MODON Excellence Award.',
    },
    {
      title: 'Construction Week Saudi Sponsorship',
      description: 'An exceptional sponsorship for the makers of excellence and creativity in the Kingdom.',
    },
  ],
  contactTitle: "LET'S TALK",
  contactAddress: 'Al Rawaf Contracting\nQassim, Buraidah, Saudi Arabia',
  contactPhone: '920 007 201',
  contactEmail: 'business.development@alrawaf.com.sa',
  footerTagline: "Part of Sakef Holding - building Saudi Arabia's future through infrastructure excellence since 1996.",
};

async function getRevivePageData(): Promise<RevivePageData> {
  try {
    const data = await client.fetch<RevivePageData | null>(`*[_type == "revivePage"][0]${revivePageQuery}`, {}, { next: { revalidate } });
    return data || fallbackReviveData;
  } catch (error) {
    console.error('Failed to fetch revive page from Sanity:', error);
    return fallbackReviveData;
  }
}

export default async function RevivePage() {
  const data = await getRevivePageData();
  return <ReviveShowcasePage data={data} />;
}
