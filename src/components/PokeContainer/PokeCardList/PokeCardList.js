import React, { Component } from 'react';
import { URL_API } from './../../../Constants/Url_api';
import './stylesCard.css';
import TransformPokeDates from './../../../Services/TransformPokeDates';


class PokeCardList extends Component {

    
constructor(){
    super();
    this.state ={
        pokemones: [],
        pokemonQuemado: 'pikachu',
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
     

  render(){
        var {pokemones, pokemonQuemado} =this.state;
        pokemones = pokemones.slice(0, 151);
        //console.log();
        return(
            <div className="container">
                <div className="row">
                {pokemones.filter(eleccion => eleccion.name ===pokemonQuemado).map((pokemon,index,url)=><TransformPokeDates key={index} nombrePokemon={pokemon.name}/>
                )}  
                 </div>
            </div>
           
        );
    }
}

export default PokeCardList;