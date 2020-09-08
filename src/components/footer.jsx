import React, { Component } from 'react';


class FooterApp extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="footer-nav-area" id="footerNav">
                    <div className="container h-100 px-0">
                        <div className="suha-footer-nav h-100">
                        <ul className="h-100 d-flex align-items-center justify-content-between pl-0">
                            <li className="active"><a href="/"><i className="lni lni-home"></i>Home</a></li>
                            <li><a href="/"><i className="lni lni-life-ring"></i>Categories</a></li>
                            
                            <li><a href="/"><i className="lni lni-heart"></i>Whishlist</a></li>
                            <li><a href="/"><i className="lni lni-cog"></i>Settings</a></li>
                        </ul>
                        </div>
                    </div>
                 </div>
            </div>
         );
    }
}
 
export default FooterApp;