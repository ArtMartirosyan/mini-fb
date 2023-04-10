import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { ROOT } from "navigation/CONSTANTS";
import { useAuth } from "navigation/Auth/ProvideAuth";

export const AuthorizedPage1 = () => {
  console.log("logggggggggggggg");
  const { user } = useAuth();
  return (
    <div>
      <Link to={ROOT}>Home</Link>
      <Typography variant="h2">Welcome, {user.name}.</Typography>
      <Typography variant="overline">Authorized Page 1</Typography>
    </div>
  );
};
