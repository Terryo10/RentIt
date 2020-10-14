import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import Api from "../apiUtils/api";
import {  subPic } from "../apiUtils/picture";

class PropertyImages extends Component {
  constructor(props) {
    super(props);
    this.fetchImages();
    this.state = {
      images: "",
      loading: true,
    };
  }

  fetchImages = async () => {
    let api = new Api();
    return await api
      .getData("property_images/" + this.props.props.match.params.property_id)
      .then((data) => {
        if (data.status === 200) {
          this.setState({
            images: data.data.images,
            loading: false,
          });
          console.log(this.state);
        }
      });
  };
  render() {
    return (
      <div>
        {this.state.loading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="flash-sale-wrapper">
            <div className="container">
              <div className="section-heading d-flex align-items-center justify-content-between">
                <h6 className="ml-1">More Property Images</h6>
              </div>

              <OwlCarousel>
                {this.state.images.map((images) => (
                  <div key={images.id} className="card flash-sale-card">
                    <div className="card-body">
                      <img src={subPic + images.imagePath} alt="" />
                   
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default PropertyImages;
