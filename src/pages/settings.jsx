import React, { Component } from "react";
import FooterApp from "../components/footer";
import Globalheader from "../components/headerglobal";
import SideBarApp from "../components/side";
import { Link } from "react-router-dom";

class Settings extends Component {
  state = {};
  render() {
    return (
      <div>
        <Globalheader props={this.props} />
        <SideBarApp props={this.props} />
        <div className="page-content-wrapper">
          <div className="container">
            <div className="settings-wrapper py-3">
              <div className="card settings-card">
                <div className="card-body">
                  <div className="single-settings d-flex align-items-center justify-content-between">
                    <div className="title">
                      <i className="lni lni-question-circle"></i>
                      <span>My Property</span>
                    </div>
                    <div className="data-content">
                      <Link className="pl-4" to="/my_properties">
                        <i className="lni lni-chevron-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="card settings-card">
                <div className="card-body">
                  <div className="single-settings d-flex align-items-center justify-content-between">
                    <div className="title">
                      <i className="lni lni-night"></i>
                      <span>Night Mode</span>
                    </div>
                    <div className="data-content">
                      <div className="toggle-button-cover">
                        <div className="button r">
                          <input
                            className="checkbox"
                            id="darkSwitch"
                            type="checkbox"
                          />
                          <div className="knobs"></div>
                          <div className="layer"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="card settings-card">
                <div className="card-body">
                  <div className="single-settings d-flex align-items-center justify-content-between">
                    <div className="title">
                      <i className="lni lni-heart"></i>
                      <span>My WishList</span>
                    </div>
                    <div className="data-content">
                      <Link className="pl-4" to="/my_wishlist">
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
                      <i className="lni lni-protection"></i>
                      <span>Privacy</span>
                    </div>
                    <div className="data-content">
                      <a className="pl-4" href="privacy-policy.html">
                        <i className="lni lni-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card settings-card">
                <div className="card-body">
                  <div className="single-settings d-flex align-items-center justify-content-between">
                    <div className="title">
                      <i className="lni lni-lock"></i>
                      <span>Password</span>
                    </div>
                    <div className="data-content">
                      <Link to="/change_password">
                        Change<i className="lni lni-chevron-right"></i>
                      </Link>
                    </div>
                  </div>
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

export default Settings;
