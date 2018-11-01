import React, { Component } from 'react';
// import logo from '../logo.svg';
import './App.scss';
import Header from '../Header/Header';
// import SkiDayCount from '../SkiDayCount/SkiDayCount';
import SkiDayList from "../SkiDayList/SkiDayList";


class App extends Component {
    render() {
      return (
        <div className="App">
          <Header />
          <main>
            <SkiDayList days={
              [
                {
                  resort: "Snow Vally",
                  date: new Date("1/2/2016"),
                  powder: true,
                  backcountry: false
                },
                {
                  resort: "Kirkwood",
                  date: new Date("1/1/2017"),
                  powder: false,
                  backcountry: false
                },
                {
                  resort: "Mt. Tallac",
                  date: new Date("1/2/2016"),
                  powder: false,
                  backcountry: true
                },
              ]
            } />
          </main>
        </div>
      );
    }
  }

export default App;
