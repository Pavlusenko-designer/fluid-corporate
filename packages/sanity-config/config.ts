import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemas } from './schemas';

const projectId = (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '').trim();
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-01';
const validProjectId = /^[a-z0-9-]+$/;

if (!projectId) {
  throw new Error('NEXT_PUBLIC_SANITY_PROJECT_ID is required');
}
if (!validProjectId.test(projectId)) {
  throw new Error(
    `Invalid NEXT_PUBLIC_SANITY_PROJECT_ID "${projectId}". Use only lowercase letters (a-z), numbers (0-9), and dashes (-).`
  );
}

export const config = defineConfig({
  projectId,
  dataset,
  title: 'Al Rawaf Corporate CMS',
  apiVersion,
  basePath: '/studio',
  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
});
