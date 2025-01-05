import { defineConfig, envField } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from "@astrojs/vercel/serverless";
import netlify from "@astrojs/netlify/serverless";

import db from '@astrojs/db';


export default defineConfig({
  integrations: [tailwind(), db()],
  output: 'server',
  // adapter: vercel(),
  adapter: netlify(),
  env: {
    schema: {
      PUBLIC_ASTRO_DB_REMOTE_URL: envField.string({ context: "client", access: "public" }),
      PUBLIC_ASTRO_DB_APP_TOKEN: envField.string({ context: "client", access: "public" }),
    }
  }
});