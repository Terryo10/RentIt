import React from "react";
// import { Switch, Route } from "react-router-dom";
import HeaderApp from "../components/headerhome";
import FooterApp from "../components/footer";

function home(props) {
  return (
    <div>
      <HeaderApp props={props}></HeaderApp>
      <div className="page-content-wrapper">
        <div className="container">
        <h1>Homepage content goes here</h1>
        </div>
      </div>
      <FooterApp></FooterApp>
    </div>
  );
}

export default home;
