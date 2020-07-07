import React from "react";
//https://www.freepik.com/free-vector/illustration-play-button_2606137.htm
function ImageLoader(props) {
  let content = null;

  if (props.loc === "noImg") {
    //console.log('No iMage Found')
    content = (
      <div className="bg-gray-400 h-64 w-56 objects-center">
        <h1 className="text-center py-20 text-red-900">{props.name}</h1>
      </div>
    );
    return <div>{content}</div>;
  } else {
    content = (
      <div>
        <div className="object-none object-center">
          <div className="w-full h-full">
            <img src={props.loc} alt="ImageLoader Error"></img>
          </div>
        </div>

        {
          //<h1>From ImageLoader</h1>
        }
      </div>
    );
  }

  return <div>{content}</div>;
}

export default ImageLoader;

/* let lc = null 
	 try{
		lc=shw.image.medium
	}
	catch{
		lc= "noImg"
		console.log("No Image In Show Card");
	}
	  */
