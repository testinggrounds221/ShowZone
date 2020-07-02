import React from 'react';
import SearchBar from '../Components/SearchBar' 
import { useParams } from 'react-router-dom';
function SearchPage(){
	let { by } = useParams()
	// console.log(by);
	
	let content = null
	if(by === "shows"){
		// console.log('Shows')
		content = 
			<div>
				<h1>Search By Shows</h1>
				<div>
					<SearchBar by="shows" />
				</div>
			</div>
	}
	if(by === "people"){
		// console.log('People')
		content = 
			<div>
				<h1>Search By People</h1>
				<div>
					<SearchBar by="people"/>
				</div>
			</div>
	}

	return(
		<div>
			{content}
		</div>
		
	)

}

export default SearchPage