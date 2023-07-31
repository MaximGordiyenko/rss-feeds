import { db } from '../db.js';
import { queryParser } from '../utils/utils.js';

const createUserTablePath = 'query/auth/createUserTable.sql';
const findUserEmailPath = 'query/auth/findUserEmail.sql';
const insertUserPath = 'query/auth/insertUser.sql';
const findUserByEmailPasswordPath = 'query/auth/findUserByEmailPassword.sql';
const findUserByIdPath = 'query/auth/findUserById.sql';

export const Auth = (() => {
  const createUserTable = async () => {
    try {
      const data = await queryParser(createUserTablePath);
      await db.query(data);
    } catch (error) {
      throw error;
    }
  };
  
  const findUserEmail = async (email) => {
    try {
      const data = await queryParser(findUserEmailPath);
      const { rows } = await db.query(data, [email]);
      return rows;
    } catch (error) {
      throw error;
    }
  };
  
  const insertUser = async ({ email, password }) => {
    try {
      const data = await queryParser(insertUserPath);
      return await db.query(data, [email, password]);
    } catch (error) {
      throw error;
    }
  };
  
  const findUserByEmailPassword = async (email, password) => {
    try {
      const data = await queryParser(findUserByEmailPasswordPath);
      const { rows } = await db.query(data, [email, password]);
      return rows;
    } catch (error) {
      throw error;
    }
  };
  
  const findUserById = async (id) => {
    try {
      const data = await queryParser(findUserByIdPath);
      const { rows } = await db.query(data, [id]);
      return rows;
    } catch (error) {
      throw error;
    }
  };
  
  return {
    createUserTable,
    findUserEmail,
    insertUser,
    findUserByEmailPassword,
    findUserById,
  };
})();
