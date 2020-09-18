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
import Category from "./pages/category";

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
        <Route exact path="/"  name="Home" component={Home}/>
        <Route exact path="/home" name="Home" component={Home}/>
        <Route exact path="/login" name="Login"component={Login}/>
        <PrivateRoute exact path="/post_property"name="PostProperty" component={PostProperty}/>
        <Route exact path="/settings" name="Settings" component={SettingsPage}/>
        <Route exact path="/categories" name="Settings" component={Category}/>
        <Route exact path="/login" name="Login" component={LoginPage}/>
        <Route exact path="/register" name="Register" component={Register}/>
        <Route exact path="/forgot_password" name="ForgotPassword" component={ForgotPassword}/>
      </Switch>
    </div>
  </BrowserRouter>
  )
 
}
