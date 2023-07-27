import { api } from "../constants.js";

export const verifyUser = async (cookies, navigate, removeCookie) => {
  if (!cookies?.jwt) {
    navigate("/login");
  } else {
    const { data } = await api.post("/", {});
    if (!data.status) {
      removeCookie("jwt");
      navigate("/login");
    }
  }
};
