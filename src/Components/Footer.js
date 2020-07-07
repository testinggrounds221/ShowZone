import React from 'react';
import Button from './Button'
import { useHistory } from 'react-router-dom'
import Navigation from './Navigation'

function Footer(){
	let history = useHistory()
	// <Button name="Back" clk={() => history.goBack()} />
	// <div >&copy; Copyright 2020</div>
	return(
		<div className="text-center text-xs font-bold fixed bottom-0 bg-white w-fulll z-10"> 
			<div className=" flex justify-between items-center bg-pl-1">
				<Navigation />
				
			</div>
		</div>
	)
}
// 
export default Footer