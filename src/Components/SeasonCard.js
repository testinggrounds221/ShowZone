import React from 'react';
import {Link} from 'react-router-dom';
function SeasonCard(props){
	// console.log(props);
	let content = null;
	let ses = props.sn;
	content =
		
			<Link to={`/season/${ses.id}`}>
				<div className="px-3 bg-gray-900 py-1 tMain">
					{/*<img src={`${ses.image.medium}`}></img>*/}
				Season {ses.number}
				</div>
			</Link>
		
	
	
	return(
		<div className = "shadow ">
        	{content}
		</div>
	)
}

export default SeasonCard