import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/Button'
function Home(){
	return(
		<div className="bg-pl-1">
			<h1 className = "text-2xl mb-3 font-bond">Home Page</h1>
			<p>
				Hey There. This is the HomePage !!!
			</p>
			<div className="flex items-center justify-evenly h-screen">
				<Button name="Search Shows" to="/searchpage/shows"/>
				
				<Button name="Search People" to="/searchpage/people"/>
				
				<Button name="Browse Shows" to="/srchpg" />
			</div>
			
			
			
		</div>
	)

}

export default Home