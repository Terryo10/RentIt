import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import ForgotPassword  from "./pages/auth/forgotPassword";
import LoginPage from "./pages/auth/login";
import SettingsPage from "./pages/settings";
import PostProperty from "./pages/post";
import {PrivateRoute} from "./components/privateRoute";

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.

export default function RouteConfigExample() {
  return(
     <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <PrivateRoute exact path="/post_property" component={PostProperty}/>
        <Route exact path="/settings" component={SettingsPage}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/forgot_password" component={ForgotPassword}/>
      </Switch>
    </div>
  </BrowserRouter>
  )
 
}
