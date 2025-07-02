import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./models";

const pool = new Pool({
    database: process.env.DB_NAME ?? "haiilo_challenge",
    host: process.env.DB_HOST ?? "localhost",
    password: process.env.DB_PASS ?? "postgres",
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
    ssl: process.env.DRIZZLE_SSL !== "false",
    user: process.env.DB_USER ?? "postgres",
});

export const db = drizzle(pool, { schema });
