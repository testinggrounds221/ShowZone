import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

function Rating(props) {
  let content = null;
  let full = Math.floor(props.val / 2);
  let iter = (arr) =>
    arr.map((el,i) => (
      <span key={i}>
        <FontAwesomeIcon icon={el.name} color={el.color} size={el.size} />
      </span>
    ));

  let str = [];
  let i = 0;
  for (i = 0; i < full; i++) {
    str.push({ name: faStar, color: "yellow" });
  }
  str.push(
    props.val - full > 0.5
      ? { name: faStarHalf, color: "yellow" }
      : { name: faStar, color: "gray" }
  );

  for (i = i + 2; i <= 5; i++) {
    str.push({ name: faStar, color: "gray" });
  }
  let j = 0;
  for (j = 0; j < 5; j++) {
    if (j === 0 || j === 4);
    else if (j === 1 || j === 3) str[j].size = "2x";
    else str[j].size = "3x";
  }
  let per = <span className="tVal bg-pl-1 w-auto">{props.val}</span>;
  content = (
    <div>
      {iter(str)}
      <p>{per}</p>
    </div>
  );
  return <div>{content}</div>;
}

export default Rating;
