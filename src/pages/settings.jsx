import React, { Component } from 'react';
import FooterApp from '../components/footer';
import Globalheader from '../components/headerglobal'

class Settings extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Globalheader props={this.props}/>
                <div className="page-content-wrapper">
                <div className="container">
                <h1>Aya ndiwo ma settings</h1>
                </div>
                </div>
                <FooterApp/>
            </div>
         );
    }
}
 
export default Settings;