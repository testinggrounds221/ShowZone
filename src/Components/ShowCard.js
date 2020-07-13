import React from "react";
import { Link } from "react-router-dom";
import ImageLoader from "./ImageLoader";
function ShowCard(props) {
  let show = props.product.show;
  let lc = null;
  try {
    lc = show.image.medium;
  } catch {
    lc = "noImg";
    //console.log("No Image In Show Card");
  }
  return (
    <div className="shadow ">
      <div className="shadow py-8 px-32 bg-gold content-center flex flex-wrap">
        <Link to={`/show/${show.id}`}>
          <div className="w-full">
            {/* <img className="object-none object-center w-full h-full" src={iUrl} alt="none"></img> */}
            {/* className="w-64 h-64 bg-blue bg-cover" */}
            <div className="items-center">
              <ImageLoader loc={lc} name={show.name} />
            </div>

            <div>{show.name}</div>
            <div>{show.type}</div>

            <div>
              &bull;
              {show.genres}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ShowCard;
