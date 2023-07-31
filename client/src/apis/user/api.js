import { api } from "../constants.js";
import { FETCH_SUCCESS, FETCH_ERROR } from "../../types/post.types.jsx";

export const getAllUsers = async (dispatch) => {
  try {
    const { data } = await api.get('/allUsers');
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

export const updateUserRole = async (id, role) => {
  try {
    await api.put(`/updateUserRole/${id}`, { role });
  } catch (error) {
    console.log(error.message);
  }
};
