import React from "react";
import AuthRoute from "routes/AuthRoute";
import NonAuthRoute from "routes";
import { Router, Switch } from "react-router-dom";
import history from "routes/history";

function Root() {
  return (
    <React.Fragment>
      <Router history={history}>
        <Switch>
          <NonAuthRoute />
          <AuthRoute />
          {/* <Route  component={()=> <h1>Not Found</h1>}></Route> */}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default Root;
