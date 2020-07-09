import React from "react";
import { Link } from "react-router-dom";
// import {Link} from 'react-router-dom';
function EpisodeCard(props) {
  let epi = props.ep;
  let content = null;

  content = (
    <Link to={`/episode/${epi.id}`}>
      <div
        className="px-3 bg-gray-900 py-1 tMain text-center text-lg"        
      >
        <p>{epi.number}.{epi.name}</p>
        
        
      </div>
    </Link>
  );

  return <div className="shadow ">{content}</div>;
}

export default EpisodeCard;
