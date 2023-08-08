import pg from "pg";
import { Feeds } from "./repos/feeds.js";
import { Auth } from "./repos/auth.js";
import { Sequelize } from "sequelize";

export const db = new pg.Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_LOCAL_PORT,
  database: 'postgres',
  user: process.env.PG__USER,
  password: process.env.PG_PASSWORD,
});

const sequelizeOptions = {
  host: process.env.PG_HOST,
  port: process.env.PG_LOCAL_PORT,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  }
};

export const sequelize = new Sequelize('postgres', process.env.PG__USER, process.env.PG_PASSWORD, sequelizeOptions);

export const createDatabaseIfNotExists = async () => {
  const client = await db.connect();
  console.info(`Connect to: ${client?.database} 💾, with 🧑🏻‍💻: ${client?.user}`);
  try {
    if (client?.database === 'postgres') {
      await Feeds.createTableFeeds();
      await Auth.createUserTable();
    }
    console.info('Create Feeds & Auth tables.');
  } catch (error) {
    console.error('Error creating database:', error);
  } finally {
    client.release();
  }
};

try {
  await sequelize.authenticate();
  console.info('DB was connected successfully.');
} catch (e) {
  console.info('Something went wrong: ', e);
}
