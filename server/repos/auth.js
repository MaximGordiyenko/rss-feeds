import { pool } from '../pool.js';
import { queryParser } from '../utils/utils.js';

const createTableUsersPath = 'query/users/createUsersTable.sql'
const getUserEmailsPath = 'query/users/findUserEmail.sql';
const insertUserPath = 'query/users/insertUser.sql';
const findUserByEmailPasswordPath = 'query/users/findUserByEmailPassword.sql';
const findUserByIdPath = 'query/users/findUserById.sql';

export const Auth = (() => {
  const createTableUsers = async () => {
    try {
      const data = await queryParser(createTableUsersPath);
      await pool.query(data);
    } catch (error) {
      throw error;
    }
  }
  
  const findByEmail = async (email) => {
    try {
      const data = await queryParser(getUserEmailsPath);
      const { rows } = await pool.query(data, [email]);
      return rows;
    } catch (error) {
      throw error;
    }
  };
  
  const insert = async ({ email, password }) => {
    try {
      const data = await queryParser(insertUserPath);
      return await pool.query(data, [email, password]);
    } catch (error) {
      throw error;
    }
  };
  
  const findUserByEmailPassword = async (email, password) => {
    try {
      const data = await queryParser(findUserByEmailPasswordPath);
      const { rows } = await pool.query(data, [email, password]);
      return rows;
    } catch (error) {
      throw error;
    }
  };
  
  const findUserById = async (id) => {
    try {
      const data = await queryParser(findUserByIdPath);
      const { rows } = await pool.query(data, [id]);
      return rows;
    } catch (error) {
      throw error;
    }
  };
  
  return {
    createTableUsers,
    findByEmail,
    insert,
    findUserByEmailPassword,
    findUserById,
  };
})();
