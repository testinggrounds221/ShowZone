import React from 'react';
import { useParams } from 'react-router';

let c2 = null;
let sby=null;
function srch(){
	console.log('clicked')
	//const history = useHistory();
	let val = (document.getElementById("txtBox").value)
	//history.push('/showsearchresults/${val}')
	window.history.pushState({},'',`/showsearchresults/${sby}/${val}`)
	window.location.reload(false);
}

let content = null;
	

function SearchBar(props){
	let { by } = useParams()
	sby = by
	content = <div>
		<div className = "flex">
		<input id="txtBox" type = "text" className="border-red-700 bg-indigo-300 text-white" ></input>
		</div>
		<div onClick={srch}>
			Submit
		</div>
		</div>
	return(
		<div>
			{content}
			{c2}
		</div>
	)
}

export default SearchBar