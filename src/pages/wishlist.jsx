import React,{Component} from "react";
import HeaderGlobal from "../components/headerglobal";
import FooterApp from "../components/footer";
import SideBarApp from "../components/side";

class MyWishlist extends Component{
    constructor(props){
        super(props)
        this.fetchWishlist();
        this.state={
            loading:true
        }
    }

    fetchWishlist=()=>{
        console.log('fetching')
    }
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

export default MyWishlist;