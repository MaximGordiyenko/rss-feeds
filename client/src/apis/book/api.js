import { FETCH_SUCCESS, FETCH_ERROR } from "../../types/post.types.jsx";
import { api } from "../constants.js";

export const getAllBooks = async (dispatch) => {
  try {
    const { data } = await api.get('/allBooks');
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
