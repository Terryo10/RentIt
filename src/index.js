import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import RootReducer from "./redux/reducers/RootReducer";
import thunk from "redux-thunk";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


// import "./owl.css";

const store = createStore(RootReducer, applyMiddleware(thunk));
function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App >
        <ToastContainer />
      </App>
    </Provider>,
    document.getElementById("root")
  );
}

store.subscribe(render);

render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
