import React from "react";
import { useParams } from "react-router";
import { useAxiosGetArray } from "../Hooks/HttpRequests";
import Loader from "../Components/Loader";
import EpisodeCard from "../Components/EpisodeCard";
import Button from "../Components/Button";
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
    let nb,
      pb = null;
    let nei = r2.data.filter((el) => {
      if (el.number === ses.number + 1 || el.number === ses.number - 1)
        return el;
    });

    if (nei[0].number) {
      
      // nb = (
      //   <Button name={`Season ${el.number}`} to={`/season/${id}/${el.id}`} />
      // );
    }

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
      <div key={el.id} className=" w-3/5 mx-auto my-4">
        <EpisodeCard ep={el} sesid={id} />
      </div>
    ));
    //https://raw.githubusercontent.com/testinggrounds221/ShowZone/master/images/undraw_video_files_fu10.png

    content = (
      <div>
        {ses.image && <img src={ses.image.medium} className="mx-auto"></img>}
        {!ses.image && (
          <img
            src="https://raw.githubusercontent.com/testinggrounds221/ShowZone/master/i/ses.svg"
            className="mx-auto w-2/3"
          ></img>
        )}

        <div className="absolute bg-black-t-50 mx-auto inset-x-0 w-11/12 -my-10 rounded-md ">
          <p className="text-center">
            <span className="tMain text-pl-1 font-semibold text-3xl">
              Season {ses.number}
            </span>
          </p>

          {info}
        </div>
        <div className="my-32 py-10 mx-auto">{epiCards}</div>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Season;
