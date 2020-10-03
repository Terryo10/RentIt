const initState = {
    details:[],
    subscribe:false,
    activateSubscription:false,
    updateSubscription:false,
    loading:false
};

const SubscriptionsReducer=(state= initState,action)=>{
    switch (action.type) {
        case 'DETAILS_FETCHED':
            return{
                ...state,
                details:action.res.data.details
            }
        case 'SUBSCRIBE':
                return{
                    ...state,
                    subscribe:true
                }
        case 'SUBSCRIPTION_DONE':
            console.log('subsctiption state changing')
            return {
                ...state,
                subscribe: false
            }
        case 'ACTIVATE_SUBSCRIPTION':
            return {
                ...state,
                activateSubscription:true
            }
        case 'SUBSCRIPTION_ACTIVATED':
            console.log('fired')
            return{
                ...state,
                activateSubscription:false
            }
        case'UPDATE_SUBSCRIPTION':
            return {
                ...state,
                updateSubscription:true
            }
        case 'UNKNOWN_ERROR':
            return {
                // notify through a notification package
            }
        case 'LOADING':
            return{
                ...state,
                loading:true
            }
        case 'STOP_LOADING':
            return{
                ...state,
                loading:false
            }


        default:
            return state
    }


}

export default  SubscriptionsReducer;