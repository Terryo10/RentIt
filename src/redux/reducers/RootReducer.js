import {combineReducers} from 'redux';
import PropertyReducer from "./PropertyReducer";
import AuthReducer from "./AuthReducer";
import SidebarReducer from "./SidebarReducer";
import SubscriptionsReducer from './SubscriptionsReducer';
import PaymentReducer from "./PaymentReducer";
import NotificationReducer from "./NotificationReducer";

const RootReducer =combineReducers({
    auth:AuthReducer,
    property:PropertyReducer,
    sideBar:SidebarReducer,
    subscription:SubscriptionsReducer,
    makepayment:PaymentReducer,
    notification:NotificationReducer
});


export default RootReducer;