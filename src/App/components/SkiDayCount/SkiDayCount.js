import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SkiDayCount.scss';
import { MdTerrain } from 'react-icons/md';
import { TiWeatherSnow } from 'react-icons/ti';
// import { FaCalendar } from 'react-icons/fa';
import axios from 'axios';


class SkiDayCount extends Component {
	constructor(props) {
		super(props);
		this.state = {todos: []};
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
		axios.get(`https://jsonplaceholder.typicode.com/todos`)
			.then(res => {
				console.log('res: ',res.data );
				this.setState({ todos:res.data });
				console.log("state todos",this.state.todos);
				// console.log("state todo 1",this.state.todos[0].completed);
				// console.log("state todo 1",this.state.todos[0].title);
			})
			.catch(error => {
				console.log("my error:",error)
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
				<br/>
				<ul>
					{ (myData.length > 1) ? myData.map((item, i) =>
					<li key={i}>
						{item.title}
						<br/>
						{item.id}
					</li>,
				) : <p>no data..</p> }
				</ul>
			</div>
		);
	}
}
SkiDayCount.defaultProps = {
	total: 50,
	powder: 10,
	backcountry: 15,
	goal: 75
}
SkiDayCount.propTypes = {
	total: PropTypes.number,
	powder: PropTypes.number,
	backcountry: PropTypes.number,
	goal: PropTypes.number,
}
export default SkiDayCount;


