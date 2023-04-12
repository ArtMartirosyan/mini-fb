import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, SignInPage, AuthorizedPage1 } from "pages";
import { NotFound } from "navigation/NotFound";
import { ROOT, AUTH_PAGE1, HOME } from "navigation/CONSTANTS";
// import { Login } from "./Auth/Login";
import PrivateRoutes from "./Auth/PrivateRoutes";

export const RouterConfig = () => {
  return (
    <Routes>
      {/* List all public routes here */}
      <Route exact path={ROOT} element={<SignInPage />} />
      {/* <Route path="/login" element={<Login />} /> */}

      {/* List all private/auth routes here */}
      <Route element={<PrivateRoutes />}>
        <Route element={<AuthorizedPage1 />} path={AUTH_PAGE1} />
        <Route exact path={HOME} element={<HomePage />} />
      </Route>

      {/* List a generic 404-Not Found route here */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
