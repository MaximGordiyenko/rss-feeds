import { api } from "../constants.js";
import { FETCH_SUCCESS, FETCH_ERROR } from "../../types/post.types.jsx";

export const getOccupationsAndProjects = async (dispatch) => {
  try {
    const { data } = await api.get('/occupationsAndProjects');
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
}
