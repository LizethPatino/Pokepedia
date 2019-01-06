import React, { Component } from 'react';
import './stylesCard.css';

const PokeCard = ({nombrePokemon, fotoPokemon}) =>{
   return( <div className="card">
    <img src={fotoPokemon} className="card-img-center" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{nombrePokemon}</h5>
    </div>
</div>);
}

export default PokeCard;
