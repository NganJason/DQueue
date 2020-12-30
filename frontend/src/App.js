import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>

        </Switch>
      </Router>
    </Provider>
  )
}

export default App
