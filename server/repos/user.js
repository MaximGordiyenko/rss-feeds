import { db } from "../db.js";
import { queryParser } from '../utils/utils.js';

const updateUserRolePath = 'query/user/updateUserRole.sql';
const getAllUsersPath = 'query/user/getAllUsers.sql';

export const User = (() => {
  const queryAllUsers = async () => {
    try {
      const data = await queryParser(getAllUsersPath);
      const { rows } = await db.query(data);
      return rows;
    } catch (error) {
      throw error;
    }
  };
  
  const updateUserRole = async (id, role) => {
    try {
      const data = await queryParser(updateUserRolePath);
      const { row } = await db.query(data, [id, role]);
      return row;
    } catch (error) {
      throw error;
    }
  };
  
  return {
    queryAllUsers,
    updateUserRole,
  };
})();