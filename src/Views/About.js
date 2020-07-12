import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub,faInstagram,faDribbble,faReact,faYarn,faCss3 } from "@fortawesome/free-brands-svg-icons";

function About(){
	return(
		<div className="bg-indigo-200 font-serif">
		<h1 className = "text-2xl mb-3 font-bond text-center">Movie_APP</h1>
		<p className="text-center">
		Hey There. This page was created by Shreeram.				
		</p>
		<p className="text-center">
		You can catch me on
		</p>
		<div className="justify-center flex">
		<div className="inline m-1">
		<FontAwesomeIcon
		icon={faGithub}
		size='3x'
		/>
		</div>

		<div className="inline m-1">
		<FontAwesomeIcon
		icon={faInstagram}
		size='3x'

		/>
		</div>
		<div className="inline m-1">
		<FontAwesomeIcon
		icon={faDribbble}
		size='3x'

		/>
		</div>
		<div className="block">
		<p>This page was Created using </p> 
		<p><FontAwesomeIcon
		icon={faReact}
		size='3x'

		/></p><p><FontAwesomeIcon
		icon={faYarn}
		size='3x'

		/></p> 
		<p><FontAwesomeIcon
		icon={faCss3}
		size='3x'

		/></p>
		</div>
		</div>
		</div>
		)
}

export default About