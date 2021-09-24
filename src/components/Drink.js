import { Link } from 'react-router-dom';
import React from 'react';

const Drink = (props) => {
    return (
        <Link to={`/cocktail-detail/${props.id}`}>
            <div>
                <h1>{props.name}</h1>
                <p>{props.id}</p>
                <img src={props.img} alt={props.name} />
            </div>
        </Link>
    );
}

export default Drink;