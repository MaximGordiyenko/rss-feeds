import { queryParser } from "../utils/utils.js";
import { db } from "../db.js";

const getAllBooksPath = 'query/books/getAllBooks.sql';

export const Book = (() => {
  const queryAllBooks = async () => {
    try {
      const data = await queryParser(getAllBooksPath);
      const { rows } = await db.query(data);
      return rows;
    } catch (error) {
      throw error;
    }
  };
  
  return {
    queryAllBooks,
  };
  
})();
