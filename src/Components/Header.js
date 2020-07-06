import React from 'react';
import Navigation from './Navigation'


function Header(){
	return(
		<header className="border-b p-4/5 flex justify-between items-center">  
		<span className="font-serif text-center font-semibold tracking-wide">
		Movie_App
		</span>

		<Navigation />		


		</header>
	)
}

export default Header