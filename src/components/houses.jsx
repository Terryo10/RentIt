import React, { Component } from "react";
import Api from "../apiUtils/api";
import {Link} from "react-router-dom";
import {basePic} from "../apiUtils/picture";
import Loading from "./loading";


class Houses extends Component {

  constructor(props) {
    super(props);
    this.gethouses();
    this.state = {
      properties: [],
      isLoading:true,

    };
  }
  gethouses = async () => {
    let api = new Api();
    let data = await api.getData("/properties").then(({ data }) => data);
    this.setState({
      isLoading:false,
      properties: data.properties
    })
  };
  //
  render() {
    if(this.state.isLoading === true){
     return <Loading props={this.props}/>
    }
    return (
      <div className="weekly-best-seller-area py-3">
        <div className="container">
        <div className="row g-3">
          {this.state.properties.map((property) => (
            <div key={property.id} className="col-12 col-md-6">
              <div className="card weekly-product-card">
                <div className="card-body d-flex align-items-center">
                  <div className="product-thumbnail-side">
                    <span className="badge badge-success">RentIt</span>
                    <Link
                      className="product-thumbnail d-block"
                      to={{pathname:'/single_property/'+property.id,SingleProperty:property}}
                    >
                      <img src={basePic+property.imagePath} alt=""></img>
                    </Link>
                  </div>
                  <div className="product-description">
                    <Link to={{pathname:'/single_property/'+property.id,SingleProperty:property}} className="product-title d-block" href="/">
                      {property.title}
                    </Link>
                    <p className="sale-price">
                      <i className="lni lni-dollar"></i>{property.price}
                    </p>

                    <Link to={{pathname:'/single_property/'+property.id,SingleProperty:property}} className="btn btn-success btn-sm add2cart-notify">
                      <i className="mr-1 lni lni-travel"></i>View Property
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Houses;
