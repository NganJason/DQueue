<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./modules/Home/Home";
import Header from "./common/modules/Header/Header";
import MerchantPage from "./modules/MerchantPage/MerchantPage";

import store from "./store";
=======
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import MerchantPage from "./modules/MerchantPage/MerchantPage";

import store from './store'
>>>>>>> bc4822eb4c48b3d91cfbfd2aa7adc7165154d7f9

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Switch>
<<<<<<< HEAD
          <Route path="/" exact component={Home} />
          <Route path="/merchant/:name" component={MerchantPage} />
=======
          <Route path="/merchant/:name" component={MerchantPage}/>
>>>>>>> bc4822eb4c48b3d91cfbfd2aa7adc7165154d7f9
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
