import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfo,
  faPlay,
  faTheaterMasks,
} from "@fortawesome/free-solid-svg-icons";

function NavigationMenu(props) {
  return (
    <div className="absolute w-4/5 h-full bg-white z-50">
      <div className="font-bold py-3 px-3 bg-white">ShowZone</div>
      <ul>
        <li>
          <Link
            to="/"
            className="text-blue-500 border-t border-b py-3 block"
            onClick={props.closeMenu}
          >
            <div className="inline mr-1">
              <FontAwesomeIcon icon={faHome} />
            </div>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-blue-500 border-b py-3 block"
            onClick={props.closeMenu}
          >
            <div className="inline p-2">
              <FontAwesomeIcon icon={faInfo} />
            </div>
            About
          </Link>
        </li>
        <li>
          <Link
            to="/show/:id"
            className="text-blue-500 border-b py-3 block"
            onClick={props.closeMenu}
          >
            <div className="inline px-1">
              <FontAwesomeIcon icon={faPlay} />
            </div>
            Browse Shows
          </Link>
        </li>
        <li>
          <Link
            to="/person/:id"
            className="text-blue-500 border-b py-3 block"
            onClick={props.closeMenu}
          >
            <div className="inline mr-1">
              <FontAwesomeIcon icon={faTheaterMasks} />
            </div>
            Browse People
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;