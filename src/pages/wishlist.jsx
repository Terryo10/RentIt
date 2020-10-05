import React, { Component } from "react";
import { Link } from "react-router-dom";
import { basePic } from "../apiUtils/picture";
import HeaderGlobal from "../components/headerglobal";
import FooterApp from "../components/footer";
import SideBarApp from "../components/side";
import Api from "../apiUtils/api";
import Loading from "../components/loading";

class MyWishlist extends Component {
  constructor(props) {
    super(props);
    this.fetchWishlist();
    this.state = {
      loading: true,
      removingFromwhishlist: false,
      properties: [],
    };
  }

  firelist = async () => {
    let api = new Api();
    return await api.getData("my_wishlist").then((data) => {
      if (data.status === 200) {
        console.log(data);
        this.setState({
          loading: false,
          properties: data.data.wishlist,
        });
      }
    });
  };
  fetchWishlist = async () => {
    console.log("fetching");
    this.firelist();
  };

  removeFromWishlist = async(id) => {
    console.log(id);
    this.setState({
      removingFromwhishlist: true,
    });
    let postBody ={
        wishlist_id: id
    }
    let api = new Api();
    return await api.postData("remove_wishlist",postBody).then((data)=>{
        if (data.status === 200){
            console.log(data)
            this.setState({
                removingFromwhishlist: false,
              });
              this.fetchWishlist();
        }
    })
    
  };
  render() {
    return (
      <div>
        <HeaderGlobal props={this.props} />
        <SideBarApp props={this.props} />
        {this.state.loading ? (
          <Loading />
        ) : (
          <div className="weekly-best-seller-area py-3">
            <div className="page-content-wrapper">
              <div className="container">
                <div className="row g-3">
                  {this.state.properties.map((property) => (
                    <div key={property.property.id} className="col-12 col-md-6">
                      <div className="card weekly-product-card">
                        <div className="card-body d-flex align-items-center">
                          <div className="product-thumbnail-side">
                            <span className="badge badge-success">RentIt</span>

                            <Link
                              className="product-thumbnail d-block"
                              to={{
                                pathname: "/single_property/",
                                SingleProperty: property.property,
                              }}
                            >
                              <img
                                src={basePic + property.property.imagePath}
                                alt=""
                              ></img>
                            </Link>
                          </div>
                          <div className="product-description">
                            <Link
                              to={{
                                pathname: "/single_property/",
                                SingleProperty: property.property,
                              }}
                              className="product-title d-block"
                              href="/"
                            >
                              {property.property.title}
                            </Link>
                            <p className="sale-price">
                              <i className="lni lni-dollar"></i>
                              {property.property.price}
                            </p>

                            
                            <br></br>
                            {this.state.removingFromwhishlist ? (
                              <div
                                className="spinner-border text-danger"
                                role="status"
                              >
                                <span className="sr-only">Loading...</span>
                              </div>
                            ) : (
                              <button
                                className="btn btn-danger btn-sm add2cart-notify"
                                onClick={() => {
                                  this.removeFromWishlist(property.id);
                                }}
                              >
                                <i className="mr-1 lni lni-cancel"></i>Remove
                                from wishlist
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <FooterApp />
      </div>
    );
  }
}

export default MyWishlist;
