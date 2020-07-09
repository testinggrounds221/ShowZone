import React from 'react';
import {Link} from 'react-router-dom';
function SeasonCard(props){
	// console.log(props);
	let content = null;
	let ses = props.sn;
	content =
		
			<Link to={`/season/${props.shid}/${ses.id}`}>
				<div className="px-3 bg-red-700 py-1 tMain">
					
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