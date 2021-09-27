import React, { Component } from 'react'
import './CocktailDetail.css'

class CocktailDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      details: [],
    }
  }
  componentDidMount() {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`
    )
      .then(res => res.json())
      .then(data => this.setState({ details: data.drinks[0] }))
  }
  render() {
    const imgurl = { background: `url(${this.state.details.strDrinkThumb}) center/cover no-repeat`, width: "450px", height: "450px", margin: "0" };
    return (
      <div>
        <h2 className="detail_title">{this.state.details.strDrink}</h2>
        <div className="details">

          <figure style={imgurl}>
          </figure>
          <article className="right_article">
            <h3>Zutaten</h3>
            <span className="detail_ingredient_item">
              {this.state.details.strIngredient1
                ? this.state.details.strMeasure1 ? `${this.state.details.strMeasure1} ${this.state.details.strIngredient1}` : this.state.details.strIngredient1
                : console.log('keine this.state.details.strIngredient1')}
            </span>
            <span className="detail_ingredient_item">
              {this.state.details.strIngredient2
                ? this.state.details.strMeasure2 ? `${this.state.details.strMeasure2} ${this.state.details.strIngredient2}` : this.state.details.strIngredient2
                : console.log('keine this.state.details.strIngredient2')}
            </span>
            <span className="detail_ingredient_item">
              {this.state.details.strIngredient3
                ? this.state.details.strMeasure3 ? `${this.state.details.strMeasure3} ${this.state.details.strIngredient3}` : this.state.details.strIngredient3
                : console.log('keine this.state.details.strIngredient3')}
            </span>
            <span className="detail_ingredient_item">
              {this.state.details.strIngredient4
                ? this.state.details.strMeasure4 ? `${this.state.details.strMeasure4} ${this.state.details.strIngredient4}` : this.state.details.strIngredient4
                : console.log('keine this.state.details.strIngredient4')}
            </span>
            <span className="detail_ingredient_item">
              {this.state.details.strIngredient5
                ? this.state.details.strMeasure5 ? `${this.state.details.strMeasure5} ${this.state.details.strIngredient5}` : this.state.details.strIngredient5
                : console.log('keine this.state.details.strIngredient5')}
            </span>
            <span className="detail_ingredient_item">
              {this.state.details.strIngredient6
                ? this.state.details.strMeasure6 ? `${this.state.details.strMeasure6} ${this.state.details.strIngredient6}` : this.state.details.strIngredient6
                : console.log('keine this.state.details.strIngredient6')}
            </span>
            <span className="detail_ingredient_item">
              {this.state.details.strIngredient7
                ? this.state.details.strMeasure7 ? `${this.state.details.strMeasure7} ${this.state.details.strIngredient7}` : this.state.details.strIngredient7
                : console.log('keine this.state.details.strIngredient7')}
            </span>
            <span className="detail_ingredient_item">
              {this.state.details.strIngredient8
                ? this.state.details.strMeasure8 ? `${this.state.details.strMeasure8} ${this.state.details.strIngredient8}` : this.state.details.strIngredient8
                : console.log('keine this.state.details.strIngredient8')}
            </span>
            <span className="detail_ingredient_item">
              {this.state.details.strIngredient9
                ? this.state.details.strMeasure9 ? `${this.state.details.strMeasure9} ${this.state.details.strIngredient9}` : this.state.details.strIngredient9
                : console.log('keine this.state.details.strIngredient9')}
            </span>
            <span className="detail_ingredient_item">
              {this.state.details.strIngredient10
                ? this.state.details.strMeasure10 ? `${this.state.details.strMeasure10} ${this.state.details.strIngredient10}` : this.state.details.strIngredient10
                : console.log('keine this.state.details.strIngredient10')}
            </span>
            <span className="detail_ingredient_item">
              {this.state.details.strIngredient11
                ? this.state.details.strMeasure11 ? `${this.state.details.strMeasure11} ${this.state.details.strIngredient11}` : this.state.details.strIngredient11
                : console.log('keine this.state.details.strIngredient11')}
            </span>
            <span className="detail_ingredient_item">
              {this.state.details.strIngredient12
                ? this.state.details.strMeasure12 ? `${this.state.details.strMeasure12} ${this.state.details.strIngredient12}` : this.state.details.strIngredient12
                : console.log('keine this.state.details.strIngredient12')}
            </span>
            <span className="detail_ingredient_item">
              {this.state.details.strIngredient13
                ? this.state.details.strMeasure13 ? `${this.state.details.strMeasure13} ${this.state.details.strIngredient13}` : this.state.details.strIngredient13
                : console.log('keine this.state.details.strIngredient13')}
            </span>
            <span className="detail_ingredient_item">
              {this.state.details.strIngredient14
                ? this.state.details.strMeasure14 ? `${this.state.details.strMeasure14} ${this.state.details.strIngredient14}` : this.state.details.strIngredient14
                : console.log('keine this.state.details.strIngredient14')}
            </span>
            <span className="detail_ingredient_item">
              {this.state.details.strIngredient15
                ? this.state.details.strMeasure15 ? `${this.state.details.strMeasure15} ${this.state.details.strIngredient15}` : this.state.details.strIngredient15
                : console.log('keine this.state.details.strIngredient15')}
            </span>
            <p>
              <span className="detail_instructions">
                {this.state.details.strInstructions}
              </span>
            </p>
          </article>
        </div></div>
    )
  }
}

export default CocktailDetail
