import React from 'react';
import { useParams } from 'react-router';
import Loader from '../Components/Loader';
import { useAxiosGetJSON } from '../Hooks/HttpRequests';
import PersonCard from '../Components/PersonCard'
import ImageLoader from '../Components/ImageLoader'
import SeasonCard from '../Components/SeasonCard';
//http://api.tvmaze.com/shows/1
//http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast
function Show(){

	let { id } = useParams();
	const url = `http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`;
	let ssnCards = null;	
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
		let show = req.data[0];
		let castCards = null;
		let lc = null 
	 try{
		lc=show.image.medium
	}
	catch{
		lc= "noImg"
		//console.log("No Image In Show");
	}
		
		castCards = show._embedded.cast.map((elem) =>
		 	<div key = {elem.person.id} className = "flex">
				 <PersonCard per = {elem}/> <p className="ml-1"> as {elem.character.name}</p>  
			 </div>)

		ssnCards = show._embedded.seasons.map((el) =>
		<div key = {el.id} className = "flex">
			<SeasonCard sn = {el}/>   
		</div>)

		
		content = 
				<div className="bg-local h-full object-cover object-center" >
					<div className=" max-w-md mx-auto max-w-xl " >
					<h1 className = "font-bold text-center">
						{show.name}
					</h1>

	<ImageLoader className="px-8 py-5 rounded-lg object-center w-full h-full" loc = {lc} name={show.name} />
					<div >
						<p>ID : {show.id}</p>
						<p className="text-center">{stripHtml(show.summary)} </p>
						<div className="px-8 py-5">
							<p>Name : {show.name}</p>							
							<p>Rating : {show.rating.average}	</p>
							<p>Since :{show.premiered} </p>
						</div> 
						Cast:     {castCards}            
					</div>
						<div> 
							Seasons:     {ssnCards}            
						</div>
						

					<div>
						 
					</div>
				</div>
				</div>			
				
	 		}

	return(
		<div>
			{content}
		</div>
	)

	function stripHtml(html)
	{
		var tmp = document.createElement("DIV");
		tmp.innerHTML = html;
		return tmp.textContent || tmp.innerText || "";
	}
}

export default Show