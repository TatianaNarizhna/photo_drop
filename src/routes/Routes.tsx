import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import publicRoutes from "./publicRoutes";

const RoutesComponent: FC = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
};

export default RoutesComponent;
