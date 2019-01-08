import React from 'react';
import Title from './Title/Title';
//import Search from './Search/Search';
import PokeCardList from './PokeCardList/PokeCardList';

const PokeContainer = () =>{
    return(
        <div>
             <Title/>  
            <PokeCardList/>                           
        </div>
        
    );
    
}

export default PokeContainer;
