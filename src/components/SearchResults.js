import React from 'react'
import Drink from "./Drink";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: []
    }
  }
  componentDidMount() {
    fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${this.props.match.params.search}`)
      .then(res => res.json())
      .then(data => this.setState({ drinks: data.drinks }))
  }
  render() {
    return (
      <div className={'category-results-container'}>
        {this.state.drinks.map((e, i) => <div className={`style${Math.floor((i % 6) + 1)}`}><Drink key={e.idDrink} id={e.idDrink} name={e.strDrink} img={e.strDrinkThumb} /></div>)}
      </div>
    )
  }
}

export default SearchResults
