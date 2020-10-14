import React, { Component } from 'react'
import FooterApp from "../footer";
import SideBar from "../side";
import HeaderApp from "../headerglobal";


class EditProperties extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    render() { 
        return ( 
            <div>
                 <HeaderApp props={this.props}/>
          <SideBar props={this.props}/>
          <FooterApp props={this.props}/>

            </div>
         );
    }
}
 
export default EditProperties;