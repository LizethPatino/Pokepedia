import React, { Component } from 'react';
//import TransformPokeDates from './../../../Services/TransformPokeDates';
import './Search.css';
import GetPokemonByName from '../../../Services/GetPokemonByName';
//import GetPokemonByName from './../../../Services/GetPokemonByName';


class Search extends Component {

constructor(){
    super();
   
    this.state = {
        nombrePokemonInput : '',
    };
}


getPokemonName = (infoInput) => {
    this.setState({nombrePokemonInput: infoInput.target.value});
    console.log("el pokemon que tengo que buscar es:", this.state.nombrePokemonInput );
}



  render(){
      const {nombrePokemonInput} =this.state;
        return(
        <div className="row">

            <div className="col"></div>
                <div className="input-group mt-4 mb-3 col-sm-6">
                    <input type="text" onChange={this.getPokemonName} className="form-control" placeholder="Ingresa el nombre del Pokémon" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        
                </div>
            <div className="col"></div>
            <GetPokemonByName nombrePokemonInput={nombrePokemonInput}/>
        </div> 
        );
    }
}

export default Search;