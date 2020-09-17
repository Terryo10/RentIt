import React, { Component } from "react";
import api from "../apiUtils/api";

class Houses extends Component {
  state = {
    houses: [],
    
  };
  constructor(props) {
    super(props);
    this.gethouses();
  }
  gethouses = async () => {
    let data = await api.get("/properties").then(({ data }) => data);
    this.setState({ houses: data.products });
    console.log(data.products);
  };
  //
  render() {
    return (
      <div className="weekly-best-seller-area py-3">
        <div className="container">
        <div className="row g-3">
          {this.state.houses.map((houses) => (
            <div key={houses.id} className="col-12 col-md-6">
              <div className="card weekly-product-card">
                <div className="card-body d-flex align-items-center">
                  <div className="product-thumbnail-side">
                    <span className="badge badge-success">RentIt</span>
                    
                    <a
                      className="product-thumbnail d-block"
                      href="single-product.html"
                    >
                      <img src={'http://localhost:8000/storage/property_images/'+houses.imagePath} alt=""></img>
                    </a>
                  </div>
                  <div className="product-description">
                    <a className="product-title d-block" href="/">
                      {houses.city}
                    </a>
                    <p className="sale-price">
                      <i className="lni lni-dollar"></i>${houses.price}<span>$89</span>
                    </p>
                    <div className="product-rating">
                      <i className="lni lni-star-filled"></i>4.88 (39)
                    </div>
                    <a className="btn btn-success btn-sm add2cart-notify" href="/">
                      <i className="mr-1 lni lni-cart"></i>Buy Now
                    </a>
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
