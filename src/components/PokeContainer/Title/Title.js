import React from 'react';
import './title.css';
import TituloImg from './../../../assets/img/tituloPoke.png';

const Title = () =>{
    return(
        <div className="title">
                <img className="img-fluid" src={TituloImg} alt="Pokepedia"/>
        </div>
    );
}

export default Title;