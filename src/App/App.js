import React, { Component } from 'react';
// import logo from '../logo.svg';
import './App.scss';
import Header from '../Header/Header';
import SkiDayCount from '../SkiDayCount/SkiDayCount';
import SkiDayList from "../SkiDayList/SkiDayList";
import { Switch, Route } from 'react-router-dom'



class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     SkiDayLists
  //   }
  // }
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <SkiDayCount />
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
  //     <main>
  //       <Switch>
  //   <Route exact path='/' component={SkiDayCount}/>
  //   <Route exact path='/home' component={SkiDayCount}/>
  //   <Route path='/list' component={SkiDayList}/>
  // </Switch>
  //     </main>
    );
  }
}


export default App;
