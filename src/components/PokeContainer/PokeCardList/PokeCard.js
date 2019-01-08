import React from 'react';
import './stylesCard.css';


const PokeCard = ({nombrePokemon, imgPokemon}) =>{
   return( 
    <div className="card border-light">
    <div className="card-body">
       <img src={imgPokemon} alt={nombrePokemon}/>
    </div>
    <div className="card-header text-capitalize">{nombrePokemon}</div>
    </div>    
   );
}

export default PokeCard;

