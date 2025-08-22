import type { APIRoute } from 'astro';
import { ulid } from 'ulid';


export const GET: APIRoute = async () => {
// Demo data (pretend it came from DB)
const now = new Date().toISOString();
const items = [
{
id: ulid(),
title: 'PSG edge Real Madrid in pre-season friendly',
description: 'A tight match decided in stoppage time.',
image: '/images/sample-psg.jpg',
created_at: now,
slug: 'psg-real-madrid'
},
{
id: ulid(),
title: 'Dortmund sign rising star winger',
description: 'Bundesliga contenders strengthen their attack.',
image: '/images/sample-bvb.jpg',
created_at: now,
slug: 'bvb-rising-star'
}
];


return new Response(JSON.stringify(items), {
headers: {
'content-type': 'application/json; charset=utf-8',
'cache-control': 'no-store'
}
});
};