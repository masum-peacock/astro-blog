import { defineConfig, envField } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// import vercel from "@astrojs/vercel/serverless";
import netlify from '@astrojs/netlify';
import db from '@astrojs/db';


import vercel from "@astrojs/vercel";


export default defineConfig({
  integrations: [tailwind(), db()],
  output: 'server',
  adapter: vercel(),
  // adapter: netlify()
});