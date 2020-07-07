import React from 'react';
import Loader from '../Components/Loader';
import { useAxiosGetArray } from '../Hooks/HttpRequests';
import { useParams } from 'react-router-dom';
import Card from '../Components/Card'


function ShowSearchResults(){
//http://api.tvmaze.com/search/shows?q=girls
	let { qr,by } = useParams();
	const url = `http://api.tvmaze.com/search/${by}?q=${qr}`;
    let req = useAxiosGetArray(url)
    let content = null;
    if(req.loading){
        content = 
            <Loader></Loader>
    }

    if(req.error){
        content = 
            <div>
                Error loading Search Results.
            </div>
    }

    if(req.data && by==="shows"){
       content  = req.data.map((show) =>
        <div key = {show.id} className="content-center w-full h-full">				
            {/* <ShowCard product = {show} /> */}
            <Card name={show.show.name} link={`/show/${show.show.id}`} img={show.show.image? show.show.image.medium:null } />
            
        </div>
       )}
    if(req.data && by==="people"){
    
    content  = req.data.map((p) =>
        <div key = {p.person.id} className="content-center w-full h-full">				
            <Card name={p.person.name} link={`/person/${p.person.id}`} img={p.person.image? p.person.image.medium:null } />
        </div>
    )}

	return(
		<div>
            
			<div className = "font-bold p-3 object-none object-center w-full h-full"> Search Results </div>
			{content}
		</div>
	)

}

export default ShowSearchResults