import {detailsService} from "../../apiUtils/DetailsService";

export const propertyDetails=(id)=>{
    return (dispatch)=> {
        dispatch({type:'LOADING'})
    detailsService(id).then((res)=>{
        //check user points
            if (res.data.success === true) {
                dispatch({type:'STOP_LOADING'})
                dispatch({type:'DETAILS_FETCHED',res})
            }


    })
    }

}