import React, {Component} from "react";
import FooterApp from "../footer";
import HeaderGlobal from "../headerglobal";
import SideBarApp from "../side";

class UpdateSubscription extends Component{
    render() {
        return (
            <div>
                <HeaderGlobal props={this.props.props}/>
                <SideBarApp props={this.props}/>
                <div className="page-content-wrapper">
                    <h1>Your subscription expired please update</h1>
                </div>
                <FooterApp props={this.props}/>
            </div>
        )
    }
}

export default UpdateSubscription;