import React, { Component } from 'react';
//import TransformPokeDates from './../../../Services/TransformPokeDates';
import './Search.css';
//import GetPokemonByName from './../../../Services/GetPokemonByName';


class Search extends Component {

constructor(){
    super();
   
    this.state = {
        nombrePokemonInput : '',
    };
}


getPokemonName = (infoInput) => {
    infoInput.preventDefault(); 
    this.setState({nombrePokemonInput: infoInput.target.value});
}

getCardPokemon = () => {
    const {nombrePokemonInput} =this.state;
    console.log("el pokemon que tengo que buscar es:", nombrePokemonInput );
    this.setState={
        nombrePokemonInput,
    };
    //if( nombrePokemon !== '' && )
 }

  render(){
        return(
        <div className="row">

            <div className="col"></div>
                <div className="input-group mt-4 mb-3 col-sm-6">
                    <input type="text" onChange={this.getPokemonName} className="form-control" placeholder="Ingresa el nombre del Pokémon" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" onClick={this.getCardPokemon} id="button-addon2">Buscar</button>
                         </div>
                </div>
            <div className="col"></div>
        </div> 
        );
    }
}

export default Search;