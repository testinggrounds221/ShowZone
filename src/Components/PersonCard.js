import React from 'react';
import {Link} from 'react-router-dom';
function PersonCard(props){
	//console.log(props);
	let pid = props.per.person.id;
	let actPer = props.per.person;
	
	return(
		<div className = "shadow ">
        	<div>
			<Link to={`/person/${pid}`}>Name : {actPer.name} </Link>
			</div>
		</div>
	)
}

export default PersonCard