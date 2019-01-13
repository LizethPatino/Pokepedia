import React from 'react';
import './stylesCard.css';
import { URL_IMG } from './../../../Constants/Url_api';


const PokeCard = ({nombrePokemon, idPokemon}) =>{


   return( 
    <div className="card border-light">
    <div className="card-body">
       <img src={`${URL_IMG}/${idPokemon}.png`} alt={nombrePokemon}/>
    </div>
    <div className="card-header text-capitalize">{nombrePokemon}</div>
    </div>    
   );
}

export default PokeCard;

