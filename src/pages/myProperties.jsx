import React,{Component} from "react";
import HeaderGlobal from "../components/headerglobal";
import FooterApp from "../components/footer";
import SideBarApp from "../components/side";

class MyProperties extends Component{
    render() {
        return(
            <div>
          <HeaderGlobal props={this.props}/>
          <SideBarApp props={this.props}/>
          <FooterApp/>
            </div>
        )
    }
}

export default MyProperties;