import Api from "./api";

export const paymentService =(paymentdetails) =>{
    const api = new Api();

    let paymentUrl = "subscriptions"
    return api.postData(paymentUrl,paymentdetails).then(data=>{
        return data
    }).catch(error=>console.log(error))

}

export const checkPayment=()=>{
    const api =new Api();
    let checkpaymentUrl ="check_payment";
    return api.getData(checkpaymentUrl).then(data=>{
        return data
    }).catch(error=>console.log(error))
}