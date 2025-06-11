export default {
  schema: './src/server/db/schema.ts',
  out: './drizzle',
  driver: 'sqlite',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
};