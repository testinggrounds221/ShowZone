import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  let history = useHistory();
  // <Button name="Back" clk={() => history.goBack()} />
  // <div >&copy; Copyright 2020</div>
  return (
    <div>
      <div className=" w-full bg-black-t-50 rounded-md fixed bottom-0 z-30">
        <div className="w-full mx-auto flex justify-between">
          <div onClick={() => history.goBack()} className="cursor-pointer mx-5">
            <FontAwesomeIcon icon={faAngleDoubleLeft} color="red" size={"2x"} />
          </div>
          <Link to="/">
            <div className="cursor-pointer">
              <FontAwesomeIcon icon={faHome} color="white" size={"2x"} />
            </div>
          </Link>

          <div
            onClick={() => history.goForward()}
            className="cursor-pointer mx-5"
          >
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              color="red"
              size={"2x"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
//
export default Footer;
