import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from "./modules/Home/Home"

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
