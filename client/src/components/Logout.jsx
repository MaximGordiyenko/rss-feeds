import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Link } from "@mui/material";
import { useEffect } from "react";
import { verifyUser } from "../apis/auth/api.js";

export const Logout = () => {
  const [cookies, removeCookie] = useCookies(["jwt"]);
  const navigate = useNavigate();
  
  const logOut = () => {
    removeCookie("jwt");
    navigate("/login");
  };
  
  useEffect(() => {
    verifyUser(cookies, navigate, removeCookie).then(r => r);
  }, [cookies, navigate, removeCookie]);
  
  return (
    <li className='MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root'>
      <Link onClick={logOut}>Logout</Link>
    </li>
  );
};
