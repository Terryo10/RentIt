import React, { Component } from 'react';
class HeaderGlobal
 extends Component {
    state = { 
        sidebar:false
     }

     sidepop =()=>{

     }
  
    render(props) { 
      console.log(props)
        return (  
            <div className="header-area" id="headerArea">
            <div className="container h-100 d-flex align-items-center justify-content-between">
            
              <div className="back-button"><a href="shop-grid.html"><i className="lni lni-arrow-left"></i></a></div>
              
              <div className="page-heading">
                <h6 className="mb-0">RouteName</h6>
              </div>
              
              <div onClick={this.sidepop} className="suha-navbar-toggler d-flex justify-content-between flex-wrap" id="suhaNavbarToggler"><span></span><span></span><span></span></div>
            </div>
          </div>
          
        );
    }
}
 
export default HeaderGlobal
;