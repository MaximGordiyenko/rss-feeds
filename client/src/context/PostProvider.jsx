import { createContext, useReducer } from "react";
import { initialState } from "../store/store";
import { reducer } from "../reducer/post.reducer";
import {
  fetchFeeds,
  updateData,
  deleteData,
  getSortedDataByTitleDesc,
  getSortedDataByTitleAsc,
  getFilteredDataByTitle
} from "../apis/feed/api.js";
import { inputAction } from "../action/post.action";
import { getAllUsers } from "../apis/user/api.js";

export const DataContext = createContext(undefined);

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, undefined);
  
  const contextValue = {
    data: state.data,
    loading: state.loading,
    error: state.error,
    title: state.title,
    author: state.author,
    content: state.content,
    filterTitle: state.filterTitle,
    dispatch,
    fetchFeeds: () => fetchFeeds(dispatch),
    getSortedDataByTitleDesc: () => getSortedDataByTitleDesc(dispatch),
    getSortedDataByTitleAsc: () => getSortedDataByTitleAsc(dispatch),
    getFilteredDataByTitle: (filterTitle) => getFilteredDataByTitle(filterTitle, dispatch),
    updateData: (id, newData) => updateData(id, newData, dispatch),
    deleteData: (id) => deleteData(id, dispatch),
    getAllUsers: () => getAllUsers(dispatch),
    inputAction
  };
  
  return (
    <DataContext.Provider value={contextValue}>
      { state ? children : <div>loading...................</div>}
    </DataContext.Provider>
  );
};
