import React, { Component } from "react";
import FooterApp from "./footer";
import SideBarApp from "./side";
import HeaderGlobal from "./headerglobal";
import {Link} from "react-router-dom";
import {propertyDetails} from "../redux/actions/SubscriptionAction";
import {connect} from "react-redux";
import PayService from "../pages/payments/payservice";
import ActivateSubscription from "./subscription handlers/activateSubscription";
import UpdateSubscription from "./subscription handlers/updateSubscription";
import Loading from "./loading";


class DetailsProperty extends Component {

  constructor(props){
    super(props)
    this.state={
        id:this.props.match.params.property_id
    }
    this.getDetails()

  }


  getDetails=async()=>{
      let id = this.state.id
      
      this.props.propertyDetails(id)
    // this.setState({ details: data.properties });
  }
  render() {

    
    if(this.props.loading === true){
            return ( <div>
                <HeaderGlobal props={this.props} />
                <SideBarApp props={this.props} />
                        <Loading/>
                        <FooterApp props={this.props}/>
                        </div>
           );
    }else if(this.props.serverRecheck=== true){
       
    }
    else if(this.props.subscribe === true){
       return <PayService props={this.props}/>
    }else if(this.props.activateSubscription === true){
        return <ActivateSubscription props={this.props}/>
    }else if(this.props.updateSubscription === true){
        return <UpdateSubscription props={this.props}/>
    }
    return (
      <div>
        <HeaderGlobal props={this.props} />
        <SideBarApp props={this.props} />
        <div className="page-content-wrapper">
                <div className="container">
                    {this.props.fetching? <Loading/>:

                    <div className="settings-wrapper py-3">
                        <div className="card settings-card">
                            <div className="card-body">

                                <div className="single-settings d-flex align-items-center justify-content-between">
                                    <div className="title"><i className="lni lni-question-circle"></i><span>{this.props.details.street} <br></br>
                                    </span></div>
                                    <div className="data-content"><Link className="pl-4" to="/my_properties"><i className="lni lni-travel"></i></Link></div>
                                </div>
                            </div>
                        </div>
        
                        <div className="card settings-card">
                            <div className="card-body">

                                <div className="single-settings d-flex align-items-center justify-content-between">
                                    <div className="title"><i className="lni lni-question-circle"></i><span>{this.props.details.contact_info}</span></div>
                                    <div className="data-content"><a className="pl-4" href={`tel:/${this.props.details.contact_info}`}><i className="lni lni-phone"></i></a></div>
                                </div>
                            </div>
                        </div>
                        <div className="card settings-card">
                            <div className="card-body">
                                <div className="single-settings d-flex align-items-center justify-content-between">
                                    <div className="title"><i className="lni lni-question-circle"></i><span>Description: {this.props.details.description}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                }
                </div>

        </div>
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
