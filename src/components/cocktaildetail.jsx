import React from 'react';
import './cocktaildetail.css';

const CocktailDetail = ({ cocktail }) => {
    const {
      description,
      ingredients,
      name,
      image,

    } }

    return (
        <div className="cocktail-detail">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>
        
        <h3>Ingredients</h3>
        {ingredients.map(ingredient => (
            <li key={ingredient.id}></li>
        ))};
    )};

    export default cocktailDetail;