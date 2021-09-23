import React from 'react'
import './CocktailDetail.css'
import { Link } from 'react-router-dom'

const CocktailDetail = () => {
  return <div>Cocktail details</div>
}

export default CocktailDetail

// const CocktailDetail = ({ cocktail }) => {
//     const {
//       description,
//       ingredients,
//       name,
//       image,

//     } }

//     return (
//         <div className="cocktail-detail">
//             <img src={image} alt={name} />
//             <h2>{name}</h2>
//             <p>{description}</p>

//         <h3>Ingredients</h3>
//         {ingredients.map(ingredient => (
//             <li key={ingredient.id}></li>
//         ))};
//     );

//             <Link to={`Home/${id}`} className="Home">
//                 Home
//             </Link>
//         </div>

//     );

// export default CocktailDetail;
