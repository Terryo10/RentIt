import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {openUp} from "../redux/actions/SideBarAction";
// import {openUp} from "../redux/actions/SideBarAction";
import {logout} from "../redux/actions/AuthAction";


class SideBarApp extends Component {

    render() {
        if(!localStorage.getItem('user')){
          return <div>

                <div className="sidenav-black-overlay"></div>

                <div className={this.props.showsidebar? "suha-sidenav-wrapper nav-active": "suha-sidenav-wrapper"} id="sidenavWrapper" >

                    <div className="sidenav-profile">
                        <div className="user-profile"><img src="/assets/img/icons/icon-96x96.png" alt=""></img></div>

                    </div>

                    <ul className="sidenav-nav pl-0">
                        <li><Link to="/login"><i className="lni lni-enter"></i>Login</Link></li>
                        <li><Link to="/Register"><i className="lni lni-direction"></i>Register</Link></li>
                       </ul>

                    <div className="go-home-btn" id="goHomeBtn"  onClick={()=>{this.props.openUp()}}><i className="lni lni-arrow-left"></i></div>
                </div>
            </div>
        }
    let user =JSON.parse(localStorage.getItem('user'))
        return (
            <div>

    <div className="sidenav-black-overlay"></div>

    <div className={this.props.showsidebar? "suha-sidenav-wrapper nav-active": "suha-sidenav-wrapper"} id="sidenavWrapper" >
     
      <div className="sidenav-profile">
        <div className="user-profile"><img src="/assets/img/icons/icon-96x96.png" alt=""></img></div>
        <div className="user-info">
          <h6 className="user-name mb-0">{user.name}</h6>
        </div>
      </div>
     
      <ul className="sidenav-nav pl-0">
        <li><Link to="/my_properties"><i className="lni lni-alarm lni-tada-effect"></i>My Properties</Link></li>
          <li ><Link to="/my_wishlist"><i className="lni lni-heart"></i>My Wishlist</Link></li>
        <li><Link to="/settings"><i className="lni lni-cog"></i>Settings</Link></li>
          <li><a onClick={()=>{logout(this.props)}} href="/login" ><i className="lni lni-power-switch"></i>Logout</a></li>
      </ul>
     
        <div className="go-home-btn" id="goHomeBtn"  onClick={()=>{this.props.openUp()}}><i className="lni lni-arrow-left"></i></div>
            </div>
            </div>
          );
    }
}

const mapStateToProps =(state)=>{
    return{
        showsidebar:state.sideBar.showsidebar
    }
};
const mapDispatchToProps =(dispatch)=> {
    return {
        openUp: () => dispatch(openUp())
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(SideBarApp);
