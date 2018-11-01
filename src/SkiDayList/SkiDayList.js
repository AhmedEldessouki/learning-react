import React from 'react';
// import { MdTerrain } from 'react-icons/md';
// import { TiWeatherSnow } from 'react-icons/ti';
// import { FaCalendar } from 'react-icons/fa';
import SkiDayRow from '../SkiDayRow/SkiDayRow'
import './SkiDayList.scss';

const SkiDayList = ({ days }) => (
	<table className="">
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


export default SkiDayList;
