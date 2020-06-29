import React from 'react';
import { useParams }from 'react-router'
import { useAxiosGetJSON } from '../Hooks/HttpRequests';
import Loader from '../Components/Loader'
import ImageLoader from '../Components/ImageLoader';
function EpisodePage(){
	let {id} = useParams()
	
	const url = `http://api.tvmaze.com/episodes/${id}`
	let req = useAxiosGetJSON(url);
	let content = null;
	
	  

	if(req.error){
		content =
			<div>
				Error Found !! NO Person
			</div>
	}

	if(req.loading){
		content = 
			<Loader></Loader>
	}

	if(req.data){
		let ep = req.data[0];
		let lc = null 
		try{
			lc=ep.image.medium
		}
		catch{
			lc= "noImg";
		}		
		content = 

			<div className = "px-8 py-12 max-w-md mx-auto max-w-xl">
				<p className="object-right">{ep.name}</p>
				<ImageLoader loc = {lc} name={ep.name} className = "rounded-lg" />
				{ep.summary}
					
				

			</div>



	}
	return(
		<div>
			{content}
		</div> 
		)


}

export default EpisodePage;
