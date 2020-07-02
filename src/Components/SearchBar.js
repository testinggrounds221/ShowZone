import React from "react";
import { useParams } from "react-router";
import Button from "./Button";
import ShowSearchResults from './ShowSearchResults'
let c2 = null;
let sby = null;
function srch() {
  console.log("clicked");
  //const history = useHistory();
  let val = document.getElementById("txtBox").value;
  //history.push('/showsearchresults/${val}')
  // window.history.pushState({}, "", `/showsearchresults/${sby}/${val}`);
  c2 = <ShowSearchResults by={sby} qr={val} />
  // window.location.reload(false);
}

let content = null;

function SearchBar(props) {
  let { by } = useParams();
  sby = by;
  content = (
    <div>
      <div className="items-center inline justify-evenly">
        <input
          id="txtBox"
          type="text"
          className=" font-f1 bg-pl-2 text-black rounded-md w-full"
        ></input>
		<div className="w-auto flex items-center justify-evenly">
        
			<div onClick={srch}> GO </div>
        </div>
      </div>
    </div>
  );
  // window.location.reload(false);
  return (
    <div>
      {content}
      {c2}
    </div>
  );
}

export default SearchBar;
