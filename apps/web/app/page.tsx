import { client } from '@sanity-lib/client';
import { homepageQuery } from '@sanity-lib/groq';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import type { HomepageData } from '../components/homepage-types';

export const revalidate = 30;

async function getHomepageData(): Promise<HomepageData | null> {
  try {
    const data = await client.fetch<HomepageData | null>(
      `*[_type == "homepage"][0]${homepageQuery}`,
      {},
      { next: { revalidate } },
    );

    return data;
  } catch (error) {
    console.error('Failed to fetch homepage data from Sanity:', error);
    return null;
  }
}

export default async function Home() {
  const data = await getHomepageData();

  return (
    <main className="bg-[var(--sand-50)]">
      <HeroSection data={data?.hero || {}} />
      <ServicesSection data={data?.services || {}} />
      <AboutSection data={data?.about || {}} />
      <ProjectsSection data={data?.projects || {}} />
      <TestimonialsSection data={data?.testimonials || {}} />
      <ContactSection data={data?.contact || {}} />
    </main>
  );
}
