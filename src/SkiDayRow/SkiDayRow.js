import React from 'react';
import { MdTerrain } from 'react-icons/md';
import { TiWeatherSnow } from 'react-icons/ti';
import { FaCalendar } from 'react-icons/fa';

const SkiDayRow = ({resort, date,powder, backcountry}) => (
	<tr>
		<td>
			<FaCalendar/>
			{date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}
		</td>
		<td>
			{resort}
		</td>
		<td>
			{(powder ? <TiWeatherSnow/> : null)}
		</td>
		<td>
			{(backcountry ? <MdTerrain/> : null)}
		</td>
	</tr>
)

export default SkiDayRow;