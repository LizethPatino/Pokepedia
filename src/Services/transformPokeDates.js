import React, { Component } from 'react';
import PokeCard from '../components/PokeContainer/PokeCardList/PokeCard';


class TransformPokeDates extends Component{
    constructor(props){
        super(props);
        const {nombrePokemon,urlPokemon}=props;
        this.state ={
            nombre: nombrePokemon,
            urlPokemon,
            imgPokemon:[],
        };
    }


    componentDidMount = () => {
        this.getImagePokemon();
   }
   
    getImagePokemon = () =>{
        const { urlPokemon } = this.state;
        fetch( urlPokemon ).then(resolve =>{
            return resolve.json();
        }).then(data =>{
       
          const imgPokemon = data.sprites.front_default;
          this.setState({
            imgPokemon,
          });
        
        });   
    }

render(){
    const {imgPokemon,nombre}= this.state;
    return(
        
      <PokeCard nombrePokemon={nombre} imgPokemon={imgPokemon}/>
        );
    }
}


export default TransformPokeDates;