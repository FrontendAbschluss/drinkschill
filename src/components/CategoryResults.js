import React, { Component } from 'react';
import Drink from "./Drink";
import './CategoryResults.css';

class CategoryResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: []
        }
    }
    componentDidMount() {
        if (this.props.match.params.ingredient === 'Random') {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
                .then(res => res.json())
                .then(data => this.setState({ drinks: data.drinks }));
        } else if (this.props.match.params.ingredient === 'Non_Alcoholic') {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
                .then(res => res.json())
                .then(data => this.setState({ drinks: data.drinks }));
        } else {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.props.match.params.ingredient}`)
                .then(res => res.json())
                .then(data => this.setState({ drinks: data.drinks }));
        }
    }
    render() {
        return (
            <div className={'category-results-container'}>
                {this.state.drinks.map((e, i) => <div className={`style${Math.floor((i % 6) + 1)} ${i % 2 === 0 ? 'left' : 'right'}`}><Drink key={e.idDrink} id={e.idDrink} name={e.strDrink} img={e.strDrinkThumb} /></div>)}
            </div>
        );
    }

}


export default CategoryResults;