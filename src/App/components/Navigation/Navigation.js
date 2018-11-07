import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
	return (
		<div className="Navigation">
			<ul>
				<li><NavLink exact to="/" activeClassName="selected">home page</NavLink></li>
				<li><NavLink exact to="/header" activeClassName="selected">header page</NavLink></li>
				<li><NavLink exact to="/Api" activeClassName="selected">Api page</NavLink></li>
			</ul>
		</div>

	);
};

export default Navigation;
