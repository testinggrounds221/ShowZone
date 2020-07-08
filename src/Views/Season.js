import React from "react";
import { useParams } from "react-router";
import { useAxiosGetArray } from "../Hooks/HttpRequests";
import Loader from "../Components/Loader";
import EpisodeCard from "../Components/EpisodeCard";
function Season() {
  let { id, shid } = useParams();
  const url = `http://api.tvmaze.com/seasons/${id}/episodes`;
  const u2 = `http://api.tvmaze.com/shows/${shid}/seasons`;
  let content = null;
  let req = useAxiosGetArray(url);
  let r2 = useAxiosGetArray(u2);
  if (req.error) {
    console.log("Error in seasionpage");
    content = <div>Error Found !! NO ITEM</div>;
  }

  if (req.loading) {
    content = <Loader></Loader>;
  }

  if (req.data && r2.data) {
    let epiCards = null;
    let key = [];
    let val = [];
    let ses = r2.data.filter((el) => {
      if (el.id == id) {
        return el;
      }
    })[0];

    if (ses.episodeOrder) {
      key.push("Episodes");
      val.push(ses.episodeOrder);
    }
    if (ses.premiereDate) {
      key.push("Premier Date");
      val.push(ses.premiereDate);
    }
    if (ses.endDate) {
      key.push("End Date");
      val.push(ses.endDate);
    }
    
    let info = val.map((elem, i) => (
      <p className="text-center m-4">
        <span className="tKey">{key[i]}</span>
        <span className="tVal bg-pl-1">{elem}</span>
      </p>
    ));

    epiCards = req.data.map((el) => (
      <div key={el.id} className="m-5">
        <EpisodeCard ep={el} />
      </div>
    ));

    content = (
      <div>
        {ses.image && <img src={ses.image.medium} className="mx-auto"></img>}
        {info}
        {epiCards}
      </div>
    );
  }

  return (
    <div>
      {content}
      <p>SeasonP page</p>
    </div>
  );
}

export default Season;
