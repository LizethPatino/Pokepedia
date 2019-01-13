import React, { Component } from 'react';
import { URL_API } from './../../../Constants/Url_api';
import './stylesCard.css';
import TransformPokeDates from './../../../Services/TransformPokeDates';


class PokeCardList extends Component {

    
constructor(){
    super();
    //const {nombrePokemonInput} =props;
    this.state ={
        pokemones: [],
        //pokemonQuemado: 'raichu',
        nombrePokemonInput: '',
    };
}

componentDidMount = () => {
     this.handleUpdateClick();
}


    handleUpdateClick = () => {
         fetch( URL_API ).then(resolve =>{
             return resolve.json();
         }).then(data =>{
        
            this.setState({
                pokemones : data.results,
              });
         });
         
     }

     getPokemonName = (infoInput) => {
        this.setState({nombrePokemonInput: infoInput.target.value});        
    }
    
     

  render(){
        var {pokemones, nombrePokemonInput} =this.state;
        pokemones = pokemones.slice(0, 151);
        const filteredPokemon = pokemones.filter(pokemon => {
            return pokemon.name.indexOf(nombrePokemonInput) !== -1;
          });
        return(
            <div className="container">
                <div className="row"><input type="text" onChange={this.getPokemonName} className="form-control" placeholder="Ingresa el nombre del Pokémon"/>
                
        {filteredPokemon.map((pokemon)=><TransformPokeDates key={pokemon.name} nombrePokemon={pokemon.name}/>
                )}  
                 </div>
            </div>
           
        );
    }
}

export default PokeCardList;