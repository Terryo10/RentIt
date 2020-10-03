import Api from './api';

export const signUpService =(credentials) =>{
    const api = new Api();
    let signupUrl = "register"
    return api.postLoginData(signupUrl,credentials).then(data=>{
        return data
    }).catch(error=>console.log(error))
}

export const loginService =(credentials,propsHistory)=>{
    const api = new Api();
    // let loginUrl = "login"
    return api.postLoginData(`login`,credentials).then(data=>{
        return data
    }).catch(error=>console.log(error))
}
