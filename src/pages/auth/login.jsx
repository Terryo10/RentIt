import React, { Component } from "react";
// import axios from "axios";
import api from "../../apiUtils/api";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoding: false,
    };
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  login = (e) => {
    if (
      this.validateEmail(this.state.email) &&
      this.validatePassword(this.state.password)
    ) {
      this.post();
      e.preventDefault();
    } else {
      e.preventDefault();
    }
  };

  post = async () => {
    //start loading
    this.setState({
      isLoding: true,
    });
    api
      .post("/login", {
        username: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        this.setState({
            isLoding:false
        });
        console.log(res.data);
      });
  };

  validateEmail = (email) => {
    const re = /\+2637[7-8|1|3][0-9]{7}$/;
    // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.exec(email)) {
      console.log(email);
      return true;
    }
    alert("Please give a valid email address");
    return false;
  };

  validatePassword = (password) => {
    if (password.length >= 6) {
      console.log(password);
      return true;
    } else {
      alert("password should be greater than 6 characters");
      return false;
    }
  };

  render() {
    var loading =<div className=" d-flex justify-content-center">
    <div className="spinner-border text-dark " role="status">
    <span className="sr-only">Loading...</span>;
    </div>
    </div>
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
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5">
              <img
                className="big-logo"
                src="assets/img/core-img/logo-white.png"
                alt=""
              ></img>

              <div className="register-form mt-5 px-4">
                <form onSubmit={this.login}>
                  <div className="form-group text-left mb-4">
                    <span>Email</span>
                    <label>
                      <i className="lni lni-email"></i>
                    </label>
                    <input
                      className="form-control"
                      id="username"
                      type="text"
                      placeholder="info@example.com"
                      value={this.state.email}
                      onChange={this.handleEmailChange}
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
                        placeholder="********************"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                      ></input>
                    </div>
                    <div>{action}</div>
                  </div>
                </form>

                <div className="login-meta-data">
                  <a href="/" className="forgot-password d-block mt-3 mb-1">
                    Forgot Password?
                  </a>
                  <p className="mb-0">
                    Didn't have an account?<a href="/" className="ml-1">Register Now</a>
                  </p>
                </div>

                <div className="view-as-guest mt-3">
                  <a href="/"className="btn">View as Guest</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
