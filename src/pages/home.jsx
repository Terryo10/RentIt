import React from "react";
// import { Switch, Route } from "react-router-dom";
import HeaderApp from "../components/headerhome";
import FooterApp from "../components/footer";
import Houses from "../components/houses";
import SideBarApp from "../components/side";

function home(props) {

  return (
    <div>
     
      <HeaderApp></HeaderApp>
        <SideBarApp props={props}/>
      <div className="page-content-wrapper">
        <div className="container">
            <Houses props={props}/>
            
        </div>
      </div>
      <FooterApp></FooterApp>
    </div>
  );
}

export default home;
