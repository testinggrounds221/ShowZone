import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavigationMenu from "./NavigationMenu";
import { useTransition, animated } from "react-spring";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  // <div className="fixed top-0 left-0 bg-white w-4/5 h-full z-50 shadow">Menu Appears Here</div>

  // <div className="fixed top-0 left-0 bg-black-t-50 w-full h-full z-50" onClick={() => setShowMenu(false)}></div>
  const maskTransitions = useTransition(showMenu, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  const menuTransitions = useTransition(showMenu, null, {
    from: { position: "absolute", transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
  });

  return (
    <nav className="">
      <span className="text-xl">
        <FontAwesomeIcon
          icon={faBars}
          color="red"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
      </span>

      {maskTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="fixed top-0 left-0 bg-black-t-50 w-full h-full z-50"
              onClick={() => setShowMenu(false)}
            ></animated.div>
          )
      )}

      {menuTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="fixed top-0 left-0 bg-white w-4/5 h-full z-50 shadow p-3"
            > 
              <NavigationMenu closeMenu={() => setShowMenu(false)} />
              
            </animated.div>
          )
      )}
    </nav>
  );
}

export default Navigation;
