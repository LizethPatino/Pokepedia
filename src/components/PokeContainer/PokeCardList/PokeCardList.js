import React, { Component } from 'react';
import { URL_API } from './../../../Constants/Url_api';
import './stylesCard.css';
import TransformPokeDates from './../../../Services/TransformPokeDates';


class PokeCardList extends Component {

    
constructor(){
    super();
    this.state ={
        pokemones: [],
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
        <div>
            <div className="container form-group has-search inputPokemon">
                <span className="fa fa-search form-control-feedback"></span>
                <input type="text" onChange={this.getPokemonName}className="form-control" placeholder="Ingresa el nombre del Pokémon"/> 
        
            </div>
                 <div className="container padre">
                     <div className="row">
                             {filteredPokemon.map((pokemon)=><TransformPokeDates key={pokemon.name} nombrePokemon={pokemon.name}/>
                )}  
                     </div>
                 </div>
        </div>     
        );
    }
}

export default PokeCardList;