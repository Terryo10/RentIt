import {combineReducers} from 'redux';
import PropertyReducer from "./PropertyReducer";
import AuthReducer from "./AuthReducer";
import SidebarReducer from "./SidebarReducer";

const RootReducer =combineReducers({
    auth:AuthReducer,
    property:PropertyReducer,
    sideBar:SidebarReducer
});


export default RootReducer;