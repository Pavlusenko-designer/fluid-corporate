export interface HeroContent {
  headline?: string;
  subheadline?: string;
  backgroundImage?: unknown;
  backgroundVideo?: string;
  ctaText?: string;
  ctaLink?: string;
  scrollIndicator?: boolean;
}

export interface ServiceItem {
  title?: string;
  description?: string;
  icon?: string;
  image?: unknown;
  link?: string;
}

export interface ServicesContent {
  title?: string;
  subtitle?: string;
  services?: ServiceItem[];
}

export interface AboutStat {
  label?: string;
  value?: string;
  suffix?: string;
}

export interface AboutContent {
  title?: string;
  content?: string;
  image?: unknown;
  stats?: AboutStat[];
}

export interface ProjectItem {
  title?: string;
  description?: string;
  image?: unknown;
  category?: string;
  link?: string;
  featured?: boolean;
}

export interface ProjectsContent {
  title?: string;
  subtitle?: string;
  projects?: ProjectItem[];
}

export interface TestimonialItem {
  quote?: string;
  author?: string;
  position?: string;
  company?: string;
  avatar?: unknown;
}

export interface TestimonialsContent {
  title?: string;
  testimonials?: TestimonialItem[];
}

export interface SocialLink {
  platform?: string;
  url?: string;
  icon?: string;
}

export interface ContactContent {
  title?: string;
  subtitle?: string;
  email?: string;
  phone?: string;
  address?: string;
  socialLinks?: SocialLink[];
}

export interface HomepageData {
  hero?: HeroContent;
  services?: ServicesContent;
  about?: AboutContent;
  projects?: ProjectsContent;
  testimonials?: TestimonialsContent;
  contact?: ContactContent;
}
