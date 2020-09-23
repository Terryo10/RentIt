import React,{Component} from "react";
import FooterApp from "../../components/footer";
import SideBarApp from "../../components/side";
import HeaderGlobal from "../../components/headerglobal";
import Api from "../../apiUtils/api";

class PayService extends Component{
    constructor(props) {
        super(props);
        this.getpackage()
        this.state={
            phone_number:"",
            method:"",
            price:""
        }

    }


    handlePhoneInputChange=(event)=>{
        this.setState({phone_number: event.target.value});
    }

    handleSelectInputChange=(event)=>{
        this.setState({method: event.target.value});
    }

    makePayment=(e)=>{
        e.preventDefault()
        console.log(this.state)

    }
    getpackage =async ()=>{
        console.log('loading started')
        let api = new Api();
        let data = await api.getData("/get_price").then(console.log('stop loading'),({ data }) => data);

        this.setState({ price: data.price });
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
                                   <h6 className="text-align-center">Subscription Amount is ${this.state.price} valid for One Month</h6>
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
                                                <option value="ecocash" >Ecocash</option>
                                                <option value="onemoney" >OneMoney</option>
                                            </select>
                                        </div>
                                        </div>

                                        <button className="btn btn-warning btn-lg w-100" type="submit">Pay Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterApp/>
            </div>
        )
    }

}

export default PayService;