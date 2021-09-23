import './App.css';
import React, { Component } from 'react';

// import logo from "logo.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import CocktailDetail from "./components/CocktailDetail";
import Home from "./components/Home";
import SearchResults from './components/SearchResults';
import AddDrink from "./components/AddDrink";
import Header from './components/Header';
import Footer from './components/Footer';
import CategoryResults from './components/CategoryResults';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {

  }
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cocktail-detail" component={CocktailDetail} />
          <Route path="/category-results" component={CategoryResults} />
          <Route path="/search-results" component={SearchResults} />
          <Route path="/add-drink" component={AddDrink} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;