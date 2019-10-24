import React from 'react'
import classes from './Elements.module.css'

const Element = (props) => {
	return(

		<img onClick = {props.updateWatch} src={props.imageUrl} alt={props.styleName} />

	)
}

export default Element;