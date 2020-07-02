import React from 'react';
import Button from './Button'
import { useHistory } from 'react-router-dom'
function Footer(){
	let history = useHistory()
	// <Button name="Back" clk={() => history.goBack()} />
	// <div >&copy; Copyright 2020</div>
	return(
		<div className="bg-gray-200 text-center text-xs font-bold p-3 fixed bottom-0 w-full z-10"> 
			<div className="flex justify-between items-center"> 	
				<div className="">
					<Button name="Back" clk={() => history.goBack()} />
				</div>
				<div className="w-64"> 
					<Button name="Home" to="/" />
				</div>
				<div className="">
					<Button name="Forward" clk={() => history.goForward()} />
				</div>
				
			</div>
		</div>
	)
}
// 
export default Footer