import React, { Component } from "react";
import FooterApp from "../../components/footer";
import SideBarApp from "../../components/side";
import HeaderGlobal from "../../components/headerglobal";
import Api from "../../apiUtils/api";
import { PaymentAction } from "../../redux/actions/PaymentAction";
import { connect } from "react-redux";
import Loading from "../../components/loading";
import axios from "axios";

class PayService extends Component {
  constructor(props) {
    super(props);
    this.getpackage();
    this.state = {
      phone_number: "",
      method: "ecocash",
      price: "",
      makingPayment: false,
      confirmingPayment: false,
      message: "",
      poll_url: "",
      reCheckingStatus: false,
      cancelledPayment: false,
      paymentDone: false,
    };
  }

  handlePhoneInputChange = (event) => {
    this.setState({ phone_number: event.target.value });
    if (this.state.phone_number > 9) {
      this.setState({
        button: true,
      });
    }
  };

  handleSelectInputChange = (event) => {
    this.setState({ method: event.target.value });
  };

  makePayment = async (e) => {
    e.preventDefault();
    let body = {
      method: this.state.method,
      phone_number: this.state.phone_number,
    };
    let baseUrl = "http://127.0.0.1:8000";
    this.setState({
      makingPayment: true,
    });
    var url = "/api/make_payment";
    const token = await localStorage.getItem("token");
    let requestOptions = {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "Application/json",
      },
    };
    axios.post(`${baseUrl}${url}`, body, requestOptions).then((res) => {
      console.log(res);
      if (res.status === 200) {
        this.setState({
          makingPayment: false,
          message: res.data.message,
          confirmingPayment: true,
          poll_url: res.data.Order.id,
        });
        console.log(res.data.Order.id);
      }
    });
  };

  checkPayment = async () => {
    this.setState({
      loading: false,
      reCheckingStatus: true,
      confirmingPayment: false,
    });
    const token = await localStorage.getItem("token");
    let requestOptions = {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "Application/json",
      },
    };
    let baseUrl = "http://127.0.0.1:8000";
    var url = "/api/check_payment/";
    axios
      .get(`${baseUrl}${url}${this.state.poll_url}`, requestOptions)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.status === "Cancelled") {
            this.setState({
              cancelledPayment: true,
              reCheckingStatus: false,
            });
            console.log("payment was cancelled");
          } else if (res.data.status === "Paid") {
            this.setState({
              loading: false,
              reCheckingStatus: false,
              checkingPayment: false,
              paymentDone: true,
            });
            console.log("payment was made successfully");
          } else if (res.data.status === "Sent") {
            console.log("payment was sent initializing recheck");
            setTimeout(() => this.checkPayment(), 30000);
            // this.checkPayment();
          }
        }
      });
  };

  getpackage = async () => {
    let api = new Api();
    let data = await api.getData("/get_price").then(({ data }) => data);

    this.setState({
      price: data.price,
      loading: false,
      button: "",
    });
  };

  render() {
    return (
      <div>
        <HeaderGlobal props={this.props} />
        <SideBarApp props={this.props} />
        <div className="page-content-wrapper">
          {this.state.makingPayment ? (
            <div>
              <div className="container">
                <br></br>
                <br></br>
                <br></br>
                <div className="d-flex justify-content-center ">
                  <div
                    className="spinner-border text-primary "
                    style={{ width: "3rem", height: "3rem" }}
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div
                    className="spinner-grow text-primary"
                    style={{ width: "3rem", height: "3rem" }}
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                  <br></br>
                  <h1>Placing Your payment</h1>
                </div>
              </div>
            </div>
          ) : this.state.confirmingPayment ? (
            <div className="container">
              <div className="d-block mb-4">
                <h6>{this.state.message}</h6>
                <button
                  onClick={this.checkPayment}
                  className="btn btn-warning btn-lg w-100"
                >
                  Confirm Payment
                </button>
              </div>
            </div>
          ) : this.state.reCheckingStatus ? (
            <div>
              <div className="container">
                <br></br>
                <br></br>
                <br></br>
                <div className="d-flex justify-content-center ">
                  <div
                    className="spinner-border text-primary "
                    style={{ width: "3rem", height: "3rem" }}
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div
                    className="spinner-grow text-primary"
                    style={{ width: "3rem", height: "3rem" }}
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                  <br></br>
                  <h1>Checking Payment</h1>
                </div>
              </div>
            </div>
          ) : this.state.cancelledPayment ? (
            <div>
              <div className="container">
                <br></br>
                <br></br>
                <br></br>
                <div className="d-flex justify-content-center ">
                  <div
                    className="spinner-border text-primary "
                    style={{ width: "3rem", height: "3rem" }}
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div
                    className="spinner-grow text-primary"
                    style={{ width: "3rem", height: "3rem" }}
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                  <br></br>
                  <h1>Oops you cancelled your payment</h1>
                </div>
              </div>
            </div>
          ) : this.state.paymentDone ? (
            <div>
              <div className="container">
                <br></br>
                <br></br>
                <br></br>
                <div className="d-flex justify-content-center ">
                  <div
                    className="spinner-border text-primary "
                    style={{ width: "3rem", height: "3rem" }}
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div
                    className="spinner-grow text-primary"
                    style={{ width: "3rem", height: "3rem" }}
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                  <br></br>
                  <h1>Thank you for subscribing</h1>
                </div>
              </div>
            </div>
          ) : (
            <div className="container">
              <div className="checkout-wrapper-area py-3">
                <div className="credit-card-info-wrapper">
                  <img
                    className="d-block mb-4"
                    src="/assets/img/bg-img/credit-card.png"
                    alt=""
                  ></img>

                  <div>
                    <h6 className="text-align-center">
                      Subscription Amount is{" "}
                      {this.state.loading ? (
                        <Loading />
                      ) : (
                        "$" + this.state.price
                      )}{" "}
                      valid for One Month
                    </h6>
                  </div>
                  <div>
                    <p className="text-align-center">
                      Make Payment here to update your subscription
                    </p>
                  </div>

                  <div className="pay-credit-card-form">
                    <form onSubmit={this.makePayment} method="POST">
                      <div className="mb-3">
                        <label>Payment PhoneNumber</label>
                        <input
                          className="form-control"
                          placeholder="0771...."
                          name="phone_number"
                          required
                          min="10"
                          maxLength="10"
                          type="number"
                          value={this.state.phone_number}
                          onChange={this.handlePhoneInputChange}
                        ></input>
                        <small className="ml-1">
                          <i className="fa fa-lock mr-1"></i>Your payment info
                          is secure.
                        </small>
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
                            onChange={this.handleSelectInputChange}
                          >
                            <option value="ecocash" defaultValue>
                              Ecocash
                            </option>
                            <option value="onemoney">OneMoney</option>
                            <option value="telecash">Telecash</option>
                          </select>
                        </div>
                      </div>
                      {this.props.paymentLoading ? (
                        <h6>Payment Loading check your phone...</h6>
                      ) : (
                        <button
                          className="btn btn-warning btn-lg w-100"
                          type="submit"
                        >
                          Pay Now
                        </button>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <FooterApp props={this.props} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    subscriptionmade: state.makepayment.subscriptionmade,
    paymentLoading: state.makepayment.paymentLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    PaymentAction: (paymentdetails) => dispatch(PaymentAction(paymentdetails)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PayService);
