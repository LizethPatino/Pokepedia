import React, { Component } from 'react';
import PokeCard from '../components/PokeContainer/PokeCardList/PokeCard';


class TransformPokeDates extends Component{
    constructor(props){
        super(props);
        const {nombrePokemon, id}=props;
        this.state ={
            nombre: nombrePokemon,
            nombreQuemadoPokemon:'Charmander',
            idPokemon: id,
        };
    }


    componentDidMount = () => {
        this.getImagePokemon();

   }
   
    getImagePokemon = () =>{
       const { idPokemon }=this.state; 
       const urlImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon}.png`;
       return urlImagen;
     }

render(){
    const {nombre}= this.state;
    return(
        <PokeCard nombrePokemon={nombre} imgPokemon={this.getImagePokemon()}/>
        );
    }
}


export default TransformPokeDates;