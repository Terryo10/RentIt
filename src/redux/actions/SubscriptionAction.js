import {detailsService} from "../../apiUtils/DetailsService";

export const propertyDetails=(id)=>{
    return (dispatch)=> {
        dispatch({type:'LOADING'})
    detailsService(id).then((res)=>{
            if (res.data.success === true) {
                dispatch({type:'STOP_LOADING'})
                dispatch({type:'DETAILS_FETCHED',res})
            } else if (res.data.subscription === false) {
                console.log('Please Subscribe to view details')
                dispatch({type:'STOP_LOADING'})
                dispatch({type:'SUBSCRIBE',res})
            } else if (res.data.subscription === true) {
                console.log('Your subscription is not active')
                dispatch({type:'STOP_LOADING'})
                dispatch({type:'ACTIVATE_SUBSCRIPTION',res})
            } else if (res.data.expired === true) {
                console.log('Your subscription has expired please renew')
                dispatch({type:'UPDATE_SUBSCRIPTION',res})
            }else{
                dispatch({type:'UNKNOWN_ERROR',res})
            }


    })
    }

}