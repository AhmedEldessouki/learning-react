import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import SkiDayCount from './components/SkiDayCount/SkiDayCount';
import SkiDayList from "./components/SkiDayList/SkiDayList";
import { BrowserRouter, Switch, Route } from 'react-router-dom'



class App extends Component {

  render() {
    return (
      // <div className="App">
      //   <Header />
      //   <main>
      //     <SkiDayCount />
      //     <SkiDayList days={
      //       [
      //         {
      //           resort: "Snow Vally",
      //           date: new Date("1/2/2016"),
      //           powder: true,
      //           backcountry: false
      //         },
      //         {
      //           resort: "Kirkwood",
      //           date: new Date("1/1/2017"),
      //           powder: false,
      //           backcountry: false
      //         },
      //         {
      //           resort: "Mt. Tallac",
      //           date: new Date("1/2/2016"),
      //           powder: false,
      //           backcountry: true
      //         },
      //       ]
      //     } />
      //   </main>
      // </div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={App} />
            <Route exact path="/Header" component={Header} />
            <Route path='/SkiDayCount' component={SkiDayCount} />
            <Route path='/SkiDayList' component={SkiDayList} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
