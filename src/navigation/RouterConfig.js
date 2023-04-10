import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "pages/Home";
import { Dashboard } from "pages/Dashboard";
import { NotFound } from "navigation/NotFound";
import { ROOT, DASHBOARD, AUTH_PAGE1 } from "navigation/CONSTANTS";
import { Login } from "./Auth/Login";
import { AuthorizedPage1 } from "pages/AuthorizedPage1";
import PrivateRoute from "./Auth/PrivateRoute";

export const RouterConfig = () => {
  return (
    <div>
      <Routes>
        {/* List all public routes here */}
        <Route exact path={ROOT} element={<Home />} />
        <Route exact path={DASHBOARD} element={<Dashboard />} />
        <Route path="/login" element={<Login />} />

        {/* List all private/auth routes here */}

        {/* <PrivateRoute path={AUTH_PAGE1}>
          <AuthorizedPage1 />
        </PrivateRoute> */}

        {/* Do not hesitate to play around by moving some routes from public to private and vice-versa */}
        {/* <PrivateRoute path={DASHBOARD}>
          <Dashboard />
        </PrivateRoute> */}

        {/* List a generic 404-Not Found route here */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
