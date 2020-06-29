import React from 'react';
import {Link} from 'react-router-dom';
function SeasonCard(props){
	// console.log(props);
	let content = null;
	let ses = props.sn;
	content =
		<div>
			<Link to={`/season/${ses.id}`}>
				{ses.number}
			</Link>
		</div>
	
	
	return(
		<div className = "shadow ">
        	{content}
		</div>
	)
}

export default SeasonCard