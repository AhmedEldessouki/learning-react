import React from 'react';
// import PropTypes from 'prop-types';
// import { MdTerrain } from 'react-icons/md';
// import { TiWeatherSnow } from 'react-icons/ti';
// import { FaCalendar } from 'react-icons/fa';
import SkiDayRow from './SkiDayRow'
import './SkiDayList/SkiDayList.scss';



const SkiDayList = ({ days }) => (
	<table className="SkiDayList">
		<thead>
			<tr>
				<th>Date</th>
				<th>Resort</th>
				<th>Powder</th>
				<th>BackCountry</th>
			</tr>
		</thead>
		<tbody>
			{days.map((day, i) =>
				<SkiDayRow key={i}
					//...day = all that shit writen under it	
					{...day}
				// resort={day.resort}
				// date={day.date}
				// powder={day.powder}
				// backcountry={day.backcountry}
				/>
			)}
		</tbody>
	</table>
)

SkiDayList.propTypes = {
	days: function (props) {
		if (!Array.isArray(props.days)) {
			return new Error(
				"SkiDayList should be an array"
			)
		} else if (!props.days.length) {
			return new Error(
				"SkiDayList must have atleast 1 record"
			);

		} else {
			return null;
		}
	}
}
// SkiDayList.days.propTypes = {
// 	days: PropTypes.array
// 	// resort: PropTypes.string.isRequired,
// 	// date: PropTypes.instanceOf(Date).isRequired,
// 	// powder: PropTypes.bool,
// 	// backcountry: PropTypes.bool
// }
export default SkiDayList;
