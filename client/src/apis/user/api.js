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

export const updateUserRoleById = async (id, type) => {
  try {
    await api.put(`/updateUserRole/${id}`, { type });
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const deleteUserById = async (id) => {
  try {
    await api.delete(`/deleteUser/${id}`);
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
