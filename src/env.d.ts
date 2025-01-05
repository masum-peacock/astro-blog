/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly PUBLIC_ASTRO_DB_APP_TOKEN: string;
    readonly PUBLIC_ASTRO_DB_REMOTE_URL: string;
}
interface ImportMeta {
    readonly env: ImportMetaEnv;
}
