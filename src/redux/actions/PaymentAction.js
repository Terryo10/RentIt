import {paymentService} from "../../apiUtils/paymentService";
import {checkPayment} from "../../apiUtils/paymentService";

export const PaymentAction=(paymentdetails)=>{
    console.log(paymentdetails)
    return (dispatch)=>{
        dispatch({type:'PAYMENT_LOADING'})
      paymentService(paymentdetails).then((res)=>{
        console.log('pano')
          if(res.data.success === true) {
              dispatch({type:'STOP_PAYMENT_LOADING'})
              dispatch({type:'SUCCESSFUL_SUBSCRIPTION',res})
              dispatch({type:'SUBSCRIBED'})
              window.location.reload();
          }else if(res.data.success === false){
              console.log('Please Subscribe to view details')
              dispatch({type:'SUCCESSFUL_SUBSCRIPTION',res})
          }else if(res.status === 215){
              console.log('Your subscription is not active')
              dispatch({type:'SUCCESSFUL_SUBSCRIPTION',res})
        }else if(res.status === 216){
              console.log('Your subscription has expired please renew')
              dispatch({type:'SUCCESSFUL_SUBSCRIPTION',res})
          }
      })

    }
}

export const CheckPayment=()=>{
    return (dispatch)=>{
        checkPayment().then((res)=>{
            if(res.data.success === true) {
                console.log('activated subscription')
                dispatch({type:'ACTIVATED_SUBSCRIPTION'})
                window.location.reload();
            }else if(res.data.cancelled === true){
                dispatch({type:'CANCELLED_TRANSACTION'})
            }else if(res.data.sent === true){
                dispatch({type:'TRANSACTION_SENT'})
            }
        })
    }
}