import React,{Component} from "react";
import {Link} from "react-router-dom";

class NotFound extends Component{
render() {
    return(
        <div>
            <div className="order-success-wrapper">
                <div className="content"><i className="lni lni-cross-circle"></i>
                    <h5>404</h5>
                    <p>Oops ! PAGE NOT FOUND</p><Link to="/home"
                        className="btn btn-warning mt-3" >Go To Home Page</Link>
                </div>
            </div>
        </div>
    )
}

}

export default NotFound;