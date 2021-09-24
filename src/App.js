import './App.css'
import React, { Component } from 'react'

// import logo from "logo.js";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import CocktailDetail from './components/CocktailDetail'
import Home from './components/Home'
import SearchResults from './components/SearchResults'
import Header from './components/Header'
import Footer from './components/Footer'
import CategoryResults from './components/CategoryResults'

// Suche Imports

// import CategoryResults1 from './components/SearchForm'
// import CategoryResults2 from './components/SearchInput'

// import CategoryResults1 from './components/SearchForm';
// import CategoryResults2 from './components/SearchInput';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() { }
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/category/:ingredient" component={CategoryResults} />
          <Route path="/cocktail-detail/:id" component={CocktailDetail} />
          <Route path="/search-results/:search" component={SearchResults} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default App
