import React,{Component} from "react";
import HeaderGlobal from "../headerglobal";
import SideBarApp from "../side";
import FooterApp from "../footer";
import Api from "../../apiUtils/api";
import Loading from "../loading";
import {connect} from 'react-redux';
import {CheckPayment} from "../../redux/actions/PaymentAction";

class activateSubscription extends Component{
    constructor(props) {
        super(props);
        this.setUserSubscription()
        console.log(props)
        this.state={
            subscription:[],
            Pageloading:true
        }
    }
    getUserSubscription=async ()=>{
        let api = new Api();
        let data = api.getData('subscriptions')

       return data
    }

    setUserSubscription=()=>{
        this.getUserSubscription().then((res)=>{
       this.setState({
           subscription:res.data.subscription,
           Pageloading:false
       })
            }
        )
    }

    activateSubscription=()=>{
        this.setState({
            Pageloading:true,
        })
        this.props.CheckPayment()
    }

    componentDidUpdate(prevProps){
        console.log(prevProps)
        if(prevProps.props.subscriptionmade===false){
            this.setState({
                Pageloading:false
            })
        }
    }
render() {
    return (
        <div>
            <HeaderGlobal props={this.props.props}/>
            <SideBarApp props={this.props}/>
            <div className="page-content-wrapper">
                <div className="container">
                    <br></br>
                    {this.state.Pageloading? <Loading/> :
                        <div className="card user-data-card">
                            <div className="card-body">
                                <div className="single-profile-data d-flex align-items-center justify-content-between">
                                    <div className="title d-flex align-items-center"><i
                                        className="lni lni-user"></i><span>SUBSCRIPTION STATUS</span></div>
                                    <div className="data-content">{this.state.subscription.isactive ? "Activated" : "Not Activated"}</div>
                                </div>

                                <div className="single-profile-data d-flex align-items-center justify-content-between">
                                    <div className="title d-flex align-items-center"><i className="lni lni-star"></i><span>If you have already paid click here to activate</span>
                                    </div>
                                    <div className="data-content"><button className="btn btn-danger btn-sm" onClick={this.activateSubscription}>Activate</button></div>
                                </div>
                                <div className="single-profile-data d-flex align-items-center justify-content-between">
                                    <div className="title d-flex align-items-center"><i className="lni lni-star"></i><span>If you have not payed yet click here to pay & renew your subscription</span>
                                    </div>
                                    <div className="data-content"><a className="btn btn-success btn-sm"
                                                                     href="my-order.html">Pay</a></div>
                                </div>
                            </div>
                        </div>
                    }

            </div>
            </div>
            <FooterApp props={this.props}/>
        </div>
    )
}
}
const mapStateToProps =(state)=>{
    return{
        subscriptionmade:state.makepayment.subscriptionmade,
        paymentLoading:state.makepayment.paymentLoading,
    }
};
const mapDispatchToProps =(dispatch)=> {
    return {
        CheckPayment: ()=> dispatch(CheckPayment())

    }
}

export default connect(mapStateToProps,mapDispatchToProps) (activateSubscription);