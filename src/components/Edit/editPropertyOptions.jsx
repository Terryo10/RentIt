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
        property:{},
    }
    console.log(props);
      this.getPropertyDetailsFromServer(props.match.params.property_id);
  }

checkPropertyOwner=async()=>{
  console.log('fires')
}

getPropertyDetailsFromServer=async()=> {
      console.log('fetching');
   this.loading = true;
    let api= new Api();
    return await api.getData('single_property/'+this.props.match.params.property_id).then((data)=> {
        if (data.status === 200) {
            if (data.data.success === true) {
                console.log(data);
                this.setState({
                    property: data.data.property,
                    loading: false,
                    propertyNotFound: false
                })
            } else {
                console.log(data)
                this.setState({
                    loading: false,
                    propertyNotFound: true
                })
            }

        }
    });
}
deleteProperty=async(id)=>{
  this.setState({
    loading:true
  })
  let api= new Api();
  return await api.deleteData('properties/'+id).then((data)=>{
   if(data.data.success === true){
       console.log('property found' + data);
    this.props.history.push('/my_properties');
       let params ={
           type:"success",
           message:"Your Property was updated successfully",
       }
       this.props.NotificationDetails(params)
   }else{
    this.props.history.push('/my_properties');
   }
  })

}

editPropertyAsTaken=async(id , status)=>{
    this.setState({
        loading:true
    })
      let api = new Api();
      let postData = {
          property_id: id,
          status :status
      }
    return await api.postData('update_property_as_taken',postData).then((data)=>{
        if(data.data.success === true){
            this.props.history.push('/my_properties');
            this.setState({
                loading:false
            })
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
                      <span>{ this.state.property.taken === 0 ? 'Set As Taken':  'Set As Available'}</span>
                    </div>
                    <div className="data-content">
                      <div className="pl-4" onClick={()=>{ this.state.property.taken === 0 ? this.editPropertyAsTaken(this.props.match.params.property_id,1) : this.editPropertyAsTaken(this.props.match.params.property_id,0)}}>
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
