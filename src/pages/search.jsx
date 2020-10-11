import React, { Component } from "react";
import FooterApp from "../components/footer";
import GlobalHeader from "../components/headerglobal";
import SideBar from "../components/side";
import {Link} from "react-router-dom";
import Api from "../apiUtils/api";
import Loading from "../components/loading";
import {basePic} from "../apiUtils/picture";

class SearchProperties extends Component {
  constructor(props) {
    super(props);
    this.searchEngine();
    console.log(this.props);
    this.state = {
      loading: true,
      properties: [],
      search:false
    };
  }

  searchEngine= async() =>{
      console.log(this.props)
      let query = this.props.location.state.detail;
      let api =new Api();
      return await api.getUnauthenticatedData('/search?query='+query).then((data)=>{
         if(data.status===200){
            if(data.data.success=== true){
                this.setState({
                    properties:data.data.properties,
                    loading:false,
                    query:data.data.query,
                    search:true
                })
            } else{
                this.setState({
                    properties:data.data.properties,
                    loading:false,
                    query:data.data.query,
                    search:false
                })
            }
            
         }
      })
  }

  render() {
    return (
      <div>
        <GlobalHeader props={this.props} />
        <SideBar props={this.props} />
        <div>
            {this.state.loading?<Loading/>:
             <div className="page-content-wrapper">
             <div className="container">
             <div className="row g-3">
                 {this.state.search===false?
                 <div className="col-md12 ">
                     <br></br>
                     <br></br>
              <div className="card blog-catagory-card">
                 <div className="card-body"><p text="center" ><i className="lni lni-quotation"></i><span className="d-block">No Search Results Found For {this.state.query}</span></p></div>
              </div>
            </div> :<div>
            <div className="col-md12 ">
                     <br></br>
              <div className="card blog-catagory-card">
                 <div className="card-body"><p text="center" ><i className="lni lni-quotation"></i><span className="d-block">Results  For {this.state.query}</span></p></div>
              </div>
            </div>
            <br></br>
          {this.state.properties.map((property) => (
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
                      <i className="mr-1 lni lni-travel"></i>View Property
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          </div> }
          </div>

            </div>
            </div>
            }
        </div>

        <FooterApp props={this.props} />
      </div>
    );
  }
}

export default SearchProperties;
