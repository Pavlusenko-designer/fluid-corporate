'use client';

import { Studio } from 'sanity';
import { config } from '@sanity-lib/config';

export default function StudioAliasPage() {
  return (
    <div style={{ height: '100vh' }}>
      <Studio config={config} />
    </div>
  );
}
