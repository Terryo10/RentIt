import React, { Component } from 'react';
// import SideBarApp from './side';


class HeaderHome extends Component {
    state = { 
        showsidebar:false
     }
    render() { 
        return ( 
            <div>
                <div className="header-area" id="headerArea">
                    <div className="container h-100 d-flex align-items-center justify-content-between">
                        
                        <div className="logo-wrapper"></div>
                    
                        <div className="top-search-form">
                        <form action="#" method="">
                            <input className="form-control" type="search" placeholder="Enter your keyword"></input>
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                        </div>
                
                        <div className="suha-navbar-toggler d-flex flex-wrap"  id="suhaNavbarToggler"><span></span><span></span><span></span></div>
                    </div>
                </div>
            </div>
         );
    }
}


 
export default HeaderHome;