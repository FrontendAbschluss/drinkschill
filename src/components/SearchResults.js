import React, { Component } from 'react';
import Drink from "./Drink";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        drinks: []
    }
  }
  componentDidMount() {
    fetch(
      `https://thecocktaildb.com/api/json/v1/1/search.php?s=${this.props.match.params.search}`
    ).then(async response => {
      try {
        const data = await response.json()
        console.log('response data?', data)
        console.log('response data.drinks?', data.drinks)
      } catch (error) {
        console.log('Error happened here!')
        console.error(error)
      }
    }).then(data => this.setState({ drinks: data.drinks }));
  }
  render() {
    return (
      <div className={'category-results-container'}>
          {this.state.drinks.map((e, i) => <Drink key={e.idDrink} id={e.idDrink} name={e.strDrink} img={e.strDrinkThumb} />)}
      </div>
  );
  }
}

export default SearchResults
