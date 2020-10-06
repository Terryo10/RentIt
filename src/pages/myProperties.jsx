import React,{Component} from "react";
import HeaderGlobal from "../components/headerglobal";
import FooterApp from "../components/footer";
import SideBarApp from "../components/side";
import Api from "../apiUtils/api";
import {Link} from "react-router-dom";
import {basePic} from "../apiUtils/picture";
import Loading from "../components/loading";

class MyProperties extends Component{
    constructor(props) {
        super(props);
        this.userProfile();
        this.state={
            properties:[],
            loading:true
        }
    }

    userProfile=async()=>{
        let api = new Api();
        console.log('loading started')
        let data = await api.getData("/my_properties").then(({ data }) => data);
        this.setState({
           properties: data.property ,
           loading:false
          });
    }

    render() {
        return(
            <div>
          <HeaderGlobal props={this.props}/>
          <SideBarApp props={this.props}/>
                <div className="page-content-wrapper">
                    <div className="container">
                      {this.state.loading?<Loading/>:
                    <div className="row g-3">
                            {this.state.properties.map((property)=>(
                                  <div key={property.id} className="col-12 col-md-6">
                                  <div className="card weekly-product-card">
                                    <div className="card-body d-flex align-items-center">
                                      <div className="product-thumbnail-side">
                                        <span className="badge badge-success">RentIt</span>
                    
                                        <Link
                                          className="product-thumbnail d-block"
                                          to={{pathname:'/single_property/',SingleProperty:property}}
                                        >
                                          <img src={basePic+property.imagePath} alt=""></img>
                                        </Link>
                                      </div>
                                      <div className="product-description">
                                        <Link to={{pathname:'/single_property/',SingleProperty:property}} className="product-title d-block" href="/">
                                          {property.title}
                                        </Link>
                                        <p className="sale-price">
                                          <i className="lni lni-dollar"></i>{property.price}
                                        </p>
                    
                                        <Link to={{pathname:'/single_property/',SingleProperty:property}} className="btn btn-success btn-sm add2cart-notify">
                                          <i className="mr-1 lni lni-travel"></i>Edit Property
                                        </Link>
                                        <br></br>
                                        {property.taken? <h1>kkkk</h1>:
                                        <Link to={{pathname:'/single_property/',SingleProperty:property}} className="btn btn-success btn-sm add2cart-notify">
                                        <i className="mr-1 lni lni-travel"></i>Set as Taken
                                      </Link>
                                        }
                                        
                                        
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              
                            ))}
                        </div>
    }
                    </div>
                </div>
          <FooterApp/>
            </div>
        )
    }
}

export default MyProperties;