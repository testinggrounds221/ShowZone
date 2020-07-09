import { Link } from 'react-router-dom';
import React from 'react';


function Button(props){
	if(props.to)
	{return(
			<Link to={props.to? props.to:null}>
				<div className="bg-pl-4 rounded-sm mx-4" onClick={props.clk}>
					<p className="tMain text-center tracking-wide font-medium text-xl">
						{props.name}
					</p>
				</div>
			</Link>
		)}
	else{
		return(
			<div className="bg-pl-4 rounded-sm mx-4" onClick={props.clk}>
					<p className="tMain text-center tracking-wide font-medium text-xl">
						{props.name}
					</p>
				</div>



			)
	}
}

export default Button