import React, { Component } from 'react';
import Drink from "./Drink";

class CategoryResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: []
        }
    }
    componentDidMount() {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.props.match.params.ingredient}`)
            .then(res => res.json())
            .then(data => this.setState({ drinks: data.drinks }));
    }
    render() {
        return (
            <div>
                {this.state.drinks.map((e, i) => <Drink key={e.idDrink} id={e.idDrink} name={e.strDrink} img={e.strDrinkThumb} />)}
            </div>
        );
    }
}

export default CategoryResults;

// Code aus Skript für Zufallsfarbe und links/rechts
// {
//     data.map((e, i) => <div className={`
// 			style${Math.floor((i % 6) + 1)}
// 			${i % 2 == 0 ? 'left' : 'right'}
// 			`}
//         key={e.id}
//     >
//         {e.first_name}
//     </div>)
// }



// const CategoryResults = (props) => {
//     return (
//         <div>
//             <h1>CategoryResults</h1>
//             API-Call -> map -> Drink Components
//             <Drink></Drink>
//             <Drink></Drink>
//             <Drink></Drink>
//             <Drink></Drink>
//         </div>
//     );
// }

// export default CategoryResults;