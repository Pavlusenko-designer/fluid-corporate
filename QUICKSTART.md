# Quick Start Guide - Fluid Corporate

## 🚀 Get Started in 5 Minutes

### Prerequisites
- Node.js 18+
- pnpm 9+ (installed globally)
- Docker Desktop (optional, recommended on Windows)

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Configure Sanity
1. Create a **free project** at [sanity.io](https://www.sanity.io)
2. Copy `.env.example` to `.env.local`
3. Add your Sanity project details:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-03-01
   SANITY_API_TOKEN=your_token_here
   ```

### 3. Start Development Servers
```bash
pnpm dev
```

This starts:
- **Web**: http://localhost:3000 (your site)
- **CMS**: http://localhost:3001 (content editor)

### Docker Alternative (Recommended for Stable Local Dev)

```bash
pnpm docker:up
```

This starts separate Docker services for `web` and `studio`:
- **Web**: http://localhost:3000
- **CMS**: http://localhost:3001 (also `/studio`)

Useful Docker debug commands:

```bash
pnpm docker:logs:web
pnpm docker:logs:studio
pnpm docker:restart:web
pnpm docker:restart:studio
```

### 4. Create Your First Page
1. Go to http://localhost:3001
2. Click **"Page"** to create a new page document
3. Fill in title, slug, and content
4. Click **"Publish"**
5. Visit http://localhost:3000 to see your site

## 📁 Project Structure

```
apps/
  web/           # Next.js frontend (port 3000)
  studio/        # Sanity CMS editor (port 3001)

packages/
  sanity-lib/    # Utilities: client, queries, image handling
  sanity-config/ # Sanity schemas and configuration
  ui/            # Reusable React components (Button, Card, etc)
```

## 🛠️ Available Commands

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Start all dev servers with hot reload |
| `pnpm build` | Build for production |
| `pnpm lint` | Check code quality |
| `pnpm format` | Auto-format code |
| `pnpm type-check` | Check TypeScript types |
| `pnpm clean` | Remove build artifacts |

## 🎨 Styling

- Uses **Tailwind CSS**
- All components in `packages/ui/`
- Customize brand colors in `apps/web/tailwind.config.js`

## 📦 Adding Packages

### Create a Shared Component
```bash
# Create in packages/ui/components/MyComponent.tsx
# Add to packages/ui/components/index.ts
# Use in apps: import { MyComponent } from '@ui/components'
```

### Add a Sanity Document Type
```bash
# Create in packages/sanity-config/schemas/myType.ts
# Export in packages/sanity-config/schemas/index.ts
# Reference in packages/sanity-config/config.ts
```

## 🌐 Deploy to Vercel

1. Push code to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy!

Each app (`web` and `studio`) can be deployed as separate projects or subdomains.

## 🆘 Troubleshooting

### "Project ID is required" error
- Check that `.env.local` exists and has `NEXT_PUBLIC_SANITY_PROJECT_ID`
- Restart dev server: `pnpm dev`

### Sanity Studio shows blank page
- Clear browser cache
- Restart dev server
- Check browser console for errors

### TypeScript errors
Run `pnpm type-check` to see detailed errors

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Sanity Docs](https://www.sanity.io/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Turborepo Guide](https://turbo.build/repo/docs)

## ✨ Next Steps

1. **Customize content types** - Add your own Sanity schemas
2. **Design your site** - Update `apps/web` with your branding
3. **Create components** - Build reusable UI in `packages/ui`
4. **Deploy** - Push to Vercel
5. **Manage content** - Use Sanity Studio to add pages and content

Happy coding! 🎉
