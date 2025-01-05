import { createClient } from '@libsql/client';

// Database client initialization
const db = createClient({
    url: 'file:./schema.sql',
    syncUrl: 'libsql://astro-db-masum-peacock.turso.io',
    authToken:
        process.env.ASTRO_DB_APP_TOKEN ||
        'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MzYwNjU1ODgsImlkIjoiNGI4NGMxYjctNmEyMC00MTI4LWIzMzQtYTUxMTZkODhjYmE1In0.kdrpbpq9DV1Z8sUR8VIbpGr2DLQ9mKzgfpvh7TKTnOXFWKBE9og526VB--Mb2Uo0gp-zLuSlGDucpDBQ6XPICg',
    // syncInterval: 1, // Optional, remove if unnecessary
});

export default db;
