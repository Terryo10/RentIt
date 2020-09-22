const initState = {
authResponse:null
};

const AuthReducer =(state=initState,action)=>{
   switch (action.type) {
       case 'SHORT_PASSWORD':
           console.log(action);
           return{
               ...state,
               authResponse: 'password too short'
           }
       case 'SIGNUP_SUCCESS':
           console.log(action)
           return {
               ...state,
               authResponse: 'signup was successfully done ',
           }


       case 'SIGNUP_ERROR':
           console.log(action)
           return {
               ...state,
               authResponse: action.error,
           }

       case 'CODE_ERROR':
           console.log(action)
           return {
               ...state,
               authResponse: 'seems to be a problem please try again later',
           }

       case 'LOGIN_SUCCESS':
           console.log(action)
           return {
               ...state,
               authResponse: 'log In Successfull',
           }


       case 'LOGIN_ERROR':
           console.log(action.res.data.message)
           return {
               ...state,
               authResponse: action.error,

           }
           default:
               return state
   }
}

export default AuthReducer;