import { Link } from 'react-router-dom';
import React from 'react';


function Button(props){
	return(
		<Link to={props.to? props.to:''}>
			<div className="bg-red-700 rounded-sm mx-4" onClick={props.clk}>
				<p className="tMain text-center tracking-wide font-medium text-xl">
					{props.name}
				</p>
			</div>
		</Link>
	)
}

export default Button