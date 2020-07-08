import React from "react";
import { Link } from "react-router-dom";
// import {Link} from 'react-router-dom';
function EpisodeCard(props) {
  let epi = props.ep;
  let content = null;

  content = (
    <Link to={`/episode/${epi.id}`}>
      <div
        className="tCon w-11/12 h-11/12"
        style={{ backgroundImage: `url(${epi.image.medium})` }}
      >
        <p>{epi.number}</p>
        {epi.name}
        
      </div>
    </Link>
  );

  return <div className="shadow ">{content}</div>;
}

export default EpisodeCard;
