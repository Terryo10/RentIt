import React, { Component } from "react";
import FooterApp from "../footer";
import SideBar from "../side";
import HeaderApp from "../headerglobal";
import Api from "../../apiUtils/api";
import {subPic} from "../../apiUtils/picture"
import Loading from "../loading";


class ImageEditor extends Component {
  constructor(props) {
    super(props);
    this.fetchImages();
    this.state = {
      images: "",
      loading: true,
      deleting:false
    };
  }

  deleteImage=async(id)=>{
    this.setState({
      deleting:true
    })
    let api = new Api();
    return await api
      .deleteData("property_images/" + id)
      .then((data) => {
        if (data.status === 200) {
          console.log(data)
          this.setState({
            deleting: false,
          });
          this.fetchImages()
          console.log(this.state);
        }
      });

  }

  fetchImages = async () => {
    let api = new Api();
    return await api
      .getData("property_images/" + this.props.match.params.property_id)
      .then((data) => {
        if (data.status === 200) {
          console.log(data)
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
        <HeaderApp props={this.props} />
        <SideBar props={this.props} />
        {this.state.loading ? (
          <Loading />
        ) : (
          <div className="weekly-best-seller-area py-3">
            <div className="page-content-wrapper">
              <div className="container">
                <div className="row g-3">
                  {this.state.images.map((images) => (
                    <div key={images.id} className="col-12 col-md-6">
                      <div className="card weekly-product-card">
                        <div className="card-body d-flex align-items-center">
                          <div className="product-thumbnail-side">
                            <span className="badge badge-success">RentIt</span>

                            <div
                              className="product-thumbnail d-block"
            
                            >
                              <img
                                src={subPic + images.imagePath}
                                alt=""
                              ></img>
                            </div>
                          </div>
                          <div className="product-description">
                            
                            <br></br>
                            {this.state.deleting ? (
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
                                  this.deleteImage(images.id);
                                }}
                              >
                                <i className="mr-1 lni lni-cancel"></i>Delete Image
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
        <FooterApp props={this.props} />
      </div>
    );
  }
}

export default ImageEditor;
