import React, { Component } from 'react';
import './App.css';
import PokeContainer from './components/PokeContainer/PokeContainer';
import NavBar from './components/NavBar/NavBar';
import PokeCardList from './components/PokeContainer/PokeCardList/PokeCardList';

class App extends Component {
  constructor(){
    super();
   /* this.state ={
      name:"Ditto",
    }; */
  }


  render() {
   // const {name}=this.state;
    return (
      <div className="App">
          <NavBar/>
          <PokeContainer/>
          <PokeCardList/>
      </div>
    );
  }
}

export default App;
