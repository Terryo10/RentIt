import React, { Component } from 'react';


class SideBarApp extends Component {
    state = { 
      sidebar:false
     }
    render() { 
        return (
            <div>
                   
    <div className="sidenav-black-overlay"></div>
  
    <div className="suha-sidenav-wrapper" id="sidenavWrapper">
     
      <div className="sidenav-profile">
        <div className="user-profile"><img src="img/bg-img/9.jpg" alt=""></img></div>
        <div className="user-info">
          <h6 className="user-name mb-0">Suha Jannat</h6>
          <p class="available-balance">Balance <span>$<span className="counter">523.98</span></span></p>
        </div>
      </div>
     
      <ul class="sidenav-nav pl-0">
        <li><a ><i className="lni lni-user"></i>My Profile</a></li>
        <li><a ><i className="lni lni-alarm lni-tada-effect"></i>Notifications<span className="ml-3 badge badge-warning">3</span></a></li>
        <li class="suha-dropdown-menu"><a ><i className="lni lni-cart"></i>Shop Pages</a>
          <ul>
            <li><a >- Shop Grid</a></li>
            <li><a >- Shop List</a></li>
            <li><a >- Product Details</a></li>
            <li><a >- Featured Products</a></li>
            <li><a >- Flash Sale</a></li>
          </ul>
        </li>
        <li><a href="pages.html"><i className="lni lni-empty-file"></i>All Pages</a></li>
        <li class="suha-dropdown-menu"><a ><i className="lni lni-heart"></i>My Wishlist</a>
          <ul>
            <li><a >- Wishlist Grid</a></li>
            <li><a >- Wishlist List</a></li>
          </ul>
        </li>
        <li><a ><i className="lni lni-cog"></i>Settings</a></li>
        <li><a ><i className="lni lni-power-switch"></i>Sign Out</a></li>
      </ul>
     
      <div class="go-home-btn" id="goHomeBtn"><i className="lni lni-arrow-left"></i></div>
    </div>
            </div>
          );
    }
}
 
export default SideBarApp;