import { Outlet} from "react-router-dom";
import { Main } from "../main/Main.jsx";
import { NavBar } from "../NavBar.jsx";

export const Layout = () => {
  return (
    <Main>
      <NavBar/>
      <Outlet/>
    </Main>
  );
};
