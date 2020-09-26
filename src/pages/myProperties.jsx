import React,{Component} from "react";
import HeaderGlobal from "../components/headerglobal";
import FooterApp from "../components/footer";
import SideBarApp from "../components/side";
import Api from "../apiUtils/api";

class MyProperties extends Component{
    constructor(props) {
        super(props);
        this.userProfile();
        this.state={
            properties:[]
        }
    }

    userProfile=async()=>{
        let api = new Api();
        console.log('loading started')
        let data = await api.getData("/my_properties").then(({ data }) => data);
        console.log('stop loding')
        console.log(data)
        this.setState({ properties: data.property });
    }

    render() {
        return(
            <div>
          <HeaderGlobal props={this.props}/>
          <SideBarApp props={this.props}/>
                <div className="page-content-wrapper">
                    <div className="container">
                        <ul>
                            {this.state.properties.map((properties)=>(
                                <li key={properties.id}>{properties.title}</li>
                            ))}
                        </ul>
                    </div>
                </div>
          <FooterApp/>
            </div>
        )
    }
}

export default MyProperties;