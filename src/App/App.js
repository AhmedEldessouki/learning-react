import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import SkiDayCount from './components/SkiDayCount';
import SkiDayList from "./components/SkiDayList";
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import NotFound from './components/NotFound/NotFound';


class App extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <Header className="App-header" ></Header>
        <Switch>
          <Route exact={true} path="/" component={SkiDayCount} />
          <Route path="/skiDayCount" component={SkiDayCount} />
          <Route path="//:SkiDayList" component={App} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
        <SkiDayList id="list"
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
      </div>
    );
  }
}


export default App;
