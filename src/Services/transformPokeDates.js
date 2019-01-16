import React, { Component } from 'react';
import PokeCard from '../components/PokeContainer/PokeCardList/PokeCard';
import { URLID } from '../Constants/Url_api';



class TransformPokeDates extends Component{
    constructor(props){
        super(props);
        const {nombrePokemon}=props;
        this.state ={
            nombre: nombrePokemon,
            idPokemon: null,
            loading: true,
        };
    }


    componentDidMount = () => {
        this.getIdPokemon();
        setTimeout(() => this.setState({ loading: false }), 3000);

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
    const {nombre, idPokemon,loading}= this.state;
    return(
       <PokeCard nombrePokemon={nombre} idPokemon={idPokemon} loading={loading}/>
        );
    }
}


export default TransformPokeDates;