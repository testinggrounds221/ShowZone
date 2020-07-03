import React from 'react'
import { useAxiosGetArray } from '../Hooks/HttpRequests';
import Loader from './Loader'
import {Link} from 'react-router-dom';
// http://api.tvmaze.com/shows/1/images
function GalleryCard(props){
	
	const url = `http://api.tvmaze.com/shows/${props.id}/images`
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
	if(req.data){
		let onBann = req.data.filter((img) => {
			return(img.type== props.type)
			
		})		
		
		
		content  = onBann.map((img) =>
		<Link to={`/show/${props.id}`}>
        <div key = {img.id} className="my-2">				
         <img src = {img.resolutions.original.url} alt="Hey"></img>
            
        </div>
		</Link>
       )
		
		
		
		
	}
	
	return(
		<div className="w-full items-center justify-center">
			{content}
		</div>
		
		)
	
}

export default GalleryCard