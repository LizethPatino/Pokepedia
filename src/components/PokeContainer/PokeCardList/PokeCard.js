import React from 'react';
import './stylesCard.css';
import { URL_IMG } from './../../../Constants/Url_api';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';


const PokeCard = ({nombrePokemon, idPokemon, loading}) =>{


   return( 
 
    <div className="card border-light">
         <Link to={`/${idPokemon}`}>
          <div className="card-body">
             {loading ? <CircularProgress size={30}/> : <img src={`${URL_IMG}/${idPokemon}.png`} alt={nombrePokemon}/>}
          </div>  
          <div className="card-header text-capitalize">{nombrePokemon}</div>
         </Link>
       
    </div>  

   );
}

export default PokeCard;
