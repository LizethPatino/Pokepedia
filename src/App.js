import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Search from './components/NavBar/Search';


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
          <Search/>
          
       
      </div>
    );
  }
}

export default App;
