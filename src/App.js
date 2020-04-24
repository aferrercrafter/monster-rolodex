import React, {Component} from 'react';

import {CardList} from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';


class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  changeHandler = e => {
    e => this.setState({searchField : e.target.value})
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}));
  }

  render() {

    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">

        <SearchBox 
          placeholder='search robot' 
          handleChange={changeHandler}
        />
        
        <CardList 
          monsters={filteredMonsters} 
          search={this.state.searchField}
        />

      </div>
    );
  }    
  
}


export default App;
