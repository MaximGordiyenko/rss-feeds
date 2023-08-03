import { Book } from "../repos/book.js";

export const getAllBooks = async (req, res) => {
  const books = await Book.queryAllBooks();
  if (!books) return res.status(204).json({ 'message': 'No books found' });
  res.json(books);
};
