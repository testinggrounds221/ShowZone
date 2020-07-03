import React from "react";
import { useParams } from "react-router";
import Loader from "../Components/Loader";
import { useAxiosGetJSON } from "../Hooks/HttpRequests";
import Card from "../Components/Card";
import PersonCard from "../Components/PersonCard";
import ImageLoader from "../Components/ImageLoader";
import SeasonCard from "../Components/SeasonCard";
import GalleryCard from "../Components/GalleryCard";
//http://api.tvmaze.com/shows/10
//http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast
function Show() {
  let { id } = useParams();
  const url = `http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`;
  let ssnCards = null;
  let req = useAxiosGetJSON(url);

  let content = null;
  if (req.error) {
    content = <div>Error Found !! NO ITEM</div>;
  }

  if (req.loading) {
    content = <Loader></Loader>;
  }

  if (req.data) {
    let show = req.data[0];
    let castCards = null;
    let lc = null;
    try {
      lc = show.image.medium;
    } catch {
      lc = "noImg";
      //console.log("No Image In Show");
    }

    castCards = show._embedded.cast.map((elem) => (
      <div key={elem.person.id} className="flex p-3 rounded-full">
        <Card
          name={elem.person.name}
          link={`/person/${elem.person.id}`}
          img={elem.person.image ? elem.person.image.medium : null}
        />
      </div>
    ));
    ssnCards = <div>SeasonCards here</div>;

    let types = ["poster", "background", "banner", "typography"];
    let galCards = types.map((type) => (
      <div>
		  {type}
        <GalleryCard type={type} id={id} />
      </div>
    ));

    content = (
      <div className="bg-local h-full object-cover object-center">
        <div className=" max-w-md mx-auto">
          <h1 className="font-bold text-center">{show.name}</h1>

          <ImageLoader
            className="px-8 py-5 rounded-lg object-center w-full h-full"
            loc={lc}
            name={show.name}
          />
          <div>
            <p>ID : {show.id}</p>
            <p className="text-center">{stripHtml(show.summary)} </p>
            <div className="px-8 py-5">
              <p>Name : {show.name}</p>
              <p>Rating : {show.rating.average} </p>
              <p>Since :{show.premiered} </p>
            </div>
            <div className="bg-pl-2 font-head font-bold capitalize tracking-wide text-center p-3">
              Cast
            </div>
            {castCards}
          </div>
          <div>Seasons: {ssnCards}</div>
          <div>Gallery:{galCards}</div>
        </div>
      </div>
    );
  }

  return <div>{content}</div>;

  function stripHtml(html) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }
}

export default Show;
