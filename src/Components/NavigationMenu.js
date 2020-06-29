import React from "react";
import { Link } from "react-router-dom";

function NavigationMenu(props){
	
	return(
		<div>
		<div className="font-bold py-3">
				AppName

			</div>
			<ul>
				<li>
					<Link to="/" 
					className = "text-blue-500 border-t border-b py-3 block"
					onClick = {props.closeMenu}
					>
					Home
					</Link>
				</li>
				<li>
					<Link to="/about" 
					className = "text-blue-500 border-b py-3 block"
					onClick = {props.closeMenu}
					>
					About
					</Link>
				</li>
				<li>
					<Link to="/show/:id" 
					className = "text-blue-500 border-b py-3 block"
					onClick = {props.closeMenu}
					>
					Show
					</Link>
				</li>
				<li>
					<Link to="/person/:id" 
					className = "text-blue-500 border-b py-3 block"
					onClick = {props.closeMenu}
					>
					Person
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default NavigationMenu