import { useContext } from "react";
import { DataContext } from "./PostProvider.jsx";

export const useData = () => useContext(DataContext);
