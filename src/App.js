import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Homepage from './pages/home';
import Loginpage from './pages/auth/login'

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.


export default function RouteConfigExample() {
  return (
    <Router>
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

function Home() {
return <Homepage/>;

}

function Login() {
  return <Loginpage/>;
}

function About() {
  return <h2>Users</h2>;
}




