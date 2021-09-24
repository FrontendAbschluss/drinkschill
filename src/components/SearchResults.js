// const SearchResults = () => {
//     return (
//         <div>
//             <h1>SearchResults</h1>
//             API-Call -> map -> Drink Components
//         </div>
//     );
// }

// export default SearchResults;

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