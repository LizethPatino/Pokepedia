import React, { Component } from 'react';
import { URL_API } from './../../../Constants/Url_api';
import './stylesCard.css';
import TransformPokeDates from '../../../Services/TransformPokeDates';

class PokeCardList extends Component {

    
constructor(){
    super();
    this.state ={
        pokemones: [],
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
        var {pokemones} =this.state;
        pokemones = pokemones.slice(0, 5);
        return(
            <div className="container">
                <div className="row">
                {pokemones.map((pokemon,index,url)=><TransformPokeDates key={index} nombrePokemon={pokemon.name} id={index+1} urlPokemon={pokemon.url}/>)}    
                 </div>
            </div>
           
        );
    }
}

export default PokeCardList;