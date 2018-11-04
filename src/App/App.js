import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import SkiDayCount from './components/SkiDayCount';
import SkiDayList from "./components/SkiDayList";
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/navigation';


class App extends Component {

	render() {
		return (
			<div>
        <Navigation />
          <Switch>
            <Route exact path="/" component={SkiDayCount} />
            <Route path="/header" component={Header} />
            <Route path="/skiDayCount" component={SkiDayCount} />
            <Route path="/skiDayList" component={SkiDayList}
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
            <Route component={Error} />
          </Switch>
        </div>
		);
	}
}


export default App;
