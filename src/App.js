import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import ForgotPassword  from "./pages/auth/forgotPassword";
import LoginPage from "./pages/auth/login";
import SettingsPage from "./pages/settings";
import PostProperty from "./pages/post";
import SingleProperty from "./components/singlehousedetails";
import {PrivateRoute} from "./components/privateRoute";
import Category from "./pages/category";
import CategorySingle from "./components/category";
import NotFound from "./components/404";
import PropertyAdded from "./components/propertyAdded";
import {LoggedInRoute} from "./components/alreadyLoggedInRoute";
import MyProperties from "./pages/myProperties";
import MyWishlist from "./pages/wishlist";
import DetailProperty from "./components/PropertyContactDetails";
import Privacy from "./pages/privacy";
import ChangePassword from "./pages/changePassword";
import SearchProperties from "./pages/search";
import EditPropertyOptions from "./components/Edit/editPropertyOptions"
import EditProperties from "./components/Edit/editProperty";
import ImageEditor from "./components/Edit/imageEditor";

// import PayService from "./pages/payments/payservice";

//tapiwa tererai's Central Route Config

export default function RouteConfigExample() {
  return(
     <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/"  name="Home" component={Home}/>
        <Route exact path="/home" name="Home" component={Home}/>
        <LoggedInRoute exact path="/login" name="Login"component={Login}/>
        <LoggedInRoute exact path="/fogotpassword" name="Login"component={ForgotPassword}/>
        <Route exact path="/search" name="search" component={SearchProperties}/>
        <Route exact path="/privacy" name="privacy" component={Privacy}/>
        <PrivateRoute exact path="/edit_property_options/:property_id" name="Change Password" component={EditPropertyOptions}/>
        <PrivateRoute exact path="/edit_property_details/:property_id" name="Change Password" component={EditProperties}/>
        <PrivateRoute exact path="/edit_property_images/:property_id" name="Change Password" component={ImageEditor}/>
        <PrivateRoute exact path="/change_password" name="Change Password" component={ChangePassword}/>
        <PrivateRoute exact path="/my_properties" title="My properties" component={MyProperties}/>
        <PrivateRoute exact path="/my_wishlist"name="My WishList" component={MyWishlist}/>
        <PrivateRoute exact path="/post_property"name="PostProperty" component={PostProperty}/>
        <PrivateRoute exact path="/add_images_to_property/:property_id"name="PropertyAdded" component={PropertyAdded}/>
        <Route exact path="/single_property/:property_id" name="SingleProperty" component={SingleProperty}/>
        <PrivateRoute exact path="/property_details" name="My properties" component={DetailProperty}/>
        <PrivateRoute exact path="/settings" name="Settings" component={SettingsPage}/>
        <Route exact path="/categories" name="Categories" component={Category}/>
        <Route path="/single_category/:category_id" name="Single Category" component={CategorySingle}/>
        <Route exact path="/login" name="Login" component={LoginPage}/>
        <LoggedInRoute exact path="/register" name="Register" component={Register}/>
        <Route exact path="/forgot_password" name="ForgotPassword" component={ForgotPassword}/>
        <Route path='*' exact={true} component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
  )
 
}
