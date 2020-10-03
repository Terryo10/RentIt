import React, { Component } from 'react';
import {Link} from "react-router-dom";


class FooterApp extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
               
                <div className="footer-nav-area" id="footerNav">
                    <div className="container h-100 px-0">
                        <div className="suha-footer-nav h-100">
                        <ul className="h-100 d-flex align-items-center justify-content-between pl-0">
                            <li className="active"><Link to="/"><i className="lni lni-home"></i>Home</Link></li>
                            <li><Link to="/categories"><i className="lni lni-life-ring"></i>Categories</Link></li>
                            
                            <li><Link to="/post_property"><i className="lni lni-plus"></i>PostProperty</Link></li>
                            <li><Link to="/settings"><i className="lni lni-cog"></i>Settings</Link></li>
                        </ul>
                        </div>
                    </div>
                 </div>
            </div>
         );
    }
}
 
export default FooterApp;