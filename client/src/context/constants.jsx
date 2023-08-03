import { useContext } from "react";
import { DataContext } from "./MainProvider.jsx";

export const useData = () => useContext(DataContext);
