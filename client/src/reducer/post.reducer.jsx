import { FETCH_SUCCESS, ONCHANGE_INPUT, FETCH_ERROR } from "../types/post.types";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case ONCHANGE_INPUT:
      return {
        ...state,
        [payload.key]: payload.value,
      };
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

//FIXME: 1. Make reducer less universal, cos it's rewrite data in store, check Dashboard.jsx -> getOccupationsAndProjects()
