import pg from "pg";
import { Feeds } from "./repos/feeds.js";
import { Auth } from "./repos/auth.js";
import { Sequelize } from "sequelize";

export const db = new pg.Pool({
  host: process.env.PSQL_HOST,
  port: process.env.PSQL_PORT,
  database: 'postgres',
  user: process.env.PSQL_USER,
  password: process.env.PSQL_PASSWORD,
});

const sequelizeOptions = {
  host: process.env.PSQL_HOST || "localhost",
  port: process.env.PSQL_PORT || 5432,
  dialect: "postgres",
  pool: {
    max: 100,
    min: 0,
    idle: 200000,
    acquire: 1000000,
  }
};


export let sequelize;

if (process.env.NODE_ENV === "production") {
  sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
  sequelize = new Sequelize(
    process.env.PSQL_NAME || "postgres",
    process.env.PSQL_USER || "maxim",
    process.env.PSQL_PASSWORD || "",
    sequelizeOptions
  );
}

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
