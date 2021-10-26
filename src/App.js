import React from "react";
import Sign from "./sign";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./dashboard";
import { Redirect } from "react-router";

export default function App() {
  // const [state, setstate] = useState(false);
  // console.log(state);
  const val = localStorage.getItem("login");
  console.log(val);
  return (
    <div>
      <Router>
        <Route
          render={() =>
            val === "true" ? <Redirect to="/dashboard" /> : <Redirect to="/" />
          }
        />
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/" exact>
            <Sign />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
