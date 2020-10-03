import React, { Component } from "react";
import FooterApp from "../components/footer";
import HeaderGlobal from "../components/headerglobal";
import Api from "../apiUtils/api";
import SideBarApp from "../components/side";

class PostProperty extends Component {
  constructor(props) {
    super(props);
    this.getPropertyType();
    this.state = {
      location: "",
      street: "",
      city: "",
      province: "",
      title:"",
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
      selectedFile: "",
      yard_size:"",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
  }
  //Getting lists for selection

  getPropertyType = async () => {
    let api = new Api();
    let data = await api.getData("/categories").then(({ data }) => data);
    this.setState({ categories: data.category });

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

  //Handling file changes
  onFileChange(event) {
    // Update the state
    event.preventDefault();
    let file = event.target.files[0];
    this.setState({
      selectedFile:file
    })
    

  }

  //Posting data

  Post = async (event) => {
    event.preventDefault();
    const fd = new FormData();
    fd.append('image',this.state.selectedFile,this.state.selectedFile.name);
    fd.append('city',this.state.city);
    fd.append('street',this.state.street);
    fd.append('province',this.state.province);
    fd.append('country',this.state.country);
    fd.append('toilet_number',this.state.toilet_number);
    fd.append('bedroom_number',this.state.bedroom_number);
    fd.append('bathroom_number',this.state.bathroom_number);
    fd.append('garage_number',this.state.garage_number);
    fd.append('description',this.state.description);
    fd.append('price',this.state.price);
    fd.append('day_or_month',this.state.day_or_month);
    fd.append('contact_info',this.state.contact_info);
    fd.append('categories_id',this.state.categories_id);
    fd.append('yard_size',this.state.yard_size);
    fd.append('title',this.state.title);


    const api = new Api();
    return api.postData('properties',fd).then(data=>{
      if(data.status ===200){
          this.props.history.push({pathname:'/property_added',state:data.data})
      }else if(data.status ===218){
            console.log('subscribe to post')
      }else if (data.status ===217){
          console.log('expired subscription')
      }
        else if (data.status ===215){
          console.log('Your subscription is not active')
      }


    }


    )


  };

  render() {
    return (
      <div>
        <HeaderGlobal props={this.props}></HeaderGlobal>
        <SideBarApp props={this.props}/>
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
                        <span>Title</span>
                      </div>
                      <input
                          className="form-control"
                          type="text"
                          name="title"
                          placeholder="e.g House in chitungwiza"
                          value={this.state.title}
                          onChange={this.handleInputChange}
                      ></input>
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
                        <i className="lni lni-home"></i>
                        <span>Yard Size (optional)</span>
                      </div>
                      <input
                        className="form-control"
                        type="number"
                        name="yard_size"
                        value={this.state.yard_size}
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
                      <input type="file" onChange={this.onFileChange}></input>
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
