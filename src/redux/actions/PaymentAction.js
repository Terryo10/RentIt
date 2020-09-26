import {paymentService} from "../../apiUtils/paymentService";

export const PaymentAction=(paymentdetails)=>{
    console.log(paymentdetails)
    return (dispatch)=>{
        console.log('started  payment')
      paymentService(paymentdetails).then((res)=>{
          if(res.status === 200) {
              console.log('stop loading')
              dispatch({type:'SUCCESSFUL_SUBSCRIPTION',res})
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