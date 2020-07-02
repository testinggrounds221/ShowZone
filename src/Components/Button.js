import { Link } from 'react-router-dom';
import React from 'react';

function Button(props){
	return(
		<Link to={props.to? props.to:''}>
			<div className="bg-pl-4 w-32" onClick={props.clk}>
				<p className="text-center text-t-4 p-1 m-2">
					{props.name}
				</p>
			</div>
		</Link>
	)

}

export default Button