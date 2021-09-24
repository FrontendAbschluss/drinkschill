import { Link } from 'react-router-dom';
import React from 'react';
import './Drink.css';

const Drink = (props) => {
    return (
        <Link to={`/cocktail-detail/${props.id}`}>
            <div className={'drink-container'}>
                <img src={props.img} alt={props.name} className={'drink-image'} />
                <h2 className={'drink-name'}>{props.name}</h2>
            </div>
        </Link>
    );
}

export default Drink;