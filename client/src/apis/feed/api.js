import { api } from "../constants.js";
import { FETCH_SUCCESS, FETCH_ERROR } from "../../types/post.types.jsx";

export const fetchFeeds = async (dispatch) => {
  try {
    const { data } = await api.get('/feed');
    dispatch({
      type: FETCH_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: FETCH_ERROR,
      payload: error.message
    });
  }
};

export const getSortedDataByTitleDesc = async (dispatch) => {
  try {
    const { data } = await api.get('/feed/sort/desc');
    dispatch({
      type: FETCH_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: FETCH_ERROR,
      payload: error.message
    });
  }
};

export const getSortedDataByTitleAsc = async (dispatch) => {
  try {
    const { data } = await api.get(`/feed/sort/asc`);
    dispatch({
      type: FETCH_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: FETCH_ERROR,
      payload: error.message
    });
  }
};

export const getFilteredDataByTitle = async (filterTitle, dispatch) => {
  try {
    const { data } = await api.get(`/feed/filter?title=${filterTitle}`);
    dispatch({
      type: FETCH_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: FETCH_ERROR,
      payload: error.message
    });
  }
};

export const updateData = async (id, newData, dispatch) => {
  try {
    const { data } = await api.put(`/feed/${id}`, newData);
    dispatch({
      type: FETCH_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: FETCH_ERROR,
      payload: error.message
    });
  }
};

export const deleteData = async (id, dispatch) => {
  try {
    await api.delete(`/feed/${id}`);
    dispatch({
      type: FETCH_SUCCESS,
      payload: null
    });
  } catch (error) {
    dispatch({
      type: FETCH_ERROR,
      payload: error.message
    });
  }
};
