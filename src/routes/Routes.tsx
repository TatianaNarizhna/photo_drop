import React, { FC, useState } from "react";
import { Route, Routes } from "react-router-dom";
import publicRoutes from "./publicRoutes";
import privateRoutes from "./privateRoutes";

const RoutesComponent: FC = () => {
  const [jwtToken, setJwtToken] = useState(true);
  // redux

  // getAllAlbums - useEff

  return (
    <Routes>
      {!jwtToken
        ? publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))
        : privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
    </Routes>
  );
};

export default RoutesComponent;
