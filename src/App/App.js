import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import SkiDayCount from './components/SkiDayCount';
import SkiDayList from "./components/SkiDayList";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation';


class App extends Component {

  render() {
    return (
      // <div className="App">
      //   <Header />
      //   <main>
      //     <SkiDayCount />
          // <SkiDayList days={
          //   [
          //     {
          //       resort: "Snow Vally",
          //       date: new Date("1/2/2016"),
          //       powder: true,
          //       backcountry: false
          //     },
          //     {
          //       resort: "Kirkwood",
          //       date: new Date("1/1/2017"),
          //       powder: false,
          //       backcountry: false
          //     },
          //     {
          //       resort: "Mt. Tallac",
          //       date: new Date("1/2/2016"),
          //       powder: false,
          //       backcountry: true
          //     },
          //   ]
          // } />
      //   </main>
      // </div>
      <BrowserRouter>
        <div>
        <Navigation/>
          <Switch>
            <Route path='/' component={SkiDayCount} exact />
            <Route path="/header" component={Header} />
            <Route path='/skiDayCount' component={SkiDayCount} />
            <Route path='/skiDayList' component={SkiDayList} 
              days={
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
              } 
            />
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
