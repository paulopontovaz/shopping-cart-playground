import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dbCredentials: {
        database: "haiilo_challenge",
        host: "localhost",
        password: "postgres",
        port: 5432,
        ssl: process.env.DRIZZLE_SSL !== "false",
        user: "postgres",
    },
    dialect: "postgresql",
    out: "./src/db/migrations",
    schema: "./src/db/models/index.ts",
});
