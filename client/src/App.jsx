import { RouterProvider } from "react-router-dom";
import { routes } from "./routes.jsx";

export const App = () => {
  
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  );
};
