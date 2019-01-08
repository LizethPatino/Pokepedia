import React, { Component } from 'react';
import './stylesCard.css';


const PokeCard = ({nombrePokemon, fotoPokemon}) =>{
   return( 
    <div className="card border-light mb-3">
    <div className="card-body">
        <img src={fotoPokemon}/>  
    </div>
    <div className="card-header text-capitalize">{nombrePokemon}</div>
    </div>    
   );
}

export default PokeCard;

