import React, { Component } from "react";
import FooterApp from "../footer";
import SideBar from "../side";
import HeaderApp from "../headerglobal";
import {Link} from "react-router-dom";
import Api from "../../apiUtils/api";
import Loading from "../loading";

class EditPropertyOptions extends Component {
  constructor(props){
    super(props)
    this.state={
      loading:false,
    }
    console.log(props)
  }

checkPropertyOwner=async()=>{
  console.log('fires')

}

deleteProperty=async(id)=>{
  this.setState({
    loading:true
  })
  let api= new Api();
  return await api.deleteData('properties/'+id).then((data)=>{
   if(data.data.success === true){
    this.props.history.push('/my_properties');
   }else{
    this.props.history.push('/my_properties');
   }
    
  })


}

  render() {
    return(
        <div>
          <HeaderApp props={this.props}/>
          <SideBar props={this.props}/>
          {this.state.loading?<Loading/>:
          <div className="page-content-wrapper">
          <div className="container">
            <div className="settings-wrapper py-3">
              <div className="card settings-card">
                <div className="card-body">
                  <div className="single-settings d-flex align-items-center justify-content-between">
                    <div className="title">
                      <i className="lni lni-question-circle"></i>
                      <span>Edit Property Details</span>
                    </div>
                    <div className="data-content">
                      <Link className="pl-4" to={"/edit_property_details/"+this.props.match.params.property_id}>
                        <i className="lni lni-chevron-right"></i>
                      </Link>
                    </div>
                  </div>
                  
                </div>
                
              </div>
              <div className="card settings-card">
                <div className="card-body">
                  <div className="single-settings d-flex align-items-center justify-content-between">
                    <div className="title">
                      <i className="lni lni-question-circle"></i>
                      <span>Add More images</span>
                    </div>
                    <div className="data-content">
                      <Link className="pl-4" to={{pathname:'/add_images_to_property/'+this.props.match.params.property_id,}}>
                        <i className="lni lni-chevron-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card settings-card">
                <div className="card-body">
                  <div className="single-settings d-flex align-items-center justify-content-between">
                    <div className="title">
                      <i className="lni lni-question-circle"></i>
                      <span>Edit Property Images</span>
                    </div>
                    <div className="data-content">
                      <Link className="pl-4" to={"/edit_property_images/"+this.props.match.params.property_id}>
                        <i className="lni lni-chevron-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card settings-card">
                <div className="card-body">
                  <div className="single-settings d-flex align-items-center justify-content-between">
                    <div className="title">
                      <i className="lni lni-question-circle"></i>
                      <span>Delete Property</span>
                    </div>
                    <div className="data-content">
                      <div className="pl-4" onClick={()=>{this.deleteProperty(this.props.match.params.property_id)}}>
                        <i className="lni lni-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card settings-card">
                <div className="card-body">
                  <div className="single-settings d-flex align-items-center justify-content-between">
                    <div className="title">
                      <i className="lni lni-question-circle"></i>
                      <span>Set As Taken</span>
                    </div>
                    <div className="data-content">
                      <div className="pl-4" onClick={()=>{this.deleteProperty(this.props.match.params.property_id)}}>
                        <i className="lni lni-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              </div>
              </div>
              }


          <FooterApp props={this.props}/>
         </div>
    )
     ;
  }
}

export default EditPropertyOptions;
