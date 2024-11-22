import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./Router";
import { useState } from "react";
export const AppRouter = () => {
  const [login, setLogin] = useState(true);
  debugger;
  return (
    <Routes>
      {login &&
        privateRoutes.map((route) => (
          <Route route={route.path} element={route.element} />
        ))}
    </Routes>
  );
};
