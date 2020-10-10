import React, { Component } from 'react'
import FooterApp from "../components/footer";
import HeaderGlobal from "../components/headerglobal";
import SideBar from "../components/side";

class ChangePassword extends Component {
 //handling all form changes ka1
constructor(props){
    super(props)
    this.state={
        current_password:"",
        new_password:""
    }
}


  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
    render() { 
        return (
        <div>
            <HeaderGlobal props={this.props}/>
            <SideBar props={this.props}/>
            <div className="page-content-wrapper">
      <div className="container">
        <div className="profile-wrapper-area py-3">
         
          <div className="card user-info-card">
            <div className="card-body p-4 d-flex align-items-center">
              <div className="user-profile mr-3"><img src="/assets/img/core-img/rentit.png" alt=""/></div>
              <div className="user-info">
                <p className="mb-0 text-white">Rent It</p>
        <h5 className="mb-0">{localStorage.user.name}</h5>
              </div>
            </div>
          </div>
         
          <div className="card user-data-card">
            <div className="card-body">
              <form action="#" method="">
                <div className="mb-3">
                  <div className="title mb-2"><i className="lni lni-key"></i><span>Old Password</span></div>
                  <input className="form-control" type="password"/>
                </div>
                <div className="mb-3">
                  <div className="title mb-2"><i className="lni lni-key"></i><span>New Password</span></div>
                  <input className="form-control" type="password"/>
                </div>
                <button className="btn btn-success w-100" type="submit">Update Password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
            <FooterApp props={this.props}/>
        </div> 
        );
    }
}
 
export default ChangePassword;