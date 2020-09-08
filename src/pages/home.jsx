import React, { Component } from 'react';
import FooterApp from '../components/footer';
import HeaderHome from '../components/headerhome';
// import SideBarApp from '../components/side';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <HeaderHome/>
               
                <FooterApp/>
            </div>
         );
    }
}
 
export default Home;