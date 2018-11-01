import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.scss';
import Header from '../Header/Header';
import SkiDayCount from '../SkiDayCount/SkiDayCount';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
         <SkiDayCount />
        </main>
      </div>
    );
  }
}

export default App;
