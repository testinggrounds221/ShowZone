import React from 'react';
import Loader from '../Components/Loader';
import { useAxiosGetArray } from '../Hooks/HttpRequests';
import ShowCard from '../Components/ShowCard'
import { useParams } from 'react-router-dom';
import PersonCard from '../Components/PersonCard'


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
            <ShowCard product = {show} />
        </div>
       )}
    if(req.data && by==="people"){
    console.log(req.data)
    content  = req.data.map((p) =>
        <div key = {p.person.id} className="content-center w-full h-full">				
            <PersonCard per = {p} />
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