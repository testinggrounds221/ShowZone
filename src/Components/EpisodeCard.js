import React from 'react';
import { Link } from 'react-router-dom';
// import {Link} from 'react-router-dom';
function EpisodeCard(props){
	let epi = props.ep;
	let content = null;
	
	content = <Link to={`/episode/${epi.id}`}>
		<div>
			<p>{epi.number}</p>
			{epi.name}
			{epi.id}
		</div>
		</Link>
		
	return(
		<div className = "shadow ">
        	{content}
		</div>
	)
}

export default EpisodeCard