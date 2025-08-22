import type { APIRoute } from 'astro';


export const GET: APIRoute = async ({ site }) => {
const base = site?.toString() ?? 'http://localhost:4321';
const urls = ['/', '/news/psg-real-madrid', '/news/bvb-rising-star']; // build from your DB in real use
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
urls.map(u => `<url><loc>${new URL(u, base).toString()}</loc></url>`).join('') +
`</urlset>`;
return new Response(xml, { headers: { 'content-type': 'application/xml' } });
};