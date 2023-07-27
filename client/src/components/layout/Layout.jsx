import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Main } from "../main/Main.jsx";
import { NavBar } from "../NavBar.jsx";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export const Layout = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  // const [cookies] = useCookies(["jwt"]);
  // const navigate = useNavigate();
  // let location = useLocation();
  //
  // useEffect(() => {
  //   if (cookies.jwt) {
  //     navigate("/");
  //   }
  // }, [cookies, navigate, location]);
  //
  // console.log(location.pathname);
  return (
    <Main>
      <NavBar/>
      <Outlet/>
    </Main>
  );
};
