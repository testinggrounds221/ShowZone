import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/Button'
import LoginControl from './SrchPg'
function Home(){
	return(
		<div className="bg-pl-1">
			<h1 className = "text-2xl mb-3 font-bond">Home Page</h1>
			<p>
				Hey There. This is the HomePage !!!
			</p>
			<LoginControl />
			
			
			
		</div>
	)

}

export default Home