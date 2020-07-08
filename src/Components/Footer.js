import React from 'react';
// import Button from './Button'
import { useHistory } from 'react-router-dom'
import Navigation from './Navigation'

function Footer(){
	// let history = useHistory()
	// <Button name="Back" clk={() => history.goBack()} />
	// <div >&copy; Copyright 2020</div>
	return(
		<div className="text-center text-xs font-bold fixed bottom-0 right-0 rounded-full w-fulll z-10">
			<div className="flex bg-red-700 p-4 rounded-full">
				<Navigation />
				
			</div>
		</div>
	)
}
// 
export default Footer