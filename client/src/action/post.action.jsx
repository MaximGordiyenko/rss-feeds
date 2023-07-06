import { ONCHANGE_INPUT } from "../types/post.types";

export const inputAction = (dispatch, { target: { name, value } }) => {
  dispatch({
    type: ONCHANGE_INPUT,
    payload: { key: name, value: value },
  });
};
