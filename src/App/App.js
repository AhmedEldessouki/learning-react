import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.scss';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </main>
      </div>
    );
  }
}

export default App;
