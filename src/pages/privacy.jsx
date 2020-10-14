import React, { Component } from 'react';
import Globalheader from "../components/headerglobal";
import SideBarApp from "../components/side";
import FooterApp from "../components/footer";

class Privacy extends Component {
    state = {  }
    render() { 
        return (  
        <div>
            <Globalheader props={this.props} />
        <SideBarApp props={this.props} />
        <FooterApp props={this.props} />
        </div>
        );
    }
}
 
export default Privacy;