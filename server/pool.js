import pg from "pg";
import { Feeds } from "./repos/feeds.js";
import { Auth } from "./repos/auth.js";

export const pool = new pg.Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_LOCAL_PORT,
  database: 'postgres',
  user: process.env.PG__USER,
  password: process.env.PG_PASSWORD,
});

export const createDatabaseIfNotExists = async () => {
  const client = await pool.connect();
  console.log(client);
  try {
    if (client?.database === 'postgres') {
      await Feeds.createTableFeeds();
      await Auth.createTableUsers();
    }
    console.info('Postgres create');
  } catch (error) {
    console.error('Error creating database:', error);
  } finally {
    client.release();
  }
};