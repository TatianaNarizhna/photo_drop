import React, { FC, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import publicRoutes from "./publicRoutes";
import privateRoutes from "./privateRoutes";

import { getJwt } from "../redux/token/selectors";

const RoutesComponent: FC = () => {
  const [jwtToken, setJwtToken] = useState(false);
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
