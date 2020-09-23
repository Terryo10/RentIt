const initState = {
    details:[],
    subscribe:false,
    activateSubscription:false,
    updateSubscription:false
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
        case 'ACTIVATE_SUBSCRIPTION':
            return {
                ...state,
                activateSubscription:true
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

        default:
            return state
    }


}

export default  SubscriptionsReducer;