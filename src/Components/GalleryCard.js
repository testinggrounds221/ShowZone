import React from 'react'
import { useAxiosGetArray } from '../Hooks/HttpRequests';
// http://api.tvmaze.com/shows/1/images
function GalleryCard(props){
	let content = null
	const url = `http://api.tvmaze.com/shows/17861/images`;
	let req = useAxiosGetArray(url)
	console.log(req.data)

	return(
		<div>
		{content}
		</div>
		
		)
	
}

export default GalleryCard