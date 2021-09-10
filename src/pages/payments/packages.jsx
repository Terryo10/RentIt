import React ,{ Component } from "react";
import Globalheader from "../../components/headerglobal";
import SideBarApp from "../../components/side";
import FooterApp from "../../components/footer";
// import Api from "../../apiUtils/api";
import Loading from "../../components/loading";
import { Link } from "react-router-dom";

class Packages extends Component{
    state = {}
    constructor(props) {
        super(props);
        this.getPackages();
        this.state = {
          loading: true,

        };
      }

      getPackages= async() =>{
        // let api =new Api();
          this.setState({

              loading: false,
          })

      }

    render(){
        return (
            <div>
                 <Globalheader props={this.props} />
        <SideBarApp props={this.props} />
        {this.state.loading?<Loading/>:
        <div className="page-content-wrapper">
            <div className="container">

            <div className="settings-wrapper py-3"></div>
            {this.state.packages.map((token_package) => (
              <div className="card settings-card" key={token_package.id}>
                <div className="card-body">
                  <div className="single-settings d-flex align-items-center justify-content-between">
                    <div className="title">
                      <i className="lni lni-dollar"></i>
                      <span>$ {token_package.price} For {token_package.name}</span>
                      <br></br>
                      <span>{token_package.viewing_tokens} VIEWING TOKENS</span>
                    </div>
                    <div className="data-content">
                      <Link className="pl-4" to="/">
                        <i className="lni lni-chevron-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>

            </div> }

        <FooterApp props={this.props} />
            </div>
        );

    }
}

export default Packages;