import {signUpService} from '../../apiUtils/AuthService'
import {loginService} from "../../apiUtils/AuthService";


export const signUp =(credentials)=>{
    console.log(credentials)
    return (dispatch)=>{
        if(credentials.password.length < 6){
            return dispatch({type: 'SHORT_PASSWORD'})
        }
        signUpService(credentials,).then((res)=>{

                if(res.data.token!=null){
                    localStorage.setItem("token",res.data.token);
                    localStorage.setItem("user",JSON.stringify(res.data.user));
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
            if(res.data.token!=null){
                console.log(res.data.user)
            localStorage.setItem("token",res.data.token);
                localStorage.setItem("user",JSON.stringify(res.data.user));
                
            dispatch({type:'LOGIN_SUCCESS'})
            dispatch({type:'SUCCESS',message:"Logged in please wait..."})
              
                setTimeout(() => {
                      history.push('/')
                  }, 5000);

        }else {
            
                dispatch({type:'LOGIN_ERROR',res})
                dispatch({type:'ERROR',res})
               
            }
        },
            error=>{
                console.log('falling')
                dispatch({type:'CODE_ERROR',error})
            })

    }
}

export  const logout=(history)=>{
    localStorage.clear();
    history.props.history.push('/login')
}