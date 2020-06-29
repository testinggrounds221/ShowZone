import React from 'react';
import {useParams} from 'react-router'
import {useAxiosGetArray} from '../Hooks/HttpRequests'
import Loader from '../Components/Loader'
import EpisodeCard from '../Components/EpisodeCard'
function Season(){
	console.log('sesaon page')
	let { id } = useParams()
	const url = `http://api.tvmaze.com/seasons/${id}/episodes`
	let content = null
	let req = useAxiosGetArray(url);
	if(req.error){
		console.log('Error in seasionpage')
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
		console.log(req.data);
		let epiCards = null;

		epiCards = req.data.map((el) =>
		<div key = {el.id} className = "flex">
			<EpisodeCard ep = {el}/>   
		</div>)

		content = 
			<div>
				{epiCards}
			</div>		
	}


	return(
		<div>
			{content}
			<p>SeasonP page</p>
		</div>
	)
}

export default Season