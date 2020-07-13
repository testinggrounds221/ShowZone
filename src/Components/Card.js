import { Link } from "react-router-dom";
import React from "react";

function Card(props) {
  const imgStyle = {
    backgroundImage: `url('${props.img ? props.img : ""}')`,
    position: "relative",
    height: "300px",
    width: "200px",
    backgroundRepeat: "no-repeat",
  };
  const imgStyleNoImg = {
    position: "relative",
    backgroundImage:
      'url("https://raw.githubusercontent.com/testinggrounds221/ShowZone/master/i/ques.svg")' /* The image used */,
    height: "300px" /* You must set a specified height */,
    width: "200px",
    backgroundPosition: "center" /* Center the image */,
    backgroundRepeat: "no-repeat" /* Do not repeat the image */,
    backgroundSize:
      "cover" /* Resize the background image to cover the entire container */,
  };
  const txtStyle = {
    width: "100%",
    height: "auto",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    color: "#272E34",
    opacity: "0.9",
    left: "0",
    bottom: "0",
    position: "absolute",
    zIndex: "10",
    paddingTop: "5px",
    fontWeight: "bold",
    fontFamily: "Alegreya SC",
    fontSize: "16px",
    paddingRight: "2px",
    paddingLeft: "2px",
  };
  return (
    // bg-pl-2
    <div className="shadow flex content-center">
      <div className="mx-auto">
        <Link to={props.link}>
          <div style={props.img ? imgStyle : imgStyleNoImg}>
            <div
              style={txtStyle}
              className="text-center font-medium text-t-4 items-center"
            >
              <p>{props.name}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;
