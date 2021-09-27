import { Link } from 'react-router-dom'
import React from 'react'
import './Drink.css'

const Drink = props => {
  return (
    <main className={'cocktails'}>
      <Link to={`/cocktail-detail/${props.id}`}>
        <div className={'drink-container'}>
          <img src={props.img} alt={props.name} className={'drink-image'} />
          <h2 className={'drink-name'}>{props.name}</h2>
        </div>
      </Link>
    </main>
  )
}

export default Drink
