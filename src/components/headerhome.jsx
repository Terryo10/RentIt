import React, { Component } from 'react';
import {openUp} from "../redux/actions/SideBarAction";
import {connect} from "react-redux";



class HeaderHome extends Component {
    constructor(props) {
        super(props);

        this.state={
        pola:false
        }
    }

    sidepop =(e)=>{
        this.setState({
            pola:true
        })
        this.props.openUp()


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
                
                        <div className="suha-navbar-toggler d-flex flex-wrap"  id="suhaNavbarToggler" onClick={this.sidepop}><span ></span><span></span><span></span></div>

                    </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(HeaderHome);