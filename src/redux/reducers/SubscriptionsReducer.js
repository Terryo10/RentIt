const initState = {
  details: [],
  fetching:true,
  subscribe: false,
  activateSubscription: false,
  updateSubscription: false,
  loading: false,
  serverRecheck:false
};

const SubscriptionsReducer = (state = initState, action) => {
  switch (action.type) {
    case "DETAILS_FETCHED":
      console.log(action)
      return {
        ...state,
        details: action.res.data.details,
        fetching:false,
        serverRecheck:true

      };
    case "SUBSCRIBE":
      return {
        ...state,
        subscribe: true,
      };
    case "ACTIVATE_SUBSCRIPTION":
      return {
        ...state,
        activateSubscription: true,
      };
    case "ACTIVATED_SUBSCRIPTION":
      return {
        ...state,
        activateSubscription: false,
      };
    case "SUBSCRIBED":
      return {
        ...state,
        subscribe: false,
      };
    case "UPDATE_SUBSCRIPTION":
      return {
        ...state,
        updateSubscription: true,
      };
    case "UNKNOWN_ERROR":
      return {
        // notify through a notification package
      };
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "STOP_LOADING":
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default SubscriptionsReducer;
