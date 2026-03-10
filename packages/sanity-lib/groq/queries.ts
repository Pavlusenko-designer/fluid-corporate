// GROQ query helpers for common content fetches
export const pageQuery = `
  {
    "title": title,
    "slug": slug.current,
    "description": description,
    "content": content,
    "seo": {
      "title": seo.title,
      "description": seo.description,
      "image": seo.image
    }
  }
`;

export const settingsQuery = `
  {
    "title": title,
    "description": description,
    "logo": logo,
    "logoAlt": logoAlt
  }
`;

export const homepageQuery = `
  {
    "title": title,
    "hero": {
      "headline": hero.headline,
      "subheadline": hero.subheadline,
      "backgroundImage": hero.backgroundImage,
      "backgroundVideo": hero.backgroundVideo.asset->url,
      "ctaText": hero.ctaText,
      "ctaLink": hero.ctaLink,
      "scrollIndicator": hero.scrollIndicator
    },
    "services": {
      "title": services.title,
      "subtitle": services.subtitle,
      "services": services.services[]{
        "title": title,
        "description": description,
        "icon": icon,
        "image": image,
        "link": link
      }
    },
    "about": {
      "title": about.title,
      "content": pt::text(about.content),
      "image": about.image,
      "stats": about.stats[]{
        "label": label,
        "value": coalesce(value, number),
        "suffix": suffix
      }
    },
    "projects": {
      "title": projects.title,
      "subtitle": projects.subtitle,
      "projects": projects.projects[]{
        "title": title,
        "description": description,
        "image": image,
        "category": category,
        "link": link,
        "featured": featured
      }
    },
    "testimonials": {
      "title": testimonials.title,
      "testimonials": testimonials.testimonials[]{
        "quote": quote,
        "author": author,
        "position": position,
        "company": company,
        "avatar": avatar
      }
    },
    "contact": {
      "title": contact.title,
      "subtitle": contact.subtitle,
      "email": contact.email,
      "phone": contact.phone,
      "address": contact.address,
      "socialLinks": contact.socialLinks[]{
        "platform": platform,
        "url": url,
        "icon": icon
      }
    }
  }
`;

export const revivePageQuery = `
  {
    "title": title,
    "heroBadge": heroBadge,
    "heroTitle": coalesce(pt::text(heroTitleRich), heroTitle),
    "heroSubtitle": coalesce(pt::text(heroSubtitleRich), heroSubtitle),
    "heroTagline": coalesce(pt::text(heroTaglineRich), heroTagline),
    "expertiseItems": expertiseItems[]{
      "title": title,
      "description": coalesce(pt::text(descriptionRich), description),
      "imageUrl": imageUrl,
      "videoUrl": videoUrl
    },
    "timelineItems": timelineItems[]{
      "year": year,
      "title": title,
      "text": coalesce(pt::text(textRich), text)
    },
    "projectItems": projectItems[]{
      "title": title,
      "location": location,
      "area": area,
      "imageUrl": imageUrl,
      "videoUrl": videoUrl,
      "featured": featured
    },
    "leadershipHeadline": leadershipHeadline,
    "leadershipDescription": coalesce(pt::text(leadershipDescriptionRich), leadershipDescription),
    "boardMembers": boardMembers[]{
      "name": name,
      "role": role,
      "imageUrl": imageUrl,
      "videoUrl": videoUrl
    },
    "teamMembers": teamMembers[]{
      "name": name,
      "role": role,
      "imageUrl": imageUrl,
      "videoUrl": videoUrl
    },
    "trustedBy": trustedBy,
    "mediaItems": mediaItems[]{
      "title": title,
      "description": coalesce(pt::text(descriptionRich), description)
    },
    "contactTitle": contactTitle,
    "contactAddress": coalesce(pt::text(contactAddressRich), contactAddress),
    "contactPhone": contactPhone,
    "contactEmail": contactEmail,
    "footerTagline": coalesce(pt::text(footerTaglineRich), footerTagline)
  }
`;
