import React, { Component } from 'react';
import './App.css';
import PokeContainer from './components/PokeContainer/PokeContainer';
import NavBar from './components/NavBar/NavBar';
import { Route, Switch } from 'react-router-dom';
import SpecificPokemon from './components/PokeContainer/PokeCardList/SpecificPokemon';

class App extends Component {

  
  render() {
  
    return (
      <div className="App">
          <NavBar/>
          <Switch>
            <Route exact path='/' component={ PokeContainer } />
            <Route path='/:id' component={ SpecificPokemon } />
          </Switch>    
      </div>
    );
  }
}

export default App;
