import React, { Component } from "react";
// import axios from "axios";
import api from "../../apiUtils/api";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoding: false,
      error: "",
      redirect: null,
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
      .post("login", {
        username: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        this.setState({
          isLoding: false,
        });
        if (res.status === 200) {
          localStorage.setItem("login", JSON.stringify(res.data));
          //push to the next page here
          console.log(res);
          this.setState({ redirect: "/home" });
          console.log(this.state.redirect);
        } else {
          this.setState({
            isloding: false,
            error: res.data.message,
          });
          console.log(res.data.message);
        }
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code that falls out of the range of 2xx
          let err = error.response.data;
          this.setState({
            error: err.message,
            isLoding: false,
          });
          console.log("zvaramba");
        }
      });
  };

  validateEmail = (email) => {
    // const re = ^[a-z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-z0-9]@[a-z0-9][-\.]{0,1}([a-z][-\.]{0,1})*[a-z0-9]\.[a-z0-9]{1,}([\.\-]{0,1}[a-z]){0,}[a-z0-9]{0,}$ ;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //email regex
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
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
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
                    Didn't have an account?
                    <a href="/" className="ml-1">
                      Register Now
                    </a>
                  </p>
                </div>

                <div className="view-as-guest mt-3">
                  <a href="/" className="btn">
                    View as Guest
                  </a>
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
