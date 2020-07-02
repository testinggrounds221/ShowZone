import React from 'react';
import {Link} from 'react-router-dom';
import ImageLoader from './ImageLoader'
import Card from './Card';
function PersonCard(props){
	//console.log(props);
	let pid = props.per.person.id;
	let actPer = props.per.person;

	return(
		<div>
			<Card name={actPer.name} link={`/person/${pid}`} img={actPer.image? actPer.image.medium:null } />
		</div>
	)
}

export default PersonCard