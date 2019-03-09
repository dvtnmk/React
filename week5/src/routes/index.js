import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "containers/Login";
import Register from "containers/Register";
function CustomRoute() {
  return (
    <React.Fragment>
      <Route exact path="/" component={() => <Redirect to="/signin" />} />
      <Route exact path="/signIn" component={Login} />
      <Route exact path="/signUp" component={Register} />
      <Route component={() => <h1>Not Found</h1>} />
    </React.Fragment>
  );
}
export default CustomRoute;
