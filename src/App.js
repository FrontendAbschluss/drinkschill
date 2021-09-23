import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import cocktaillist from "./components/cocktaillist";

function App() {
  return (
    <Router>
            <div>
                <Switch>
                    <Route path="/cocktaillist" exact component={cocktaillist} />
                </Switch>
            </div>
        </Router>
  );
}

export default App;
