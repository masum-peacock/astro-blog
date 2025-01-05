import { defineConfig, envField } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import db from '@astrojs/db';


export default defineConfig({
  integrations: [tailwind(), db()],
  output: 'server',
  db: db,

  env: {
    schema: {
      PUBLIC_ASTRO_DB_REMOTE_URL: envField.string({ context: "client", access: "public" }),
      PUBLIC_ASTRO_DB_APP_TOKEN: envField.string({ context: "client", access: "public" }),
    }
  }
});