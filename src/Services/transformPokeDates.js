import React, { Component } from 'react';
import PokeCard from '../components/PokeContainer/PokeCardList/PokeCard';
import { URLID } from './../Constants/Url_api';


class TransformPokeDates extends Component{
    constructor(props){
        super(props);
        const {nombrePokemon}=props;
        this.state ={
            nombre: nombrePokemon,
            idPokemon: null,
        };
    }


    componentDidMount = () => {
        this.getIdPokemon();

   }

   getIdPokemon( ){
    const {nombre} =this.state;
    const urlId= `${URLID}/${nombre}/`;
    fetch( urlId ).then(resolve =>{
        return resolve.json();
    }).then(datoPokemon =>{
       this.setState({
           idPokemon : datoPokemon.id,
         });   
    });
}
   
render(){
    const {nombre, idPokemon}= this.state;
    return(
        <PokeCard nombrePokemon={nombre} idPokemon={idPokemon}/>
        );
    }
}


export default TransformPokeDates;