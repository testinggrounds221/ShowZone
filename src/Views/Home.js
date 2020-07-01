import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
	return(
		<div className="bg-pl-1">
			<h1 className = "text-2xl mb-3 font-bond">Home Page</h1>
			<p>
				Hey There. This is the HomePage !!!
			</p>
			<Link to="/searchpage/shows">
			<div className="bg-pl-4 w-32">
				<p className="text-center text-white p-1 tracking-wide m-2">
					Search Shows</p>
			</div>
			</Link>
			<Link to="/searchpage/people">
			<div className="bg-pl-4 w-32">
				<p className="text-center text-white p-1 m-2">
					Search People</p>			
			</div>
			</Link>
			<div className="bg-pl-4 w-32">
				<p className="text-center text-white p-1 tracking-wide">
					Browse Shows</p>
			</div>
			
		</div>
	)

}

export default Home