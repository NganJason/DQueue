import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./modules/Home/Home";
import Header from "./common/modules/Header/Header";
import MerchantPage from "./modules/MerchantPage/MerchantPage";
import MerchantSignUp from "./modules/MerchantSignUp/MerchantSignUp";

import store from "./store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/merchant/:name" component={MerchantPage} />
          <Route path="/merchant-sign-up" component={MerchantSignUp}/>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
