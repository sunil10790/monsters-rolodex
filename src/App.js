import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      logoText: "Me Mogambo! Mogambo God!"
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.logoText}
          </p>
          <button onClick={() => {
            this.setState({
              logoText: "Me Mogambo! Mogambo God! Mogambo setting text"
            })
          }}>Change Text</button>

        </header>
      </div>
    )
  }
}

export default App;
