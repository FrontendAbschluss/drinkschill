import React from 'react';

<<<<<<< HEAD
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
=======
class SearchResults extends React.Component {
    componentDidMount() {
            fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${this.props.match.params.search}`).then(async response => {
                try {
                 const data = await response.json()
                 console.log('response data?', data)
               } catch(error) {
                 console.log('Error happened here!')
                 console.error(error)
               }
              })
    }
    render() { 
        return <div>
            test
        </div>;
    }
}
 
export default SearchResults;
>>>>>>> be5e0038cf1ddbb744157ffffa3b99631892c5fc
