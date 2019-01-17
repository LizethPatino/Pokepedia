import React, {Component} from 'react';
import { URLID, URL_IMG }from './../../../Constants/Url_api';
import { Link } from 'react-router-dom';

class SpecificPokemon extends Component {

constructor(props){
  super(props);
  const { id } = props.match.params; 
  this.state={
    idPokemon:id,
    dataPokemon:'',
    ability:'',
    type:'',
  };
}

componentDidMount = () => {
  this.getDatePokemon();
 

}

getDatePokemon( ){
const {idPokemon} =this.state;
const urlId= `${URLID}/${idPokemon}/`;
fetch( urlId ).then(resolve =>{
  return resolve.json();
}).then(datoPokemon =>{
  const ability = datoPokemon.abilities[0].ability.name; 
  const type = datoPokemon.types[0].type.name;
 this.setState({
     dataPokemon: datoPokemon,
     ability,
     type,
   });   
});
}

render () {
const {idPokemon, dataPokemon,ability,type} = this.state;
return (
 
  <div className="mt-3">
            <p><b>Name:</b> {dataPokemon.name}</p>
            <img src={`${URL_IMG}/${idPokemon}.png`} alt={dataPokemon.name}/>
            <p><b>N° Pokedex: #</b> {idPokemon}</p>
            <p><b>Ability: </b> {ability} </p>
            <p><b>Type: </b> {type} </p>
            <p><b>Base Experience: </b> {dataPokemon.base_experience} </p>
            <Link to={'/'}><button className="btn btn-danger">Regresar</button></Link>
      
            
            
  </div>
)
};
}
  export default SpecificPokemon;