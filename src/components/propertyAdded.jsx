import React, { Component } from "react";
import HeaderGlobal from "./headerglobal";
import FooterApp from "./footer";
import SideBarApp from "./side";
// import {Redirect} from "react-router-dom";
import Api from "../apiUtils/api";
import Loading from "./loading";

class PropertyAdded extends Component {

  fileObj = [];
  fileArray = [];
  constructor(props){
    super(props)
    this.state = {
      file: [null],
      loading:true,
      property:""
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
      })
      console.log(this.state)
    }
  }).catch(function (error) {
    // handle error
    console.log(error);
  })
  }




  uploadMultipleFiles(e) {
    this.fileObj.push(e.target.files)
    // let file = e.target.files;
    for (let i = 0; i < this.fileObj[0].length; i++) {
        this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
    }
    this.setState({ 
      file: this.fileArray,
      mafaira:e.target.files
    })
}

uploadFiles=async(e) =>{
  //server actions here
  e.preventDefault()
  let api= new Api();
  console.log(this.state)
  const fd = new FormData();
  fd.append('images',this.state.mafaira);
  fd.append('property_id',this.state.property.id);
  return await api.postData('property_images',fd).then((data)=>{
    if(data.status ===200){
      console.log(data)
    }

  })

}
  render() {

    return (
     
      <div>
        <HeaderGlobal props={this.props}></HeaderGlobal>
              <SideBarApp props={this.props}/>
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

                <button className="btn btn-warning btn-lg w-100" type="submit">
                 Post Images
                </button>
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

export default PropertyAdded;
