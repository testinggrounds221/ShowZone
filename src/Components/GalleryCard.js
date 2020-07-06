import React from "react";
import { useAxiosGetArray } from "../Hooks/HttpRequests";
import Loader from "./Loader";
import { Link } from "react-router-dom";
// http://api.tvmaze.com/shows/1/images
function GalleryCard(props) {
  const url = `http://api.tvmaze.com/shows/${props.id}/images`;
  let req = useAxiosGetArray(url);
  let content = null;
  if (req.loading) {
    content = <Loader></Loader>;
  }

  if (req.error) {
    content = <div>Error loading Search Results.</div>;
  }
  if (req.data) {
    let onBann = req.data.filter((img) => {
      return img.type === props.type;
	});
	if((props.for) && (props.for === "gal")){
		onBann = [onBann[0]]
	}

	onBann  = shuffle(onBann)
    content = onBann.map((img) => (
      <Link key={img.id} to={`/show/${props.id}`}>
        <div className="my-8 shadow justify-center">
          <img
            className="content-center h-auto w-full rounded-md"
            src={img.resolutions.original.url}
            alt="Hey"
          ></img>
        </div>
      </Link>
    ));
  }

  return <div className="w-full items-center justify-center">{content}</div>;
}
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
	  let j = Math.floor(Math.random() * (i + 1));
	  [array[i], array[j]] = [array[j], array[i]];
	}
	return(array)
  }

export default GalleryCard;
