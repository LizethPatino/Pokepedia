import React from 'react';
import PokeCardList from '../components/PokeContainer/PokeCardList/PokeCardList';

const GetPokemonByName = ({nombrePokemonInput}) => {
return(
    <PokeCardList nombrePokemonInput = {nombrePokemonInput} />
);
 
}

export default GetPokemonByName;