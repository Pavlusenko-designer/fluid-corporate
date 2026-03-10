export const settingsType = {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'logoAlt',
      title: 'Logo Alt Text',
      type: 'string',
    },
  ],
};

export const homepageType = {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'headline',
          title: 'Main Headline',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'subheadline',
          title: 'Subheadline',
          type: 'text',
        },
        {
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: { hotspot: true },
        },
        {
          name: 'backgroundVideo',
          title: 'Background Video (optional)',
          type: 'file',
          options: {
            accept: 'video/*',
          },
        },
        {
          name: 'ctaText',
          title: 'CTA Button Text',
          type: 'string',
        },
        {
          name: 'ctaLink',
          title: 'CTA Button Link',
          type: 'string',
        },
        {
          name: 'scrollIndicator',
          title: 'Show Scroll Indicator',
          type: 'boolean',
          initialValue: true,
        },
      ],
    },
    {
      name: 'services',
      title: 'Services Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'text',
        },
        {
          name: 'services',
          title: 'Services',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Service Title',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'description',
                  title: 'Service Description',
                  type: 'text',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'icon',
                  title: 'Service Icon',
                  type: 'string',
                  description: 'Icon name (e.g., "building", "users", "cog")',
                },
                {
                  name: 'image',
                  title: 'Service Image',
                  type: 'image',
                  options: { hotspot: true },
                },
                {
                  name: 'link',
                  title: 'Service Link',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'about',
      title: 'About Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
        },
        {
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'image',
          title: 'About Image',
          type: 'image',
          options: { hotspot: true },
        },
        {
          name: 'stats',
          title: 'Statistics',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'value',
                  title: 'Value',
                  type: 'string',
                  description: 'Primary stat value (recommended for new entries).',
                },
                {
                  name: 'suffix',
                  title: 'Suffix',
                  type: 'string',
                  description: 'Optional symbol or short unit (e.g., +, %, yrs).',
                },
                {
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'number',
                  title: 'Legacy Number (optional)',
                  type: 'string',
                  description: 'Backward compatibility for previously created entries.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'projects',
      title: 'Projects/Portfolio Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'text',
        },
        {
          name: 'projects',
          title: 'Projects',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Project Title',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'description',
                  title: 'Project Description',
                  type: 'text',
                },
                {
                  name: 'image',
                  title: 'Project Image',
                  type: 'image',
                  options: { hotspot: true },
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'category',
                  title: 'Category',
                  type: 'string',
                },
                {
                  name: 'link',
                  title: 'Project Link',
                  type: 'string',
                },
                {
                  name: 'featured',
                  title: 'Featured Project',
                  type: 'boolean',
                  initialValue: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'testimonials',
      title: 'Testimonials Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
        },
        {
          name: 'testimonials',
          title: 'Testimonials',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'quote',
                  title: 'Quote',
                  type: 'text',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'author',
                  title: 'Author Name',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'position',
                  title: 'Author Position',
                  type: 'string',
                },
                {
                  name: 'company',
                  title: 'Company',
                  type: 'string',
                },
                {
                  name: 'avatar',
                  title: 'Author Avatar',
                  type: 'image',
                  options: { hotspot: true },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'contact',
      title: 'Contact Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'text',
        },
        {
          name: 'email',
          title: 'Contact Email',
          type: 'string',
        },
        {
          name: 'phone',
          title: 'Contact Phone',
          type: 'string',
        },
        {
          name: 'address',
          title: 'Address',
          type: 'text',
        },
        {
          name: 'socialLinks',
          title: 'Social Media Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'platform',
                  title: 'Platform',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'url',
                  title: 'URL',
                  type: 'url',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'icon',
                  title: 'Icon Name',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const pageType = {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'title', title: 'Meta Title', type: 'string' },
        { name: 'description', title: 'Meta Description', type: 'text' },
        { name: 'image', title: 'Meta Image', type: 'image' },
      ],
    },
  ],
};

