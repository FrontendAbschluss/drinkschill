import React, { Component } from 'react';

import './CocktailDetail.css'
import { Link } from 'react-router-dom'

class CocktailDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: []
    }
  }
  componentDidMount() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => this.setState({ details: data.drinks[0] }));
  }
  render() {
    console.log('details:', this.state.details)
    return (
      <div>
        <h2>
          {this.state.details.strDrink}
        </h2>
        {/* durch ingredients mappen */}
        <p>
          {this.state.details.strInstructions}
        </p>
      </div>
    );
  }
}

export default CocktailDetail;