import React from 'react';
import Navigation from './Navigation'


function Header(){
	return(
		<header className="border-b p-4/5 flex items-center bg-pl-1">  
		<div className="mx-2 mr-3">
			<Navigation />
		</div>
			
		<span className="font-head text-center tracking-wide">
		ShowZone
		</span>

				


		</header>
	)
}

export default Header