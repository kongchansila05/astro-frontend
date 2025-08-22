import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server', // Enable SSR
  adapter: node({ mode: 'standalone' }),
  site: process.env.PUBLIC_SITE_URL || 'https://astro-frontend-production.up.railway.app',
  server: {
    host: true,                     // <-- Listen on all interfaces (0.0.0.0)
    port: Number(process.env.PORT) || 4321,  // <-- Use Railway port
    headers: {
      // Default no-cache so data is always fresh
      'Cache-Control': 'no-store'
    }
  }
});
