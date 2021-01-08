import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import MerchantPage from "./modules/MerchantPage/MerchantPage";

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/merchant/:name" component={MerchantPage}/>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
