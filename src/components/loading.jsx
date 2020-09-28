import React, {Component} from "react";

class Loading extends Component{
    render() {
        return(
            <div className="page-content-wrapper">
                <div className="container">
                    <br></br>
                    <br></br>
                    <br></br>
            <div className="d-flex justify-content-center ">
                <div className="spinner-border text-primary " style={{width: "3rem", height: "3rem"}} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-primary" style={{width: "3rem", height: "3rem"}} role="status">
                    <span className="sr-only">Loading...</span>
                </div>

            </div>

                </div>
            </div>
        )
    }
}

export default Loading;