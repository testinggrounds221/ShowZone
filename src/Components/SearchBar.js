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
	content = 
		<div>
			<div className="items-center inline">
				<input id="txtBox" type = "text" className=" font-f1 bg-pl-2 text-black rounded-full" ></input>
				<div onClick={srch} className="h-4 inline bg-pl-4 text-pl-1 text-bold p-1 px-2 mx-2 rounded-full tracking-widest">
					Go !
				</div>
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