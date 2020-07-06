import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faStar,
  faPlay,
  faStarHalf,
  faTheaterMasks,
} from "@fortawesome/free-solid-svg-icons";
import { yellow } from "@material-ui/core/colors";
import { rgbToHex } from "@material-ui/core";

function Rating(props) {
  let content = null;
  let full = Math.floor(props.val);
  let iter = (arr) =>
    arr.map((el) => (
      <span>
        <FontAwesomeIcon icon={el.name} color={el.color} />
      </span>
    ));
  let ic = { name: null, cl: null };
  let str = [];
  let i = 0;
  for (i = 0; i < full; i++) {
    str.push({ name: faStar, color: "yellow" });
  }
  str.push(props.val - full > 0.5 ? { name: faStarHalf, color: "yellow" } : { name: faStar, color: "gray" });

  for (i = i + 2; i <= 10; i++) {
    str.push({ name: faStar, color: 'gray' })
  }

  content = <div>{iter(str)}</div>;
  return <div>{content}</div>;
}

export default Rating;
