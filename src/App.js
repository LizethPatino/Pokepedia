import React, { Component } from 'react';
import './App.css';
import PokeContainer from './components/PokeContainer/PokeContainer';
import NavBar from './components/NavBar/NavBar';


class App extends Component {
  
  render() {
  
    return (
      <div className="App">
          <NavBar/>
          <PokeContainer/>     
      </div>
    );
  }
}

export default App;
