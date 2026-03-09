# VS Code Copilot Instructions for Fluid Corporate

## Project Overview
This is a production-ready corporate website monorepo using:
- **pnpm workspaces** for package management
- **Turborepo** for build orchestration  
- **Next.js 14** with App Router for the frontend
- **Sanity CMS** for headless content management
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Vercel** for deployment

## Project Structure
```
apps/
  web/           # Main Next.js marketing website (port 3000)
  studio/        # Sanity CMS Studio (port 3001)
packages/
  sanity-lib/    # Sanity utilities (client, image helpers, GROQ queries)
  sanity-config/ # Sanity schemas and configuration
  ui/            # Shared reusable UI components
```

## Development Workflow

### Starting Development
```bash
pnpm install      # Install all dependencies
pnpm dev          # Start all dev servers (web on 3000, studio on 3001)
```

### Available Commands
- `pnpm dev` - Start all development servers
- `pnpm build` - Build all apps for production
- `pnpm lint` - Run ESLint across the monorepo
- `pnpm format` - Format code with Prettier
- `pnpm type-check` - Check for TypeScript errors
- `pnpm clean` - Clean build artifacts

### Environment Setup
Copy `.env.example` to `.env.local` and update:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` - Usually "production"
- `NEXT_PUBLIC_SANITY_API_VERSION` - API version (default: 2024-03-01)
- `SANITY_API_TOKEN` - API token for server-side operations

## Key Features to Maintain

### TypeScript Everywhere
- Strict mode enabled in all tsconfig.json files
- Path aliases configured: `@web/*`, `@studio/*`, `@sanity-lib/*`, `@ui/*`
- Generate types for Sanity schemas automatically when possible

### Code Quality
- ESLint with Next.js plugin
- Prettier for consistent formatting
- Pre-configured VS Code settings for auto-format on save

### Monorepo Best Practices
- Each package has isolated tsconfig.json extending root config
- Dependencies declared in package.json for clarity
- Workspace dependencies use `workspace:*` protocol
- Turborepo caching for faster builds

## Adding New Packages

1. Create directory with proper structure:
   ```
   packages/new-package/
   ├── package.json
   ├── tsconfig.json
   └── src/
   ```

2. Update `pnpm-workspace.yaml` (if not under apps/* or packages/*)

3. Add to root `tsconfig.json` paths if needed for path aliases

4. Other packages can depend via: `"@namespace/new-package": "workspace:*"`

## ContentModeling in Sanity

### Adding Document Types
1. Create schema file in `packages/sanity-config/schemas/`
2. Export from `packages/sanity-config/schemas/index.ts`
3. Import in `packages/sanity-config/config.ts` in the `schema.types` array

### Querying Content
Use GROQ queries imported from `@sanity-lib/groq` or write custom queries:
```typescript
import { client } from '@sanity-lib/client';
const data = await client.fetch(`*[_type == "page"][0]`);
```

## Styling Guidelines

- **Tailwind CSS** is the primary styling approach
- Brand colors in tailwind config use a `brand.*` namespace
- Components should accept `className` prop for customization
- Shared components in `packages/ui/components/`

## Deployment to Vercel

The monorepo is already configured for Vercel:
- Each app has `vercel.json` with proper build commands
- Environment variables automatically inherit from project settings
- Both `apps/web` and `apps/studio` can be deployed separately or as subdomains

### Deploying Web App
- Point Vercel to `apps/web` root
- Uses build command from `apps/web/vercel.json`

### Deploying Studio
- Point Vercel to `apps/studio` root or use subdomain
- Studio should be deployed separately with different environment

## VS Code Extensions Recommended
- Prettier (code formatter)
- ESLint (code linter)
- TypeScript Next (TypeScript support)
- Sanity (for Sanity development)

## Common Tasks

### Creating a New Page
1. Add page route in `apps/web/app/[slug]/page.tsx`
2. Create corresponding Sanity page document
3. Query content using `@sanity-lib/client`
4. Use shared components from `@ui/components`

### Creating a New Component
1. Create component in `packages/ui/components/ComponentName.tsx`
2. Export in `packages/ui/components/index.ts`
3. Import and use in apps like: `import { ComponentName } from '@ui/components'`

### Running Type Checks
```bash
pnpm type-check    # Check all packages
pnpm type-check -F @fluid-corporate/web  # Check specific app
```

## Important Notes

- **Do not modify** `pnpm-lock.yaml` manually
- Always use `pnpm add/remove` for dependency management
- Preserve the `workspace:*` protocol for internal dependencies
- Keep environment variables secure - never commit `.env.local`
- Review Vercel logs for deployment issues

## Resources

- Sanity Docs: https://www.sanity.io/docs
- Next.js App Router: https://nextjs.org/docs/app
- Turborepo: https://turbo.build/repo/docs
- pnpm workspaces: https://pnpm.io/workspaces
