import Api from "./api";

export const paymentService =(paymentdetails) =>{
    const api = new Api();

    let paymentUrl = "subscriptions"
    return api.postData(paymentUrl,paymentdetails).then(data=>{
        return data
    }).catch(error=>console.log(error))

}