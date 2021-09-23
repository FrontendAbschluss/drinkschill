import React from 'react';
import './item.css';

import { useParams, useHistory } from 'react-router-dom';

const Item = ({ cocktail }) => {
    const {
      description,
      ingredients,
      name,
      image,

      function HandleClick() {
        history.goBack();  



    } } = cocktail;

return (
    <div className="item">
        <img
        alt={`${name}'s preview`}
        className="image"
        src={photo}
      />
      <div className="item">
        <div className="name">{name}</div>
        <ul className="ingredients"></ul>

        {ingredients.map(ingredient => (
            <li key={ingredient.id}></li>
        ))};

        <button type="button" onClick={HandleClick}></button>
        <Zurueck />