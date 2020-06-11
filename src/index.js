import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";
import Welcome from "./components/Welcome";
import App from "./components/App";
import Signup from "./components/auth/Signup";
import Feature from "./components/Feature";
import SignOut from "./components/auth/Signout";
import SignIn from "./components/auth/Signin";

const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem("token") },
  },
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={Signup} />
        <Route path="/feature" component={Feature} />
        <Route path="/signout" component={SignOut} />
        <Route path="/signin" component={SignIn} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
