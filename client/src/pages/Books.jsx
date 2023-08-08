import { useEffect } from "react";
import { useData } from "../context/constants.jsx";
import { Typography } from "@mui/material";
import { BookCard } from "../components/cards/book/BookCard.jsx";

export const Books = () => {
  const { data, getAllBooks } = useData();
  
  useEffect(() => {
    getAllBooks();
  }, []);
  
  return (
    <>
      <Typography variant="h5" component="h1" align="center" gutterBottom>Books</Typography>
      <BookCard data={data}/>
    </>
  );
};
