import React, { Component } from "react";
import FooterApp from "../components/footer";
import HeaderGlobal from "../components/headerglobal";
import api from "../apiUtils/api";

class PostProperty extends Component {
  constructor(props) {
    super(props);
    this.getPropertyType();
    this.state = {
      location: "",
      street: "",
      city: "",
      province: "",
      country: "",
      bedroom_number: "",
      toilet_number: "",
      bathroom_number: "",
      garage_number: "",
      description: "",
      price: "",
      day_or_month: "",
      contact_info: "",
      categories_id: "",
      categories: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  //Getting lists for selection

  getPropertyType = async () => {
    let data = await api.get("/categories").then(({ data }) => data);
    this.setState({ categories: data.category });
    console.log(data.category);
  };

  //handling all form changes ka1
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  //Posting data

  Post = async (event) => {
    event.preventDefault();
    let formData = {};

    api
      .post("/properties",
        {
          location: this.state.location,
          street: this.state.street,
          city: this.state.city,
          province: this.state.province,
          country: this.state.country,
          bedroom_number: this.state.bedroom_number,
          toilet_number: this.state.toilet_number,
          bathroom_number: this.state.bathroom_number,
          garage_number: this.state.garage_number,
          description: this.state.description,
          price: this.state.price,
          day_or_month: this.state.day_or_month,
          contact_info: this.state.contact_info,
          categories_id: this.state.categories_id,
        },
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
        <HeaderGlobal></HeaderGlobal>
        <div className="page-content-wrapper">
          <div className="container">
            <div className="profile-wrapper-area py-3">
              <div className="card user-info-card">
                <div className="card-body p-4 d-flex align-items-center">
                  <div className="user-profile mr-3">
                    <img src="assets/img/core-img/rentit.png" alt=""></img>
                    <div className="change-user-thumb">
                      <form>
                        <input
                          className="form-control-file"
                          type="file"
                        ></input>
                        <button>
                          <i className="lni lni-pencil"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="user-info">
                    <p className="mb-0 text-white">Post Your propery here</p>
                    <h5 className="mb-0">Rent It</h5>
                  </div>
                </div>
              </div>

              <div className="card user-data-card">
                <div className="card-body">
                  <form onSubmit={this.Post}>
                    <div className="mb-3">
                      <div className="title mb-2">
                        <i className="lni lni-home"></i>
                        <span>Select Property Type</span>
                      </div>
                      <div className="form-group">
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                          name="categories_id"
                          value={this.state.categories_id}
                          onChange={this.handleInputChange}
                        >
                          {this.state.categories.map((categories) => (
                            <option value={categories.id} key={categories.id}>
                              {categories.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="title mb-2">
                        <i className="lni lni-map-marker"></i>
                        <span>street</span>
                      </div>
                      <input
                        className="form-control"
                        type="text"
                        name="street"
                        value={this.state.street}
                        onChange={this.handleInputChange}
                      ></input>
                    </div>
                    <div className="mb-3">
                      <div className="title mb-2">
                        <i className="lni lni-map-marker"></i>
                        <span>city</span>
                      </div>
                      <input
                        className="form-control"
                        type="text"
                        name="city"
                        value={this.state.city}
                        onChange={this.handleInputChange}
                      ></input>
                    </div>
                    <div className="mb-3">
                      <div className="title mb-2">
                        <i className="lni lni-map-marker"></i>
                        <span>Province</span>
                      </div>
                      <input
                        className="form-control"
                        type="text"
                        name="province"
                        value={this.state.province}
                        onChange={this.handleInputChange}
                      ></input>
                    </div>
                    <div className="mb-3">
                      <div className="title mb-2">
                        <i className="lni lni-map-marker"></i>
                        <span>Country</span>
                      </div>
                      <input
                        className="form-control"
                        type="text"
                        name="country"
                        value={this.state.country}
                        onChange={this.handleInputChange}
                      ></input>
                    </div>
                    <div className="mb-3">
                      <div className="title mb-2">
                        <i className="lni lni-phone"></i>
                        <span>Phone</span>
                      </div>
                      <input
                        className="form-control"
                        type="tel"
                        name="contact_info"
                        value={this.state.contact_info}
                        onChange={this.handleInputChange}
                      ></input>
                    </div>
                    <div className="mb-3">
                      <div className="title mb-2">
                        <i className="lni lni-credit-cards"></i>
                        <span>select charging Method</span>
                      </div>
                      <div className="form-group">
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                          name="day_or_month"
                          value={this.state.day_or_month}
                          onChange={this.handleInputChange}
                        >
                          <option value="Per day">Per day</option>
                          <option value="Per week">Per week </option>
                          <option value="Per Month">Per Month</option>
                          <option value="Per Quater Year">
                            Per Quater Yearly
                          </option>
                          <option value="Per Semi Year">Per Semi Yearly</option>
                          <option value="Per Year">Per year</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="title mb-2">
                        <i className="lni lni-dollar"></i>
                        <span>Price</span>
                      </div>
                      <input
                        className="form-control"
                        type="number"
                        name="price"
                        value={this.state.price}
                        onChange={this.handleInputChange}
                      ></input>
                    </div>
                    <div className="mb-3">
                      <div className="title mb-2">
                        <i className="lni lni-home"></i>
                        <span>Number Of Bedrooms (optional)</span>
                      </div>
                      <input
                        className="form-control"
                        type="number"
                        name="bedroom_number"
                        value={this.state.bedroom_number}
                        onChange={this.handleInputChange}
                      ></input>
                    </div>
                    <div className="mb-3">
                      <div className="title mb-2">
                        <i className="lni lni-home"></i>
                        <span>Number Of Bathrooms (optional)</span>
                      </div>
                      <input
                        className="form-control"
                        type="number"
                        name="bathroom_number"
                        value={this.state.bathroom_number}
                        onChange={this.handleInputChange}
                      ></input>
                    </div>
                    <div className="mb-3">
                      <div className="title mb-2">
                        <i className="lni lni-home"></i>
                        <span>Number Of Toilets (optional)</span>
                      </div>
                      <input
                        className="form-control"
                        type="number"
                        name="toilet_number"
                        value={this.state.toilet_number}
                        onChange={this.handleInputChange}
                      ></input>
                    </div>
                    <div className="mb-3">
                      <div className="title mb-2">
                        <i className="lni lni-home"></i>
                        <span>Number Of Garages (optional)</span>
                      </div>
                      <input
                        className="form-control"
                        type="number"
                        name="garage_number"
                        value={this.state.garage_number}
                        onChange={this.handleInputChange}
                      ></input>
                    </div>
                    <div className="mb-3">
                      <div className="title mb-2">
                        <i className="lni lni-book"></i>
                        <span>Description</span>
                      </div>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleInputChange}
                      ></textarea>
                    </div>

                    <div className="mb-3">
                      <div className="title mb-2">
                        <i className="lni lni-image"></i>
                        <span> Main Image</span>
                      </div>
                      <input type="file"></input>
                    </div>
                    <button className="btn btn-success w-100" type="submit">
                      Save Property
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterApp></FooterApp>
      </div>
    );
  }
}

export default PostProperty;
