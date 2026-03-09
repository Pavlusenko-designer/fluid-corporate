import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-01';

if (!projectId) {
  throw new Error('NEXT_PUBLIC_SANITY_PROJECT_ID is required');
}

export const config = defineConfig({
  projectId,
  dataset,
  title: 'Fluid Corporate CMS',
  apiVersion,
  basePath: '/studio',
  plugins: [structureTool()],
  schema: {
    types: [
      // Import schema definitions here
      // Example: pageSchema, settingsSchema, etc.
    ],
  },
});
