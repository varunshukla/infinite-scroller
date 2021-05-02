import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import FilterableContactTable from './components/FilterableContactTable';
import Header from './components/header';
import Login from './components/login';


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Header />
            <FilterableContactTable />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
