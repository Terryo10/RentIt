import React, { Component } from "react";
import FooterApp from "./footer";
import SideBarApp from "./side";
import HeaderGlobal from "./headerglobal";
import {propertyDetails} from "../redux/actions/SubscriptionAction";
import {connect} from "react-redux";
import axios from "axios";
import Loading from "./loading";
import {Link} from "react-router-dom";


class DetailsProperty extends Component {

  constructor(props){
    super(props)
    this.state={
        loading:true,
        id:this.props.match.params.property_id,
        propertyData:{},
        subscribe:false,
        error:false,
    }
    this.getDetails()

  }


  getDetails=async()=>{
      let baseUrl = "http://127.0.0.1:8000";

      var url = "/api/properties/";
      const token = await localStorage.getItem('token');
      let requestOptions ={
          headers:{'Authorization':`Bearer ${token}`, 'content-type':'Application/json'},
      }
      axios.get(`${baseUrl}${url}${this.props.match.params.property_id}`, requestOptions).then((res) => {
          if (res.status === 200) {
              console.log(res.data);
              this.setState({
                  propertyData:res.data,
                  loading: false,

              });
            console.log(this.state.propertyData)
          }else if(res.status === 217){
              console.log('subscription error');
              //get errors
              this.setState({
                  loading: false,
                  subscribe: true,
              });
          }else{
              console.log('failure error');
              this.setState({
                  subscribe: false,
                  loading: false,
                  error: true,

              });
          }
      });

  }
  render() {

    return (
      <div>
        <HeaderGlobal props={this.props} />
        <SideBarApp props={this.props} />
          {this.state.loading === true ? <Loading props={this.props}/> :
              this.state.subscribe ?    <div className="page-content-wrapper">
                      <div className="order-success-wrapper">
                          <div className="content"><i className="lni lni-cross-circle"></i>
                              <h5>Sorry</h5>
                              <p>Oops you have to subscribe to view</p><Link to="/pay"
                                                                className="btn btn-warning mt-3" >Subscribe To Unlock</Link>
                          </div>
                      </div>
                  </div>:
                  this.state.error ?    <div className="page-content-wrapper"><h1>Error Please Reload</h1></div>:
                  <div className="page-content-wrapper">

                  <div className="settings-wrapper py-3">
                      <div className="card settings-card">
                          <div className="card-body">

                              <div className="single-settings d-flex align-items-center justify-content-between">
                                  <div className="title"><i className="lni lni-question-circle"></i><span>{this.state.propertyData.propertyDetails.street} <br></br>
                                    </span></div>
                                  <div className="data-content"><a className="pl-4" href={"https://maps.google.com/?q="+this.state.propertyData.propertyDetails.street}><i className="lni lni-travel"></i></a></div>
                              </div>
                          </div>
                      </div>

                      <div className="card settings-card">
                          <div className="card-body">

                              <div className="single-settings d-flex align-items-center justify-content-between">
                                  <div className="title"><i className="lni lni-question-circle"></i><span>{this.state.propertyData.propertyDetails.contact_info}</span></div>
                                  <div className="data-content"><a className="pl-4" href={`tel:/${this.state.propertyData.propertyDetails.contact_info}`}><i className="lni lni-phone"></i></a></div>
                              </div>
                          </div>
                      </div>
                      <div className="card settings-card">
                          <div className="card-body">
                              <div className="single-settings d-flex align-items-center justify-content-between">
                                  <div className="title"><i className="lni lni-question-circle"></i><span>Description: {this.state.propertyData.propertyDetails.description}</span></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          }
        <FooterApp props={this.props} />
      </div>
    );
  }
}
const mapStateToProps =(state)=>{
    return{
        details:state.subscription.details,
        subscribe:state.subscription.subscribe,
        activateSubscription:state.subscription.activateSubscription,
        updateSubscription:state.subscription.updateSubscription,
        loading:state.subscription.loading,
        fetching:state.subscription.fetching,
        serverRecheck:state.subscription.serverRecheck
    }
};
const mapDispatchToProps =(dispatch)=> {
    return {
        propertyDetails: (props) => dispatch(propertyDetails(props))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DetailsProperty) ;
