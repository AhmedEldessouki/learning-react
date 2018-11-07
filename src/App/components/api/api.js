import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './api.scss';
// import { MdTerrain } from 'react-icons/md';
// import { TiWeatherSnow } from 'react-icons/ti';
// import { FaCalendar } from 'react-icons/fa';
import axios from 'axios';


class Api extends Component {
	constructor(props) {
		super(props);
		this.state = { todos: [] };
	}

	percentToDecimal(decimal) {
		return ((decimal * 100) + '%')
	}
	calcGoalPrograss(total, goal) {
		return this.percentToDecimal(total / goal)
	}
	componentDidMount() {
		// console.log(this.props)
		console.log('i mounted');
		axios.get(`https://jsonplaceholder.typicode.com/photos`)
			.then(res => {
				console.log('res: ', res.data);
				this.setState({ todos: res.data });
				console.log("state todos", this.state.todos);
				// console.log("state todo 1",this.state.todos[0].completed);
				// console.log("state todo 1",this.state.todos[0].title);
			})
			.catch(error => {
				console.log("my error:", error)
			});
	}
	render() {
		const myData = this.state.todos;
		return (
			<div className="SkiDayCount">
				{/*<div className="total-days">*/}
				{/*<span>{this.props.total}</span>*/}
				{/*/!* <FaCalendar /> *!/*/}
				{/*<span> days</span>*/}
				{/*</div>*/}
				{/*<div className="powder-days">*/}
				{/*<span>{this.props.power}</span>*/}
				{/*<TiWeatherSnow />*/}
				{/*<span> days</span>*/}
				{/*</div>*/}
				{/*<div className="backcountry-days">*/}
				{/*<span>{this.props.backcountry}</span>*/}
				{/*<MdTerrain />*/}
				{/*<span>day</span>*/}
				{/*</div>*/}
				{/*<div>*/}
				{/*<span>*/}
				{/*{this.calcGoalPrograss(this.props.total, this.props.goal)}*/}
				{/*</span>*/}
				{/*</div>*/}
				<br />
				<ul className="imgGrid">
					{(myData.length > 10) ? myData.map((item, i) =>
						<li key={i} >
							<div className="container">
								<img className="image" src={item.url} alt={item.id} />
								<div class="middle">
									<div class="text">{item.title}</div>
								</div>
							</div>
						</li>,
					) : <p>no data..</p>}
				</ul>
			</div>
		);
	}
}

export default Api;


