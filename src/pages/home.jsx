import React, { Component } from 'react';
import FooterApp from '../components/footer';
import HeaderHome from '../components/headerhome';
// import SideBarApp from '../components/side';
import Houses from '../components/houses';

class Home extends Component {
    state = { 
        sidebar:false
     }
    render() { 
        return ( 
            <div>
                <HeaderHome/>
                <div className="page-content-wrapper">
                <div className="container">
                <h1>Homu peji</h1>
                <Houses/>
                </div>
                </div>
                <FooterApp/>
            </div>
         );
    }
}
 
export default Home;