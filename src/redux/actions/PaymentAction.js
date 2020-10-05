import {paymentService} from "../../apiUtils/paymentService";
import {checkPayment} from "../../apiUtils/paymentService";

export const PaymentAction=(paymentdetails)=>{
    console.log(paymentdetails)
    return (dispatch)=>{
        dispatch({type:'PAYMENT_LOADING'})
      paymentService(paymentdetails).then((res)=>{
          if(res.status === 200) {
              dispatch({type:'STOP_PAYMENT_LOADING'})
              dispatch({type:'SUCCESSFUL_SUBSCRIPTION',res})
              dispatch({type:'SUBSCRIBED'})
          }else if(res.status === 214){
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
            if(res.status === 200) {
                console.log('activated subscription')
                dispatch({type:'ACTIVATED_SUBSCRIPTION'})
            }else if(res.status === 222){
                dispatch({type:'CANCELLED_TRANSACTION'})
            }else if(res.status === 223){
                dispatch({type:'TRANSACTION_SENT'})
            }
        })
    }
}