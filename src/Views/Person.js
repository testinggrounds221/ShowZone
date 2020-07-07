import React from 'react';
import { useParams }from 'react-router'
import { useAxiosGetJSON,useAxiosGetArray } from '../Hooks/HttpRequests';
import Loader from '../Components/Loader'
import ImageLoader from '../Components/ImageLoader';
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";

import Card from '../Components/Card';

function Person(){
	let {id} = useParams()
	//const url = `http://api.tvmaze.com/people/1`
	const url = `http://api.tvmaze.com/people/${id}`//http://api.tvmaze.com/people/1/castcredits?embed=show
	const urlCred = `http://api.tvmaze.com/people/${id}/castcredits?embed=show`
	let req = useAxiosGetJSON(url);
	let req2 = useAxiosGetArray(urlCred);
	let content = null; 

	if(req.error || req2.error){
		content =
			<div>
				Error Found !! NO Person
			</div>
	}

	if(req.loading || req2.loading){
		content = 
			<Loader></Loader>
	}

	if(req.data && req2.data){
		let per = req.data[0];
		let crd = req2.data;
		let crdCards = null;

		crdCards = 
		<Accordion>
			<AccordionSummary>Cast Credits </AccordionSummary>
		{crd.map((shw) => 
			<AccordionDetails>
			<div key={shw._embedded.show.id}>		
			<Card name={shw._embedded.show.name} link={`/show/${shw._embedded.show.id}`} img={shw._embedded.show.image? shw._embedded.show.image.medium:null } />
			</div>
			</AccordionDetails>
		)}
		</Accordion>


		let lc = null 
		try{
			lc=per.image.medium
		}
		catch{
			lc= "noImg";
		}		
		content = 
			<div className = "px-8 py-12 max-w-md mx-auto max-w-xl">
				<p className="object-right">{per.name}</p>
				<ImageLoader loc = {lc} name={per.name} className = "rounded-lg" />
				{crdCards}
			</div>
	}
	return(
		<div>
			{content}
		</div> 
		)
}

export default Person;
