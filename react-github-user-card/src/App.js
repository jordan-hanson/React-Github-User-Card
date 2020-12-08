import './App.css';
import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Jordan"
    }
  };
  render() {
    return (
      <div>
        <div>
          <h1>React GitHub User Card {this.state.name}</h1>
        </div>
        <div>
          <input placeholder="Search GitHub User"></input>
          <button>Search</button>
        </div>
      </div>
    )
  }
}

export default App;
