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
