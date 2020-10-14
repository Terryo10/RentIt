import React, { Component } from "react";
import HeaderGlobal from "./headerglobal";
import FooterApp from "./footer";
import SideBarApp from "./side";
import { Link } from "react-router-dom";
import { basePic } from "../apiUtils/picture";
// import DetailsProperty from "./PropertyContactDetails";
import PropertyImages from "./propertyImages";
import Api from "../apiUtils/api";
import Loading from "./loading";
import {connect} from 'react-redux';
import Notify from "../redux/services/notificate";
import { ToastContainer} from 'react-toastify';
import {NotificationDetails} from "../redux/actions/NotificationAction";

class SingleProperty extends Component {
  constructor(props){
    super(props)
    if(this.props.location.SingleProperty != null){
      this.state = {
        backgroundImage: "",
        isLoading:false,
        addingtowishlist: false,
        property:this.props.location.SingleProperty,
        propertyNotFound:false
      };
    }else{
      this.getProperty()
    }
    this.settings()
    
  }
  
  settings=()=>{
    
  }

  getProperty=async()=>{
    this.state={
      isLoading:true,
    }
    let api = new Api();
    return await api.getData('single_property/'+this.props.match.params.property_id).then((data)=>{
      if(data.status===200){
        if(data.data.success === true){
          this.setState({
          property:data.data.property,
          isLoading:false,
          propertyNotFound:false
        })
        }else{
          console.log(data)
          this.setState({
            isLoading:false,
            propertyNotFound:true
          })
        }
        
      }
    })

  }
  postThings=async()=>{
      let params ={
          property_id :this.state.property.id
      }
    let api = new Api();
    return await api.postData('/add_to_wishlist',params).then(data=>{
        if(data.data.success === true){
            console.log('added to things')
            this.setState({
                addingtowishlist: false,
              });
              let params ={
                type:"success",
                message:data.data.message,
              }
              this.props.NotificationDetails(params)
        }
            console.log('you have already added this item to your wish list')
            this.setState({
                addingtowishlist: false,
              });
              let params ={
                type:"error",
                message:data.data.message,
              }
              this.props.NotificationDetails(params)
        
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
    if(this.state.isLoading === true){
      return(<div>
        <HeaderGlobal props={this.props} />
        <SideBarApp props={this.props} />
       <Loading props={this.props}/>
       <FooterApp props={this.props} />
      </div>
      );
    }else if(this.state.propertyNotFound=== true){
      return (
      <div>
         <HeaderGlobal props={this.props} />
        <SideBarApp props={this.props} />
        <div className="page-content-wrapper">
        <div className="container">
        <div className="col-md12 ">
                     <br></br>
                     <br></br>
              <div className="card blog-catagory-card">
                 <div className="card-body"><p text="center" ><i className="lni lni-quotation"></i><span className="d-block">That Property does not exist in our records</span></p></div>
              </div>
            </div>
          </div>
          </div>
       <FooterApp props={this.props} />
      </div>
      )
    }

    if(this.props.type === 'error'){
      let notif= new Notify()
      notif.error(this.props.message)
      let params ={
        type:"reset",
        message:"",
      }
      setTimeout(()=>{
        this.props.NotificationDetails(params)
        this.setState({
          isLoding:false
        })
      },2000)
     
     
    }
    if(this.props.type === 'success'){
      let notif= new Notify()
      notif.success(this.props.message)
      let params ={
        type:"reset",
        message:"",
      }
      setTimeout(()=>{
        this.props.NotificationDetails(params)
      },2000)
    }
    let kwatabva = this.state.property;
    let ngongo = basePic;
    let SinglePro = ngongo + kwatabva.imagePath;
    return (
      <div>
        <HeaderGlobal props={this.props} />
        <SideBarApp props={this.props} />
        <ToastContainer />
        <div className="page-content-wrapper">
        <div className="blog-details-post-thumbnail" style={{
                backgroundImage: "url(" + SinglePro + ")",
                height: "300px"
              }}>
        <div className="container">
          <div className="post-bookmark-wrap">
            <a className="post-bookmark" href="/"><i className="lni lni-bookmark"></i></a>
          </div>
        </div>
      </div>
          
          <div className="product-description pb-3">
            <div className="product-title-meta-data bg-white mb-3 py-3">
              <div className="container d-flex justify-content-between">
                <div className="p-title-price">
                  <h6 className="mb-1">{kwatabva.title}</h6>
                  <p className="sale-price mb-0">${kwatabva.price}</p>
                  <p>{kwatabva.day_or_month}</p>
                  <Link
                    to={{ pathname: "/property_details/",property: kwatabva }}
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
            <div>
              <PropertyImages props={this.props}/>
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
        <FooterApp props={this.props} />
      </div>
    );
  }
}


const mapStateToProps =(state)=>{
  return{
    // authResponse:state.auth.authResponse,
    message:state.notification.message,
    type:state.notification.type
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    NotificationDetails:(params)=>dispatch(NotificationDetails(params))
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(SingleProperty);
