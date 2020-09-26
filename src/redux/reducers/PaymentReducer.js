const  initState = {
    subscriptionmade:false
};

const PaymentReducer =(state= initState,action)=>{
    switch (action.type) {
        case 'SUCCESSFUL_SUBSCRIPTION':
            console.log(action);
            console.log('server created a new subscription')
            return {
                ...state,
                subscriptionmade: !state.subscriptionmade

            }
        default:
            return state
    }
}

export default PaymentReducer;
