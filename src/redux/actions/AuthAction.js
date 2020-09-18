import {signUpService} from '../../apiUtils/AuthService'
import {loginService} from "../../apiUtils/AuthService";

export const signUp =(credentials)=>{
    console.log(credentials)
    return (dispatch)=>{
        if(credentials.password.length < 6){
            return dispatch({type: 'SHORT_PASSWORD'})
        }

        signUpService(credentials).then((res)=>{
                console.log(res.data)
                if(res.data.token!=null){
                    localStorage.setItem("user",'Bearer '+res.data.token);
                    dispatch({type:'SIGNUP_SUCCESS'})
                }else {
                    dispatch({type:'SIGNUP_ERROR',res})
                }
            },
            error=>{
                dispatch({type:'CODE_ERROR',error})
                console.log(error)
            }

        )
    }

}

export const login =(credentials,history)=>{
    return (dispatch)=> {
        if (credentials.password.length < 6) {
            return dispatch({type: 'SHORT_PASSWORD'})
        }
        loginService(credentials,history).then((res)=>{
            console.log(res.token)
            if(res.data.token!=null){
            localStorage.setItem("user",'Bearer '+res.data.token);
            dispatch({type:'LOGIN_SUCCESS'})
                console.log(history)
                history.push('/')
        }else {
                    dispatch({type:'LOGIN_ERROR',res})
            }
        },
            error=>{
                dispatch({type:'CODE_ERROR',error})
            })

    }
}