export const revivePageType = {
  name: 'revivePage',
  title: 'Revive Showcase Page',
  type: 'document',
  initialValue: {
    title: 'Al Rawaf Revive Showcase',
    heroBadge: '* Al Rawaf Contracting - Est. 1996',
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
    leadershipDescription:
      "Visionary leaders and experienced professionals driving Al Rawaf's mission to build the Kingdom's future.",
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
  },
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    { name: 'heroBadge', title: 'Hero Badge', type: 'string' },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      description: 'Optional background image for the revive hero section.',
      options: { hotspot: true },
    },
    { name: 'heroImageAlt', title: 'Hero Image Alt Text', type: 'string' },
    { name: 'heroTitle', title: 'Hero Title', type: 'text' },
    {
      name: 'heroTitleRich',
      title: 'Hero Title (WYSIWYG)',
      type: 'array',
      description: 'Optional rich text version. Used on site when set.',
      of: [{ type: 'block' }],
    },
    { name: 'heroSubtitle', title: 'Hero Subtitle', type: 'text' },
    {
      name: 'heroSubtitleRich',
      title: 'Hero Subtitle (WYSIWYG)',
      type: 'array',
      description: 'Optional rich text version. Used on site when set.',
      of: [{ type: 'block' }],
    },
    { name: 'heroTagline', title: 'Hero Tagline', type: 'text' },
    {
      name: 'heroTaglineRich',
      title: 'Hero Tagline (WYSIWYG)',
      type: 'array',
      description: 'Optional rich text version. Used on site when set.',
      of: [{ type: 'block' }],
    },
    {
      name: 'expertiseItems',
      title: 'Expertise Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            {
              name: 'descriptionRich',
              title: 'Description (WYSIWYG)',
              type: 'array',
              description: 'Optional rich text version. Used on site when set.',
              of: [{ type: 'block' }],
            },
            { name: 'imageUrl', title: 'Image URL', type: 'string' },
            { name: 'videoUrl', title: 'Video URL', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'timelineItems',
      title: 'Timeline Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'year', title: 'Year', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'text', title: 'Text', type: 'text' },
            {
              name: 'textRich',
              title: 'Text (WYSIWYG)',
              type: 'array',
              description: 'Optional rich text version. Used on site when set.',
              of: [{ type: 'block' }],
            },
          ],
        },
      ],
    },
    {
      name: 'projectItems',
      title: 'Project Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'location', title: 'Location', type: 'string' },
            { name: 'area', title: 'Area', type: 'string' },
            { name: 'imageUrl', title: 'Image URL', type: 'string' },
            { name: 'videoUrl', title: 'Video URL', type: 'string' },
            { name: 'featured', title: 'Featured', type: 'boolean', initialValue: false },
          ],
        },
      ],
    },
    { name: 'leadershipHeadline', title: 'Leadership Headline', type: 'string' },
    { name: 'leadershipDescription', title: 'Leadership Description', type: 'text' },
    {
      name: 'leadershipDescriptionRich',
      title: 'Leadership Description (WYSIWYG)',
      type: 'array',
      description: 'Optional rich text version. Used on site when set.',
      of: [{ type: 'block' }],
    },
    {
      name: 'boardMembers',
      title: 'Board Members',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'role', title: 'Role', type: 'string' },
            { name: 'imageUrl', title: 'Image URL', type: 'string' },
            { name: 'videoUrl', title: 'Video URL', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'role', title: 'Role', type: 'string' },
            { name: 'imageUrl', title: 'Image URL', type: 'string' },
            { name: 'videoUrl', title: 'Video URL', type: 'string' },
          ],
        },
      ],
    },
    { name: 'trustedBy', title: 'Trusted By', type: 'array', of: [{ type: 'string' }] },
    {
      name: 'mediaItems',
      title: 'Media Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            {
              name: 'descriptionRich',
              title: 'Description (WYSIWYG)',
              type: 'array',
              description: 'Optional rich text version. Used on site when set.',
              of: [{ type: 'block' }],
            },
          ],
        },
      ],
    },
    { name: 'contactTitle', title: 'Contact Title', type: 'string' },
    { name: 'contactAddress', title: 'Contact Address', type: 'text' },
    {
      name: 'contactAddressRich',
      title: 'Contact Address (WYSIWYG)',
      type: 'array',
      description: 'Optional rich text version. Used on site when set.',
      of: [{ type: 'block' }],
    },
    { name: 'contactPhone', title: 'Contact Phone', type: 'string' },
    { name: 'contactEmail', title: 'Contact Email', type: 'string' },
    { name: 'footerTagline', title: 'Footer Tagline', type: 'text' },
    {
      name: 'footerTaglineRich',
      title: 'Footer Tagline (WYSIWYG)',
      type: 'array',
      description: 'Optional rich text version. Used on site when set.',
      of: [{ type: 'block' }],
    },
  ],
};

export const schemas = [settingsType, homepageType, revivePageType, pageType];
