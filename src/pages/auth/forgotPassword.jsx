import React, { Component } from "react";
import {Link} from "react-router-dom";

class ForgotPassword extends Component {
  state = {};
  render() {
    return (
      <div>
        <div class="login-wrapper d-flex align-items-center justify-content-center text-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5">
                <img
                  class="big-logo"
                  src="/assets/img/core-img/rentit.png"
                  alt=""
                  style={{"height":"150px"}}
                />

                <div class="register-form mt-5 px-4">
                  <form >
                    <div class="form-group text-left mb-4">
                      <span>Email or Username</span>
                      <label for="email">
                        <i class="lni lni-user"></i>
                      </label>
                      <input
                        class="form-control"
                        id="email"
                        type="text"
                        placeholder="email@email.com"
                        required
                      />
                    </div>
                    <button class="btn btn-warning btn-lg w-100" type="submit">
                      Reset Password
                    </button>
                  </form>
                  <div>
                  <div className="login-meta-data">
                      <br></br>
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
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
