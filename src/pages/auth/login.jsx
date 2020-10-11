import React, { Component } from "react";
import {Link } from "react-router-dom";
import {connect} from 'react-redux';
import {login} from "../../redux/actions/AuthAction";
import Notify from "../../redux/services/notificate";
import { ToastContainer} from 'react-toastify';
import {NotificationDetails} from "../../redux/actions/NotificationAction";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoding: false,
      error: "",
      redirect: null,
      isLoggedIn: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }



  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  login =(e)=>{
    
    this.setState({
      isLoding:true
    })
   let loginState ={
      email:this.state.email,
     password: this.state.password
    }
    e.preventDefault()
   this.props.login(loginState,this.props.history)

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
        this.setState({
          isLoding:false
        })
      },2000)
     
     
    }
    if(this.props.type === 'success'){
      this.setState({
        isLoding:false
      })
      let notif= new Notify()
      notif.success(this.props.message)
      let params ={
        type:"reset",
        message:"",
      }
      setTimeout(()=>{
        this.props.NotificationDetails(params)
        this.props.history.push('/')
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
    if (this.state.isLoding === true) {
      action = loading;
    } else {
      action = (
        <button className="btn btn-success btn-lg w-100" type="submit">
          Log In
        </button>
      );
    }
    return (
     

      <div className="login-wrapper d-flex align-items-center justify-content-center text-center">
        <div className="background-shape"></div>
        <ToastContainer />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5">
              <img
                className="big-logo"
                src="/assets/img/core-img/rentit.png"
                alt=""
                style={{"height":"150px"}}
              ></img>

              <div className="register-form mt-5 px-4">
                <form method="POST" onSubmit={this.login}>
                  <div className="form-group text-left mb-4">
                    <span>Email</span>
                    <label>
                      <i className="lni lni-email"></i>
                    </label>
                    <input
                      className="form-control"
                      id="username"
                      type="email"
                      placeholder="info@example.com"
                      required
                      name="email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                    ></input>

                    <div className="form-group text-left mb-4">
                      <span>Password</span>
                      <label>
                        <i className="lni lni-lock"></i>
                      </label>
                      <input
                        className="form-control"
                        id="password"
                        type="password"
                        required
                        minLength="6"
                        placeholder="*******"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                      ></input>
                    </div>
                    <div>{action}</div>
                  </div>
                </form>

                <div className="login-meta-data">
                  <Link to="/fogotpassword" className="forgot-password d-block mt-3 mb-1">
                    Forgot Password?
                  </Link>
                  <p className="mb-0">
                    Didn't have an account?
                    <Link to="/register" className="ml-1">
                      Register Now
                    </Link>
                  </p>
                </div>

                <div className="view-as-guest mt-3">
                  <Link to="/" className="btn">
                    View as Guest
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps =(state)=>{
  return{
    authResponse:state.auth.authResponse,
    message:state.notification.message,
    type:state.notification.type
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    login:(creds,history)=>dispatch(login(creds,history)),
    NotificationDetails:(params)=>dispatch(NotificationDetails(params))
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(Login);
