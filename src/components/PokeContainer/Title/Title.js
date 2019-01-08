import React from 'react';
import './title.css';
import TituloImg from './../../../assets/img/tituloPoke.png';

const Title = () =>{
    return(
        <div className="title">
                <img  src={TituloImg}/>
        </div>
    );
}

export default Title;