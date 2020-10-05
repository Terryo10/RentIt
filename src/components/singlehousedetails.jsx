import React, { Component } from "react";
import HeaderGlobal from "./headerglobal";
import FooterApp from "./footer";
import SideBarApp from "./side";
import { Link, Redirect } from "react-router-dom";
import { basePic } from "../apiUtils/picture";
// import DetailsProperty from "./PropertyContactDetails";
import Api from "../apiUtils/api";

class SingleProperty extends Component {
  state = {
    backgroundImage: "",
    addingtowishlist: false,
  };

  postThings=async()=>{
      let params ={
          property_id :this.props.location.SingleProperty.id
      }
    let api = new Api();
    return await api.postData('/add_to_wishlist',params).then(data=>{
        if(data.status === 200){
            console.log('added to things')
            this.setState({
                addingtowishlist: false,
              });
        }else if(data.status === 220){
            console.log('you have already added this item to your wish list')
            this.setState({
                addingtowishlist: false,
              });
        }
    },error=>{
        console.log('you are not logged in')
        this.props.history.push('/login')
        console.log(error)
    })
  
  }
  addToWishlist =async () => {
    this.setState({
      addingtowishlist: true,
    });
    this.postThings()

  };

  render() {
    if (this.props.location.SingleProperty == null) {
      return <Redirect to={{ pathname: "/home" }} />;
    }
    let kwatabva = this.props.location.SingleProperty;
    let ngongo = basePic;
    let SinglePro = ngongo + kwatabva.imagePath;

    return (
      <div>
        <HeaderGlobal props={this.props} />
        <SideBarApp props={this.props} />
        <div className="page-content-wrapper">
          <div className="product-slides ">
            <div
              className="single-product-slide"
              style={{
                backgroundImage: "url(" + SinglePro + ")",
                height: "300px",
              }}
            ></div>
          </div>

          <div className="product-description pb-3">
            <div className="product-title-meta-data bg-white mb-3 py-3">
              <div className="container d-flex justify-content-between">
                <div className="p-title-price">
                  <h6 className="mb-1">{kwatabva.title}</h6>
                  <p className="sale-price mb-0">${kwatabva.price}</p>
                  <p>{kwatabva.day_or_month}</p>
                  <Link
                    to={{ pathname: "/property_details/", property: kwatabva }}
                  >
                    <button className="btn btn-success ml-3">
                      <i className="lni lni-phone"></i> View Location & Contact
                      Details
                    </button>
                  </Link>
                </div>
                <div className="p-wishlist-share">
                  {this.state.addingtowishlist ? (
                    <div className="spinner-border text-danger" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    <p
                      onClick={() => {
                        this.addToWishlist();
                      }}
                    >
                      <i className="lni lni-heart" style={{ color: "red" }}></i>
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="p-specification bg-white mb-3 py-3">
              <div className="container">
                <h6>Specifications</h6>
                <p>{kwatabva.description}</p>
                <ul className="mb-3 pl-3">
                  {kwatabva.city ? (
                    <li>
                      <i className="lni lni-checkmark-circle"> </i>{" "}
                      {kwatabva.city} :City
                    </li>
                  ) : null}
                  {kwatabva.province ? (
                    <li>
                      <i className="lni lni-checkmark-circle"> </i>{" "}
                      {kwatabva.province} :Province
                    </li>
                  ) : null}
                  {kwatabva.country ? (
                    <li>
                      <i className="lni lni-checkmark-circle"> </i>{" "}
                      {kwatabva.country} :Country
                    </li>
                  ) : null}
                  {kwatabva.yard_size ? (
                    <li>
                      <i className="lni lni-checkmark-circle"> </i> ({" "}
                      {kwatabva.yard_size} ) :Yard Size
                    </li>
                  ) : null}
                  {kwatabva.bedroom_number ? (
                    <li>
                      <i className="lni lni-checkmark-circle"> </i>{" "}
                      {kwatabva.bedroom_number} :Bedrooms
                    </li>
                  ) : null}
                  {kwatabva.toilet_number ? (
                    <li>
                      <i className="lni lni-checkmark-circle"> </i>{" "}
                      {kwatabva.toilet_number} :Toilets
                    </li>
                  ) : null}
                  {kwatabva.bathroom_number ? (
                    <li>
                      <i className="lni lni-checkmark-circle"> </i>{" "}
                      {kwatabva.bathroom_number} :Bathrooms
                    </li>
                  ) : null}
                  {kwatabva.garage_number ? (
                    <li>
                      <i className="lni lni-checkmark-circle"> </i>{" "}
                      {kwatabva.garage_number} :Garages
                    </li>
                  ) : null}
                </ul>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quasi, eum? Id, culpa? At officia quisquam laudantium nisi
                  mollitia nesciunt, qui porro asperiores cum voluptates placeat
                  similique recusandae in facere quos vitae?
                </p>
              </div>
            </div>
          </div>
        </div>
        <FooterApp />
      </div>
    );
  }
}

export default SingleProperty;
