import React, { Component } from 'react';
import {openUp} from "../redux/actions/SideBarAction";
import {connect} from 'react-redux';

class HeaderGlobal
 extends Component {
     
     sidepop =()=>{
        this.props.openUp()
     }
     

    render() {
       

        return (  
            <div className="header-area" id="headerArea">
            <div className="container h-100 d-flex align-items-center justify-content-between">
            
              <div className="back-button" onClick={this.props.props.history.goBack}><i className="lni lni-arrow-left"></i></div>
              
              <div className="page-heading">
                <h6 className="mb-0">{this.props.props.location.pathname}</h6>
              </div>
              
              <div onClick={this.sidepop} className="suha-navbar-toggler d-flex justify-content-between flex-wrap" id="suhaNavbarToggler"><span></span><span></span><span></span></div>
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
 
export default connect(mapStateToProps,mapDispatchToProps)(HeaderGlobal);