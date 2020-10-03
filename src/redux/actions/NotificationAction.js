const NotificationDetails=(props)=>{
let type = props.type;
let message = props.message;
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
        }
    }
}