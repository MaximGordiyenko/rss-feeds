import { createContext, useReducer, useContext } from "react";
import { initialState } from "../store/store";
import { reducer } from "../reducer/post.reducer";
import {
  fetchData,
  updateData,
  deleteData,
  getSortedDataByTitleDesc,
  getSortedDataByTitleAsc,
  getFilteredDataByTitle
} from "../api";
import { inputAction } from "../action/post.action";

export const DataContext = createContext();
export const useData = () => useContext(DataContext);

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const contextValue = {
    data: state.data,
    loading: state.loading,
    error: state.error,
    title: state.title,
    author: state.author,
    content: state.content,
    filterTitle: state.filterTitle,
    dispatch,
    fetchData: () => fetchData(dispatch),
    getSortedDataByTitleDesc: () => getSortedDataByTitleDesc(dispatch),
    getSortedDataByTitleAsc: () => getSortedDataByTitleAsc(dispatch),
    getFilteredDataByTitle: (filterTitle) => getFilteredDataByTitle(filterTitle, dispatch),
    updateData: (id, newData) => updateData(id, newData, dispatch),
    deleteData: (id) => deleteData(id, dispatch),
    inputAction
  };
  
  return (
    <DataContext.Provider value={contextValue}>
      { state ? children : <div>loading...................</div>}
    </DataContext.Provider>
  );
};
