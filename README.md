# Fluid Corporate

A production-ready, code-first corporate website monorepo built with Next.js, Sanity CMS, and Vercel.

## Features

- 🏗️ **Monorepo with pnpm & Turborepo** - Optimized for scalability and performance
- ⚡ **Next.js 14** - Latest App Router with React Server Components
- 📝 **Sanity Headless CMS** - Structured content with code-first schemas
- 🎨 **Tailwind CSS** - Modern utility-first styling
- 📱 **Fully Responsive** - Mobile-first design approach
- 🔍 **SEO Optimized** - Built-in meta tags and structured data
- 🚀 **Vercel Ready** - Pre-configured for seamless deployment
- ✅ **TypeScript** - Full type safety across the monorepo
- 📦 **Shared UI Package** - Reusable component library
- 🛠️ **Developer Experience** - ESLint, Prettier, dedicated VS Code config

## Tech Stack

| Area | Technology |
| --- | --- |
| **Package Manager** | pnpm |
| **Build System** | Turborepo |
| **Frontend Framework** | Next.js 14 |
| **CMS** | Sanity Studio |
| **Styling** | Tailwind CSS |
| **Language** | TypeScript |
| **Code Quality** | ESLint + Prettier |
| **Hosting** | Vercel |

## Project Structure

```
fluid-corporate/
├── apps/
│   ├── web/               # Marketing site (Next.js 14)
│   └── studio/            # Sanity Studio CMS
├── packages/
│   ├── sanity-lib/        # Sanity utilities (client, queries)
│   ├── sanity-config/     # Sanity schemas and config
│   └── ui/                # Shared UI components
├── .vscode/               # VS Code workspace config
└── turbo.json            # Turborepo configuration
```

## Getting Started

### Prerequisites

- **Node.js** 18+ 
- **pnpm** 9+
- **Docker Desktop** (optional, recommended on Windows for stable local dev)

```bash
npm install -g pnpm@9
```

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fluid-corporate
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure Sanity:
   - Create a Sanity project at https://www.sanity.io
   - Add your project ID and dataset to `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-03-01
   SANITY_API_TOKEN=your_api_token
   ```

### Development

Start all development servers with hot reload:

```bash
pnpm dev
```

This will start:
- **Web App**: http://localhost:3000
- **Sanity Studio**: http://localhost:3001

### Containerized Development (Recommended)

Run both `web` and `studio` in Docker (as separate services):

```bash
pnpm docker:up
```

Or directly:

```bash
docker compose up --build
```

This starts:
- **Web App**: http://localhost:3000
- **Sanity Studio**: http://localhost:3001 (also available at `/studio`)

Service-specific logs:

```bash
pnpm docker:logs:web
pnpm docker:logs:studio
```

Service-specific restart:

```bash
pnpm docker:restart:web
pnpm docker:restart:studio
```

Stop containers:

```bash
pnpm docker:down
```

Clean containers and volumes:

```bash
pnpm docker:clean
```

### Building

Build all apps and packages:

```bash
pnpm build
```

### Linting & Formatting

Format code:
```bash
pnpm format
```

Lint code:
```bash
pnpm lint
```

Type checking:
```bash
pnpm type-check
```

## Workspace Structure

### `apps/web`
Main Next.js application. The customer-facing marketing website.
- **Port**: 3000
- **Tech**: Next.js 14, App Router, Tailwind CSS
- **Uses**: `@sanity-lib/*`, `@ui/components`

### `apps/studio`
Sanity CMS Studio for content management.
- **Port**: 3001
- **Tech**: Sanity Studio, Next.js
- **Admin Interface**: Full-featured CMS editorial experience

### `packages/sanity-lib`
Reusable Sanity utilities
- `client.ts` - Configured Sanity client
- `image.ts` - Image URL builder
- `groq/` - GROQ query helpers

### `packages/sanity-config`
Centralized Sanity configuration
- `config.ts` - Sanity defineConfig
- `schemas/` - Content type definitions

### `packages/ui`
Shared React component library
- Headless components (Button, Card)
- Tailwind-ready styling
- TypeScript types included

## Creating Content

### Adding Pages

1. Go to Sanity Studio (http://localhost:3001)
2. Create a new Page document
3. Fill in title, slug, content
4. Publish

### Querying Content

Use the provided GROQ queries or create your own:

```typescript
import { client, urlFor } from '@sanity-lib/client';

const page = await client.fetch(`
  *[_type == "page" && slug.current == $slug][0]
`, { slug: 'about' });
```

## Deployment

### Deploy to Vercel

1. Push to GitHub
2. Import project in Vercel dashboard
3. Add environment variables
4. Deploy!

Environment variables needed:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `SANITY_API_TOKEN`

### Custom Domain

1. Add domain in Vercel project settings
2. Update DNS records (instructions provided by Vercel)

## Extending the Project

### Adding a New UI Component

1. Create component in `packages/ui/components/`
2. Export in `packages/ui/components/index.ts`
3. Use in any app: `import { YourComponent } from '@ui/components'`

### Adding a New Sanity Document Type

1. Define schema in `packages/sanity-config/schemas/`
2. Export in `packages/sanity-config/schemas/index.ts`
3. Import in `packages/sanity-config/config.ts`

### Adding a New App

1. Create folder in `apps/new-app`
2. Add to `pnpm-workspace.yaml`
3. Configure in `turbo.json` for caching

## Performance Optimization

- ✅ Image optimization with Next.js Image
- ✅ Turbo caching for faster builds
- ✅ API routes for server-side logic
- ✅ ISR (Incremental Static Regeneration) ready
- ✅ Bundle analysis available

## Troubleshooting

### "Project ID is required"
Make sure `NEXT_PUBLIC_SANITY_PROJECT_ID` is set in `.env.local`

### Sanity Studio shows blank page
- Clear browser cache
- Restart dev server
- Verify environment variables are loaded

### Build fails with TypeScript errors
Run `pnpm type-check` to see detailed errors and fix them

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Turborepo](https://turbo.build)
- [pnpm Workspaces](https://pnpm.io/workspaces)

## License

ISC

## Support

For issues, questions, or contributions, please open an issue on GitHub.
