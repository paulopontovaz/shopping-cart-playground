import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dbCredentials: {
    database: process.env.DB_NAME ?? "haiilo_challenge",
    host: process.env.DB_HOST ?? "localhost",
    password: process.env.DB_PASS ?? "postgres",
    port: Number(process.env.DB_PORT) ?? 5432,
    ssl: process.env.DRIZZLE_SSL !== "false",
    user: process.env.DB_USER ?? "postgres",
  },
  dialect: "postgresql",
  out: "./src/db/migrations",
  schema: "./src/db/models/index.ts",
});
