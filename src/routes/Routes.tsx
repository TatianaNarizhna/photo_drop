import React, { FC, useEffect } from "react";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { fetchAllFolders } from "../redux/folders/foldersOperations";
import publicRoutes from "./publicRoutes";
import privateRoutes from "./privateRoutes";

import { getJwt } from "../redux/token/selectors";

const RoutesComponent: FC = () => {
  const token = useSelector(getJwt);
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();

  // useEffect(() => {
  //   if (token) {
  //     dispatch(fetchAllFolders());
  //     console.log("jjj");
  //   }
  // }, [dispatch, token]);

  return (
    <Routes>
      {!token
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
