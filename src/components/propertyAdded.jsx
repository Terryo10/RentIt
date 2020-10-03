import React, {Component} from "react";
import HeaderGlobal from "./headerglobal";
import {Redirect} from "react-router-dom";
class PropertyAdded extends Component {

  render() {
      console.log(this.props.location.state)
      if(this.props.location.state == null){
          return <Redirect to={{pathname: '/home'}}/>
      }
      return(
        <div>
            <HeaderGlobal props={this.props}></HeaderGlobal>
        </div>
      )
  }


}

export default PropertyAdded;