import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import {Provider} from "react-redux"
import {createStore} from "redux"
import reducers from './components/reducers'

import Welcome from "./components/Welcome";
import App from "./components/App";
import Signup from './components/auth/Signup';

ReactDOM.render(
  <Provider store={createStore(reducers,{})}>

  <BrowserRouter>
    <App>
      <Route extract path="/" component={Welcome} />
      <Route  path="/signup" component={Signup} />
    </App>
  </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
