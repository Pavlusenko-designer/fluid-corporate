export interface ReviveExpertiseItem {
  title?: string;
  description?: string;
  imageUrl?: string;
  videoUrl?: string;
}

export interface ReviveTimelineItem {
  year?: string;
  title?: string;
  text?: string;
}

export interface ReviveProjectItem {
  title?: string;
  location?: string;
  area?: string;
  imageUrl?: string;
  videoUrl?: string;
  featured?: boolean;
}

export interface ReviveMemberItem {
  name?: string;
  role?: string;
  imageUrl?: string;
  videoUrl?: string;
}

export interface ReviveMediaItem {
  title?: string;
  description?: string;
}

export interface RevivePageData {
  title?: string;
  heroBadge?: string;
  heroImageUrl?: string;
  heroImageAlt?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroTagline?: string;
  expertiseItems?: ReviveExpertiseItem[];
  timelineItems?: ReviveTimelineItem[];
  projectItems?: ReviveProjectItem[];
  leadershipHeadline?: string;
  leadershipDescription?: string;
  boardMembers?: ReviveMemberItem[];
  teamMembers?: ReviveMemberItem[];
  trustedBy?: string[];
  mediaItems?: ReviveMediaItem[];
  contactTitle?: string;
  contactAddress?: string;
  contactPhone?: string;
  contactEmail?: string;
  footerTagline?: string;
}
