import React from "react";
import { useAxiosGetArray } from "../Hooks/HttpRequests";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import ImageLoader from "./ImageLoader";
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
    // BackGround For Show.!!!
    if (props.for === "shwBack") {
      let backGr = req.data.filter((img) => {
        return img.type === "background";
      });

      if (backGr.length === 0) {
        return(<div className="text-center px-32">
          <ImageLoader loc={props.loc} />;
        </div>) 
        
      } else {
        backGr = shuffle(backGr);

        content = (
          <div className="my-8 shadow justify-center">
            <img
              className="content-center h-auto w-full rounded-md"
              src={backGr[0].resolutions.original.url}
              alt="Hey"
            ></img>
          </div>
        );
      }
    }
    // Gallery View
    if (props.for === "shwGal") {
      let shGal = req.data.filter((img) => {
        return img.type === props.type;
      });

      content = shGal.map((img) => (
        <div
          key = {img.id}
          className="my-8 shadow justify-center"
          onClick={() => open(img.resolutions.original.url)}
        >
          <img
            className="content-center h-auto w-full rounded-md"
            src={img.resolutions.original.url}
            alt="Hey"
          ></img>
        </div>
      ));
    }

    if (props.for === "hmBann") {
      let bann = req.data.filter((img) => {
        return img.type === "banner";
      });

      if (bann.length === 0) {
        return <ImageLoader loc={props.loc} />;
      } else {
        bann = shuffle(bann);

        content = (
          <Link to={`/show/${props.id}`}>
          <div className="my-8 shadow justify-center">
            <img
              className="content-center h-auto w-full rounded-md"
              src={bann[0].resolutions.original.url}
              alt="Hey"
            ></img>
          </div>
          </Link>
        );
      }
    }
  }
  return <div className="w-full items-center justify-center">{content}</div>;
}
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function open(url) {
  const win = window.open(url, "_blank");
  if (win != null) {
    win.focus();
  }
}

export default GalleryCard;
