import { defineConfig } from 'astro/config';
import node from '@astrojs/node';


export default defineConfig({
output: 'server', // Enable SSR
adapter: node({ mode: 'standalone' }),
site: process.env.PUBLIC_SITE_URL || 'http://localhost:4321',
server: {
headers: {
// Default no-cache so data is always fresh (adjust as needed)
'Cache-Control': 'no-store'
}
}
});