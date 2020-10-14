import React, { Component } from "react";
import HeaderGlobal from "./headerglobal";
import FooterApp from "./footer";
import SideBarApp from "./side";
// import {Redirect} from "react-router-dom";
import Api from "../apiUtils/api";
import Loading from "./loading";
import {connect} from "react-redux";
import Notify from "../redux/services/notificate";
import { ToastContainer} from 'react-toastify';
import {NotificationDetails} from "../redux/actions/NotificationAction";

class PropertyAdded extends Component {

  fileObj = [];
  fileArray = [];
  constructor(props){
    super(props)
    this.state = {
      file: [null],
      loading:true,
      property:"",
      isLoadingButton:false
  }
  this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
  this.uploadFiles = this.uploadFiles.bind(this)
  if(props.location.SingleProperty == null){
    this.state={
      property:"",
      loading:true,
      file: [null],
    
    }
    this.fetchProperty();
  }else{
 
    this.state={
      property:props.location.SingleProperty,
      loading:false,
      file: [null],
    }
   
  }
  }


  fetchProperty=async()=>{
  let api = new Api();
  let params ={
    property_id:this.props.match.params.property_id
  }
 
  return await api.getData('single_property/'+params.property_id,).then((data)=>{
    if(data.status=== 200){
      this.setState({
      property:data.data.property,
      loading:false,
      file: [null],
      imgCollection: ''
      })
      this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this);
      console.log(this.state)
    }
  }).catch(function (error) {
    // handle error
    console.log(error);
  })
  }




  uploadMultipleFiles(e) {
    this.setState({ imgCollection: e.target.files })
    this.fileObj.push(e.target.files)
    // let file = e.target.files;
    for (let i = 0; i < this.fileObj[0].length; i++) {
        this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
    }
    this.setState({ 
      file: this.fileArray,
    })
}

uploadFiles=async(e) =>{
  //server actions here
  e.preventDefault()
  this.setState({
    isLoadingButton:true
  })
  let api= new Api();
  const fd = new FormData();
  for (const key of Object.keys(this.state.imgCollection)) {
    fd.append('imgCollection[]', this.state.imgCollection[key])
  }
  fd.append('property_id',this.state.property.id);
  return await api.postData('property_images',fd).then((data)=>{
    if(data.status ===200){
      if(data.data.success === true){
        this.setState({
          isLoadingButton:false
        })
        let params ={
          type:"success",
          message:data.data.message,
        }
        this.props.NotificationDetails(params)
        setTimeout(()=>{
          this.props.history.push('/my_properties')
        },2000)
      }else{
        this.setState({
          isLoadingButton:false
        })
        let params ={
          type:"error",
          message:data.data.message,
        }
        this.props.NotificationDetails(params)
      
      }
      
     
    }

  })
}
  render() {

    if(this.props.type === 'error'){
      let notif= new Notify()
      notif.error(this.props.message)
      let params ={
        type:"reset",
        message:"",
      }
      
      setTimeout(()=>{
        this.props.NotificationDetails(params)
        
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


    let loading = (
      <div className=" d-flex justify-content-center">
        <div className="spinner-border text-dark " role="status">
          <span className="sr-only">Loading...</span>;
        </div>
      </div>
    );
    let action;
    if (this.state.isLoadingButton === true) {
      action = loading;
    } else {
      action = (
        <button className="btn btn-warning btn-lg w-100" type="submit">
        Post Images
       </button>
      );
    }

    return (
     
      <div>
        <HeaderGlobal props={this.props}></HeaderGlobal>
              <SideBarApp props={this.props}/>
              <ToastContainer />
              {this.state.loading?<Loading/>:
        <div className="page-content-wrapper">
          <div className="container">
            <br/>
            <br/>
            <div className="pay-credit-card-form">
              <form onSubmit={this.uploadFiles}>
              <div className="form-group multi-preview">
                    {(this.fileArray || []).map((url, index) => ( 
                        <img key={index} src={url} style={{height:"100px"}}alt="..." />
                    ))}
                </div>
                <div className="mb-3">
                  <label>Add Images</label>
                  <input
                    className="btn btn-warning btn-lg w-100"
                    type="file"
                    onChange={this.uploadMultipleFiles} multiple 
                  >
                  </input>
                </div>

                {action}
              </form>
            </div>
          </div>
        </div>
                    }
        <FooterApp props={this.props}/>
      </div>
    );
  }
}

const mapStateToProps =(state)=>{
  return{
    message:state.notification.message,
    type:state.notification.type
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{

    NotificationDetails:(params)=>dispatch(NotificationDetails(params))
  }

}
export default connect(mapStateToProps,mapDispatchToProps) (PropertyAdded);
