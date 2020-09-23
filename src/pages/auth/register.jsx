import React, { Component } from "react";
import {connect} from 'react-redux';
import {signUp} from "../../redux/actions/AuthAction";
import {Link} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      isLoding: false,
      error: "",
      redirect: null,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  register = (e) => {
    e.preventDefault()
    console.log(this.state)
    let regState={
      email:this.state.email,
      password:this.state.password,
      name:this.state.username
    }
    this.props.signUp(regState);
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };
  render() {
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
          Sign Up
        </button>
      );
    }
    return (
      <div>
        <div className="login-wrapper d-flex align-items-center justify-content-center text-center">
          <div className="background-shape"></div>
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

                {/*  <div className="alert alert-danger" role="alert">*/}
                {/*  A simple danger alert—check it out!*/}
                {/*</div>*/}
                  <form onSubmit={this.register} method="POST">
                    <div className="form-group text-left mb-4">
                      <span>Username</span>
                      <label>
                        <i className="lni lni-user"></i>
                      </label>
                      <input
                        className="form-control"
                        id="username"
                        type="text"
                        placeholder="Your Full Name"
                        required
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                      ></input>
                    </div>
                    <div className="form-group text-left mb-4">
                      <span>Email</span>
                      <label>
                        <i className="lni lni-envelope"></i>
                      </label>
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="you@email.com"
                        required
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                      ></input>
                    </div>
                    <div className="form-group text-left mb-4">
                      <span>Password</span>
                      <label>
                        <i className="lni lni-lock"></i>
                      </label>
                      <input
                        className="input-psswd form-control"
                        id="registerPassword"
                        type="password"
                        placeholder="********************"
                        required
                        min="6"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                      ></input>
                    </div>
                    <div>{action}</div>
                  </form>
                </div>
                <div className="login-meta-data">
                  <p className="mt-3 mb-0">
                    Already have an account?
                    <Link className="ml-1" to="login">
                      Sign In
                    </Link>
                  </p>
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
    authResponse:state.auth.authResponse
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    signUp:(creds)=>dispatch(signUp(creds))
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(Login);
