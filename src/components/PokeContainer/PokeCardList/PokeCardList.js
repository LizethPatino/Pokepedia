import React, { Component } from 'react';
import { URL_API } from './../../../Constants/Url_api';
import PokeCard from './PokeCard';

class PokeCardList extends Component {


constructor(){
    super();
    this.state ={
        nombre: null,
        data: null,
        idPokemon:150,
    };
}

componentDidMount = () => {
     this.handleUpdateClick();
}


    handleUpdateClick = () => {
        const {idPokemon} =this.state;
        const API = `${URL_API}/${idPokemon}/`; 
         fetch( API ).then(resolve =>{
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
                <PokeCard nombrePokemon={nombre} fotoPokemon={data}/>
            </div>
           
        );
    }
}

export default PokeCardList;