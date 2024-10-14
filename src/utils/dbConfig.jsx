import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://neondb_owner:0LXxboTk3YDm@ep-patient-firefly-a45w6q12.us-east-1.aws.neon.tech/finan-smart?sslmode=require"
);
export const db = drizzle(sql, { schema });