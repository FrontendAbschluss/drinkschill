import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import SearchForm from './SearchForm';

import Header from './components/Header';
import Drink from "./Drink";

/*
function Search() {
    const searchHeader = "Was möchtest du trinken?";
    const [error, setError] = useState(null);
    const[cocktail, ]
}
*/

// Alkoholisches Getränk suchen
useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                console.log(result);
                result.drinks === null ? setCocktails([]) : setCocktails(result.Drink);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
}, [])


const searchCocktail = (cocktailToSearch) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailToSearch}`)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                console.log(result);
                result.drinks === null ? setCocktails([]) : setCocktails(result.Drink);
                setCocktail(cocktailToSearch);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
}


function ErrorHandling(){

if (error) {
    return <div>Error: {error.message}</div>;
} else if (!isLoaded) {
    return <div>Die Suche ergab keine Treffer! Versuche es bitte erneut</div>;
} else {
    return (
        <div className="searchPage">
            <Header headerText={searchHeader} />
            <SearchForm passInputToSearch={searchCocktail} />
            <SearchInput cocktailSearched={cocktail} />
        </div>
    );
}

}


function SearchForm(props) {
    const [inputSearch, setInputSearch] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        props.passInputToSearch(inputSearch);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Gib einen Cocktailnamen ein:
                <input type="text" name="inputSearch" value={inputSearch} onChange={e => setInputSearch(e.target.value)} />
            </label>
            <br />
            <button type="submit">Suchen</button>
        </form >
    )
}

export default SearchForm;



function SearchInput(props) {

    return (
        <label>Cocktails, die enthalten:
            <input type="text" value={props} readOnly />
        </label>
    );
}

export default SearchInput;






/*
const SearchResults = () => {
    return (
        <div>
            <h1>SearchResults</h1>
            API-Call -> map -> Drink Components
        </div>
    );
}

export default SearchResults;

// class CocktailSearch extends Component { 

//     componentDidMount() {
//         fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
//           .then(res => res.json())
//           .then(data => this.setState({ data }));
//         fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
//           .then(res => res.json())
//           .then(data => this.setState({ categories: data.cocktails }));
//       }
//       handleChange = e => {
//         this.setState({ [e.target.name]: e.target.value });
//       };
//       getData = e => {
//         e.preventDefault();
//         fetch(
//           `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${
//             this.state.searchTerm
//           }`
//         )
//           .then(res => res.json())
//           .then(data => this.setState({ data }));
//       };

//     }