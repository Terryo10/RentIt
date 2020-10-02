const initState = {
  type: "",
  message: "",
};

const NotificationReducer = (state = initState, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        ...state,
        type: "success",
        message: action.message
      };
    case "ERROR":
      console.log(action.res.data.message)
      return {
        ...state,
        type: "error",
        message: action.res.data.message
      };
      case "ERROR_CUSTOM":
      console.log(action.message)
      return {
        ...state,
        type: "error",
        message: action.res.data.message
      };
    case "WARNING":
      return {
        ...state,
        type: "warning",
        message: action.message
      };
    case "INFO":
      return {
        ...state,
        type: "info",
        message: action.message
      };
    default:
      return state;
  }
};

export default NotificationReducer;
