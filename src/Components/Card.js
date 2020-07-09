import {Link} from 'react-router-dom';
import React from 'react'

function Card(props){
	const imgStyle = {
		backgroundImage: `url('${props.img? props.img:'' }')`,
		position:'relative',
		height:'300px',
  		width:'200px'
	  };
	const txtStyle = {
		'width': '100%',
		'height': '100%',
		'backgroundColor': 'rgba(0,0,0,0.5)',
		'left':'0',
		'top':'0',
		'position': 'absolute',
		'zIndex': '10',
		'paddingTop':'100px'
	  }
	return(
		// bg-pl-2
		<div className="shadow flex content-center">
        	<div className="mx-auto">
			<Link to={props.link}>
				<div style={imgStyle}>
					<div style={txtStyle} className="text-center font-medium text-t-4 items-center">
						<p>{props.name}</p>
					</div>
				</div>
			</Link>
			</div>
		</div>
	)

}

export default Card