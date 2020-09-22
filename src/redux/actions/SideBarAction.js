

export const closeUp =()=>{

    return (dispatch)=>{
         dispatch({type:'CLOSE_SIDE_BAR'})
    }
}

export const openUp =()=>{

    return (dispatch)=>{
        dispatch({type:'OPEN_SIDE_BAR'})
    }
}