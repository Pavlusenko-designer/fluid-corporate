'use client';

import { Studio } from 'sanity';

export default function StudioPage() {
  const projectId = (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '').trim();

  if (!projectId) {
    return (
      <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '2rem' }}>
        <p>NEXT_PUBLIC_SANITY_PROJECT_ID is not set. Configure Sanity env vars to enable Studio.</p>
      </main>
    );
  }

  let config: unknown;
  try {
    config = require('@sanity-lib/config').config;
  } catch {
    return (
      <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '2rem' }}>
        <p>Sanity Studio config is invalid. Check NEXT_PUBLIC_SANITY_* environment variables.</p>
      </main>
    );
  }

  return (
    <div style={{ height: '100vh' }}>
      <Studio config={config as Parameters<typeof Studio>[0]['config']} />
    </div>
  );
}
