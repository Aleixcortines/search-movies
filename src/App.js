import React, { Component } from 'react'
import {Title} from './components/title';
import {SearchForm} from './components/SearchForm';
import {MoviesList} from './components/MoviesList';

import './App.css';
import 'bulma/css/bulma.css';

class App extends Component{

  //we create a empty array in state to full with movies
  state = { usedSearch: false, results:[]}
  //update the results array
  _handleResults =(results)=>{
    this.setState({results, usedSearch: true})
  }

  _renderResults(){

     return this.state.results.length ===0
      ? <p>Sorry results not found!</p>
      : <MoviesList movies={this.state.results}/>
  }



  render(){
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className='SearchForm-wrapper'>
      
        <SearchForm onResults={this._handleResults}/>
        </div>
        {this.state.usedSearch
        ?this._renderResults()
        : <small>Use the form to search a movie</small>
        }
        
      </div>
    );
  }
 
}

export default App;
