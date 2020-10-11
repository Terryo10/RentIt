import React, { Component } from "react";
import Api from "../apiUtils/api";
import FooterApp from "../components/footer";
import HeaderGlobal from "../components/headerglobal";
import SideBar from "../components/side";
import {connect} from "react-redux";
import Notify from "../redux/services/notificate";
import { ToastContainer} from 'react-toastify';
import {NotificationDetails} from "../redux/actions/NotificationAction";

class ChangePassword extends Component {
  //handling all form changes ka1
  constructor(props) {
    super(props);
    this.state = {
      current_password: "",
      new_password: "",
      loading:false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  Post = async (event) => {
      let params={
        current_password:this.state.current_password,
        new_password:this.state.new_password
      }
    event.preventDefault();
    console.log("fired");
    this.setState({
        loading:true
    })
    let api = new Api();
    return await api.postData('change_password',params).then((data)=>{
        if(data.status===200){
            if(data.data.success === false){
                this.setState({
                    loading:false
                })
                console.log(this.props)
                let params ={
                    type:"error",
                    message:data.data.message,
                  }
                  this.props.NotificationDetails(params)
                console.log(data.data.message)
               
            }else{
                console.log(data.data.message)
                let params ={
                    type:"success",
                    message:data.data.message,
                  }
                  this.props.NotificationDetails(params)
                this.setState({
                    loading:false
                })
                console.log(this.props)
            }

           
        }
    })
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
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
      if (this.state.loading === true) {
        action = loading;
      } else {
        action = (
            <button className="btn btn-success w-100" type="submit">
            Update Password
          </button>
        );
      }
    return (
      <div>
        <HeaderGlobal props={this.props} />
        <SideBar props={this.props} />
        <ToastContainer />
        <div className="page-content-wrapper">
          <div className="container">
            <div className="profile-wrapper-area py-3">
              <div className="card user-info-card">
                <div className="card-body p-4 d-flex align-items-center">
                  <div className="user-profile mr-3">
                    <img src="/assets/img/core-img/rentit.png" alt="" />
                  </div>
                  <div className="user-info">
                    <p className="mb-0 text-white">Rent It</p>
                    <h5 className="mb-0">{localStorage.user.name}</h5>
                  </div>
                </div>
              </div>

              <div className="card user-data-card">
                <div className="card-body">
                  <form onSubmit={this.Post} method="POST">
                    <div className="mb-3">
                      <div className="title mb-2">
                        <i className="lni lni-key"></i>
                        <span>Old Password</span>
                      </div>
                      <input
                        className="form-control"
                        type="password"
                        name="current_password"
                        value={this.state.current_password}
                        onChange={this.handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <div className="title mb-2">
                        <i className="lni lni-key"></i>
                        <span>New Password</span>
                      </div>
                      <input
                        className="form-control"
                        type="password"
                        name="new_password"
                        minLength="6"
                        value={this.state.new_password}
                        onChange={this.handleInputChange}
                        required
                      />
                    </div>
                    <div>
                        {action}
                    </div>
                  </form>
                </div>
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
      message:state.notification.message,
      type:state.notification.type
    }
  }
  
  const mapDispatchToProps =(dispatch)=>{
    return{
      NotificationDetails:(params)=>dispatch(NotificationDetails(params))
    }
  
  }

export default  connect(mapStateToProps,mapDispatchToProps)(ChangePassword);
