import React from 'react';

import ImageLoader from './ImageLoader'
import Button from './Button'
import { useHistory } from 'react-router-dom'
function Footer(){
	let history = useHistory()
	// <Button name="Back" clk={() => history.goBack()} />
	// <div >&copy; Copyright 2020</div>
	return(
		<div className="bg-gray-200 text-center text-xs font-bold p-3 fixed bottom-0 w-full flex"> 
			<div className="flex relative"> 
				<div className="absolute left-0 bottom-0">
					<Button name="Back" clk={() => history.goBack()} />
				</div>
				<div className="absolute right-0 bottom-0">
					<Button name="Home" to="/" />
				</div>
			</div>
		</div>
		

	)
}

export default Footer