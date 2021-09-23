import React from 'react';

import './List.css';


const List = ({ cocktails }) => (
    <div className="cocktails">
      {cocktails.map(cocktail => <Item cocktail={cocktail} key={cocktail.id} />)}
    </div>
  );



export default List;
