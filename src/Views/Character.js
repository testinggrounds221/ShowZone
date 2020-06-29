import React from 'react';
import { useParams } from 'react-router';
import Loader from '../Components/Loader';
import { useAxiosGetJSON } from '../Hooks/HttpRequests';
import ImageLoader from '../Components/ImageLoader';


function Character(){

	let { id } = useParams();
	const url = `http://api.tvmaze.com/characters/${id}`;
	//http://api.tvmaze.com/characters/7160
	let req = useAxiosGetJSON(url);
	
	let content = null;
	if(req.error){
		content =
			<div>
				Error Found !! NO ITEM
			</div>
	}

	if(req.loading){
		content = 
			<Loader></Loader>
	}
	
	if(req.data){		 
		let char = req.data[0];
		let lc = null 
		try{
			lc=char.image.medium
		}
		catch{
			lc= "noImg"
		}
	  
		content = 
				<div className="px-8 py-12 max-w-md mx-auto max-w-xl" >
					<h1 className = "font-bold">
						 {char.name}
					</h1>

	 				<ImageLoader loc = {lc} name={char.name} />
					<div>
						<p>ID :  {char.id}</p>
						<p>Name :  {char.name}</p>							
						
					</div>
					<div>
						 
					</div>
				</div>
	 		}

	return(
		<div>
			{content}
		</div>
	)
}

export default Character