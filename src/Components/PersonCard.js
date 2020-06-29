import React from 'react';
import {Link} from 'react-router-dom';
import ImageLoader from './ImageLoader'
function PersonCard(props){
	//console.log(props);
	let pid = props.per.person.id;
	let actPer = props.per.person;
	
	return(
		<div className = "shadow bg-pl-2">
        	<div>
			<Link to={`/person/${pid}`}>
				<ImageLoader loc={actPer.image.medium}/>
				Name : {actPer.name} 
				
				
			</Link>
			</div>
		</div>
	)
}

export default PersonCard