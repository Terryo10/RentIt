export const NotificationDetails=(params)=>{
    console.log(params)
let type = params.type;
let message = params.message;
    return(dispatch)=>{
        if (type === 'success') { 
            dispatch({type:'SUCCESS',message})
        }else if(type === 'error'){ 
            dispatch({type:'ERROR',message})
        }
        else if(type === 'warning'){
            dispatch({type:'WARNING',message})
        }
        else if(type === 'info'){
            dispatch({type:'INFO',message})
        }else if(type === 'reset'){
            dispatch({type:'RESET_ERROR'})
        }
    }
}

