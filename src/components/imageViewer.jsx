import React, { Component } from 'react';
import HeaderApp from "./headerglobal";
import SideBar from "./side";
import FooterApp from "./footer";


class ImageViewer extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <HeaderApp props={this.props}/>
                <SideBar  props={this.props}/>
                <FooterApp  props={this.props}/>
            </div>
         );
    }
}
 
export default ImageViewer;