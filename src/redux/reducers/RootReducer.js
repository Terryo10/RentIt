import {combineReducers} from 'redux';
import PropertyReducer from "./PropertyReducer";
import AuthReducer from "./AuthReducer";

const RootReducer =combineReducers({
    auth:AuthReducer,
    property:PropertyReducer
});


export default RootReducer;