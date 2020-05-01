import React from 'react';
import './finalProject.css';

const event = props => {
		return (
			<div>
				<a href = {props.link} ><h1> Stuffity stuff </h1> </a>
				<p> Welcome to the {props.event}! We are open from {props.first} to {props.second}. </p>
			</div>
		)
	}
	
export default event;