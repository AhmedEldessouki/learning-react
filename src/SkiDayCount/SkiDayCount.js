import React, { Component } from 'react';
import './SkiDayCount.scss';

class SkiDayCount extends Component {
	render() {
		return (
			<div className="SkiDayCount">
				<div className="total-days">
					<span>5 days</span>
			</div>
				<div className="powder-days">
<span>2 days</span>
</div>
<div className="backcountry-days">
<span>1 hiking day</span>
</div>
</div>
		);
	}
}

export default SkiDayCount;
