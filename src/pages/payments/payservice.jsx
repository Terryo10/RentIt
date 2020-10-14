import React,{Component} from "react";
import FooterApp from "../../components/footer";
import SideBarApp from "../../components/side";
import HeaderGlobal from "../../components/headerglobal";
import Api from "../../apiUtils/api";
import {PaymentAction} from "../../redux/actions/PaymentAction";
import {connect} from "react-redux"
import Loading from "../../components/loading";


class PayService extends Component{
    constructor(props) {
        super(props);
        this.getpackage()
        this.state={
            phone_number:"",
            method:"ecocash",
            price:""
        }

    }


    handlePhoneInputChange=(event)=>{
        this.setState({phone_number: event.target.value});
        if(this.state.phone_number > 9){
            this.setState({
                button:true
            })
        }
    }

    handleSelectInputChange=(event)=>{
        this.setState({method: event.target.value});
    }

    makePayment=(e)=>{
        e.preventDefault()
        let method ={
            method:this.state.method,
            phone_number: this.state.phone_number,
            loading:true

        }

      this.props.PaymentAction(method)

    }
    getpackage =async ()=>{

        let api = new Api();
        let data = await api.getData("/get_price").then(({ data }) => data);

        this.setState({
            price: data.price,
            loading:false,
            button:""
        });

    }

    render() {
        return(
            <div>
                <HeaderGlobal props={this.props.props}/>
                <SideBarApp props={this.props}/>
                <div className="page-content-wrapper">
                    <div className="container">
                        <div className="checkout-wrapper-area py-3">
                            <div className="credit-card-info-wrapper"><img className="d-block mb-4" src="/assets/img/bg-img/credit-card.png" alt=""></img>

                               <div>
                                   <h6 className="text-align-center">Subscription Amount is {this.state.loading? <Loading/> :"$"+this.state.price} valid for One Month</h6>
                               </div>


                                <div className="pay-credit-card-form">
                                    <form onSubmit={this.makePayment} method="POST">
                                        <div className="mb-3">
                                            <label >Payment PhoneNumber</label>
                                            <input className="form-control"
                                                   placeholder="0771...."
                                                   name="phone_number"
                                                   required
                                                   min="10"
                                                   type="tel"
                                                   value={this.state.phone_number}
                                                   onChange={this.handlePhoneInputChange}
                                            ></input>
                                            <small className="ml-1"><i
                                                className="fa fa-lock mr-1"></i>Your payment info is secure.</small>
                                        </div>
                                        <div className="mb-3">
                                            <div className="title mb-2">

                                                <span>Select Payment Method</span>
                                            </div>
                                        <div className="form-group">
                                            <select
                                                className="form-control"
                                                id="exampleFormControlSelect1"
                                                name="method"
                                                required
                                                value={this.state.method}
                                                onChange={this.handleSelectInputChange}>
                                                <option value="ecocash"  defaultValue>Ecocash</option>
                                                <option value="onemoney" >OneMoney</option>
                                            </select>
                                        </div>
                                        </div>
                                        {this.props.paymentLoading?
                                            <h6>Payment Loading check your phone...</h6>:
                                            <button className="btn btn-warning btn-lg w-100" type="submit" >Pay Now</button>
                                        }
                                        </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterApp props={this.props.props}/>
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
        PaymentAction: (paymentdetails)=> dispatch(PaymentAction(paymentdetails))

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PayService);