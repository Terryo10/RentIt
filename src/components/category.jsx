import React ,{Component} from "react";
import HeaderGlobal from "./headerglobal";
import FooterApp from "./footer";
import SideBarApp from "./side";

class CategorySingle extends Component{
    render() {
        return(
            <div>
               <HeaderGlobal props={this.props}/>
                <SideBarApp props={this.props}/>
                <div className="page-content-wrapper">
                    <div className="container">

                        <h1>We are going to display here</h1>
                    </div>
                </div>
               <FooterApp/>
            </div>
        )
    }
}
export default CategorySingle;