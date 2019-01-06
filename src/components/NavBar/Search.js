import React, { Component } from 'react';
import { URL_API } from './../../Constants/Url_api';
import PokeCard from '../PokeCardList/PokeCard';



class Search extends Component {

constructor(){
    super();
    this.state ={
        nombre: null,
        data: null,
    };
}


    handleUpdateClick = (event) => {
        event.preventDefault();
         fetch( URL_API ).then(resolve =>{
             return resolve.json();
         }).then(data =>{
           // const datosPokemonProcesados = transformPokeDates(data); 
            //const tipoPokemon = data.types[1].type.name;
            //const tipoPokemon = data.types.length;
            const datoNombrePokemon = data.name;
            const fotoPokemon = data.sprites.front_default; 
           console.log(datoNombrePokemon);
           this.setState({
                 nombre: datoNombrePokemon,
                 data: fotoPokemon,
             });  
         });
         
     }
     

  render(){
        const {nombre , data} =this.state;
        return(
            <div>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Buscar Pokemon" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.handleUpdateClick}>Buscar</button>                
           </form>
            <p> el nombre es: {nombre} </p>
            <img src={data}/>
            <PokeCard nombrePokemon={nombre} fotoPokemon={data}/>
           </div>
           
        );
    }
}

export default Search;