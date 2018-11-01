import React, { Component } from 'react';
import './SkiDayCount.scss';
import { MdTerrain } from 'react-icons/md';
import { TiWeatherSnow } from 'react-icons/ti';
import { FaCalendar } from 'react-icons/fa';


class SkiDayCount extends Component {
	// constructor() {

	// }
	percentToDecimal(decimal) {
		return ((decimal * 100) + '%')
	}
	calcGoalPrograss(total, goal) {
		return this.percentToDecimal(total / goal)
	}
	componentDidMount() {
		console.log(this.props)
	}
	render() {
		return (
			<div className="SkiDayCount">
				<div className="total-days">
					<span>{this.props.total}</span>
					<FaCalendar/>
					<span> days</span>
				</div>
				<div className="powder-days">
					<span>{this.props.power}</span>
					<TiWeatherSnow/>
					<span> days</span>
				</div>
				<div className="backcountry-days">
					<span>{this.props.backcountry}</span>
					<MdTerrain />
					<span>day</span>
				</div>
				<div>
					<span>
						{this.calcGoalPrograss(this.props.total, this.props.goal)}
					</span>
				</div>
			</div>
		);
	}
}

export default SkiDayCount;
