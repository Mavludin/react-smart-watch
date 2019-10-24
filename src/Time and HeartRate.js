import React from 'react';
import classes from './Elements.module.css';

const TimeElement = () => {
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	hours = hours <= 9 ? '0'+hours : hours;
	minutes = minutes <= 9 ? '0'+minutes : minutes;
	seconds = seconds <= 9 ? '0'+seconds : seconds;
	
	return (

		<div className = {classes.Time}>
			{hours}:{minutes}:{seconds}
		</div>
	)
}


const HeartRate = () => {

	let link = 'https://i.imgur.com/x9T1PUX.png';
	let alt = 'Heart rate';
	
	return (

		<div className = {classes.HeartRate}>
			<img src={link} alt={alt}/>
			<p>78</p>
		</div>
	)
}

export {TimeElement, HeartRate};