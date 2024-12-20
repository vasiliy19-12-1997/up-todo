import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../../App";
import { Loader } from "../UI/Loader/Loader";
import { privateRoutes, publicRoutes } from "./Router";
export const AppRouter = () => {
  const [auth, setIsAuth, isLoading] = useContext(AuthContext);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Routes>
      {auth
        ? privateRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))
        : publicRoutes.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
    </Routes>
  );
};
