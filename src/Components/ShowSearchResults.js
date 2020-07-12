import React from "react";
import Loader from "./Loader";
import { useAxiosGetArray } from "../Hooks/HttpRequests";
import { useParams } from "react-router-dom";
import Card from "./Card";

function ShowSearchResults(props) {
  //http://api.tvmaze.com/search/shows?q=girls
  let by = props.by;
  let qr = props.val;
  const url = `http://api.tvmaze.com/search/${by}?q=${qr}`;
  let req = useAxiosGetArray(url);
  let content = null;
  if (req.loading) {
    content = <Loader></Loader>;
  }

  if (req.error) {
    content = <div>Error loading Search Results.</div>;
  }

  if (req.data && by === "shows") {
    content = req.data.map((show) => (
      <div key={show.id} className="mx-auto shadow-xl w-7/12 my-10">
        
          <Card
            name={show.show.name}
            link={`/show/${show.show.id}`}
            img={show.show.image ? show.show.image.medium : null}
          />
        
      </div>
    ));
  }
  if (req.data && by === "people") {
    content = req.data.map((p) => (
      <div key={p.person.id} className="mx-auto shadow-xl w-7/12 my-10">
        <Card
          name={p.person.name}
          link={`/person/${p.person.id}`}
          img={p.person.image ? p.person.image.medium : null}
        />
      </div>
    ));
  }

  return (
    <div>
      <div></div>
      {content}
    </div>
  );
}

export default ShowSearchResults;
