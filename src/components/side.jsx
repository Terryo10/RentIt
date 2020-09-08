import React, { Component } from 'react';


class SideBarApp extends Component {
    state = {  }
    render() { 
        return (
            <div>
                   
    <div class="sidenav-black-overlay"></div>
  
    <div class="suha-sidenav-wrapper" id="sidenavWrapper">
     
      <div class="sidenav-profile">
        <div class="user-profile"><img src="img/bg-img/9.jpg" alt=""></img></div>
        <div class="user-info">
          <h6 class="user-name mb-0">Suha Jannat</h6>
          <p class="available-balance">Balance <span>$<span class="counter">523.98</span></span></p>
        </div>
      </div>
     
      <ul class="sidenav-nav pl-0">
        <li><a ><i class="lni lni-user"></i>My Profile</a></li>
        <li><a ><i class="lni lni-alarm lni-tada-effect"></i>Notifications<span class="ml-3 badge badge-warning">3</span></a></li>
        <li class="suha-dropdown-menu"><a ><i class="lni lni-cart"></i>Shop Pages</a>
          <ul>
            <li><a >- Shop Grid</a></li>
            <li><a >- Shop List</a></li>
            <li><a >- Product Details</a></li>
            <li><a >- Featured Products</a></li>
            <li><a >- Flash Sale</a></li>
          </ul>
        </li>
        <li><a href="pages.html"><i class="lni lni-empty-file"></i>All Pages</a></li>
        <li class="suha-dropdown-menu"><a ><i class="lni lni-heart"></i>My Wishlist</a>
          <ul>
            <li><a >- Wishlist Grid</a></li>
            <li><a >- Wishlist List</a></li>
          </ul>
        </li>
        <li><a ><i class="lni lni-cog"></i>Settings</a></li>
        <li><a ><i class="lni lni-power-switch"></i>Sign Out</a></li>
      </ul>
     
      <div class="go-home-btn" id="goHomeBtn"><i class="lni lni-arrow-left"></i></div>
    </div>
            </div>
          );
    }
}
 
export default SideBarApp;