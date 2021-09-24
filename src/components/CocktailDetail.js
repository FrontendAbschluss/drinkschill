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
      <div className="details">
          <figure>
            <img className="detail_image" src={this.state.details.strDrinkThumb} />
          </figure>
          <article className="right_article">
            <h2>
              {this.state.details.strDrink}
            </h2>
            <h3>Zutaten</h3>
            {/* durch ingredients mappen */}
            <span className="detail_ingredient_item">{this.state.details.strIngredient1 ? this.state.details.strIngredient1 : console.log("keine this.state.details.strIngredient1")}</span>
            <span className="detail_ingredient_item">{this.state.details.strIngredient2 ? this.state.details.strIngredient2 : console.log("keine this.state.details.strIngredient2")}</span>
            <span className="detail_ingredient_item">{this.state.details.strIngredient3 ? this.state.details.strIngredient3 : console.log("keine this.state.details.strIngredient3")}</span>
            <span className="detail_ingredient_item">{this.state.details.strIngredient4 ? this.state.details.strIngredient4 : console.log("keine this.state.details.strIngredient4")}</span>
            <span className="detail_ingredient_item">{this.state.details.strIngredient5 ? this.state.details.strIngredient5 : console.log("keine this.state.details.strIngredient5")}</span>
            <span className="detail_ingredient_item">{this.state.details.strIngredient6 ? this.state.details.strIngredient6 : console.log("keine this.state.details.strIngredient6")}</span>
            <span className="detail_ingredient_item">{this.state.details.strIngredient7 ? this.state.details.strIngredient7 : console.log("keine this.state.details.strIngredient7")}</span>
            <span className="detail_ingredient_item">{this.state.details.strIngredient8 ? this.state.details.strIngredient8 : console.log("keine this.state.details.strIngredient8")}</span>
            <span className="detail_ingredient_item">{this.state.details.strIngredient9 ? this.state.details.strIngredient9 : console.log("keine this.state.details.strIngredient9")}</span>
            <span className="detail_ingredient_item">{this.state.details.strIngredient10 ? this.state.details.strIngredient10 : console.log("keine this.state.details.strIngredient10")}</span>
            <span className="detail_ingredient_item">{this.state.details.strIngredient11 ? this.state.details.strIngredient11 : console.log("keine this.state.details.strIngredient11")}</span>
            <span className="detail_ingredient_item">{this.state.details.strIngredient12 ? this.state.details.strIngredient12 : console.log("keine this.state.details.strIngredient12")}</span>
            <span className="detail_ingredient_item">{this.state.details.strIngredient13 ? this.state.details.strIngredient13 : console.log("keine this.state.details.strIngredient13")}</span>
            <span className="detail_ingredient_item">{this.state.details.strIngredient14 ? this.state.details.strIngredient14 : console.log("keine this.state.details.strIngredient14")}</span>
            <span className="detail_ingredient_item">{this.state.details.strIngredient15 ? this.state.details.strIngredient15 : console.log("keine this.state.details.strIngredient15")}</span>
            <p>
            <span className="detail_instructions">{this.state.details.strInstructions}</span>
            </p>
          </article>
      </div>
    );
  }
}

export default CocktailDetail;