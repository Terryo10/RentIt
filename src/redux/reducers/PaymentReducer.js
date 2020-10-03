const  initState = {
    subscriptionmade:false,
    paymentLoading:false
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
        case 'PAYMENT_LOADING':
            console.log(action);
            console.log('payment is loading now')
            return {
                ...state,
                paymentLoading: !state.paymentLoading

            }
        case 'STOP_PAYMENT_LOADING':
            return {
                ...state,
                paymentLoading: false

            }
        default:
            return state
    }
}

export default PaymentReducer;
