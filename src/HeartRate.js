import React from 'react';
import classes from './Elements.module.css'

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

export default HeartRate;