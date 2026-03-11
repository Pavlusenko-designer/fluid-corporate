import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-01';
const token = process.env.SANITY_API_TOKEN;

// Do not throw during module import. In deployment environments where
// Sanity env vars are missing, pages can still render using local fallbacks.
if (!projectId) {
  console.warn(
    '[sanity-lib] Missing NEXT_PUBLIC_SANITY_PROJECT_ID. Sanity fetches will fail and fallback content will be used.',
  );
}

export const client = createClient({
  projectId: projectId || 'missing-project-id',
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
  token,
});
