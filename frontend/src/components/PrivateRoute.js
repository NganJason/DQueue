import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({
  component: Component,
  isAdminPage,
  redirect,
  ...rest
}) => {
  const user = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (Object.keys(user).length === 0) {
          return (
            <Redirect
              to={{ pathname: redirect, state: { from: props.location } }}
            />
          );
        } else if (isAdminPage === undefined || user.is_admin === isAdminPage) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
};

export default PrivateRoute;
