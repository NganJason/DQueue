import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./modules/Home/Home";
import Header from "./common/modules/Header/Header";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
