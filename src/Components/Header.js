import React from "react";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b p-4/5 items-center bg-pl-1 top-0 sticky z-10">
      {/* <div className="mx-2 mr-3">
        <Navigation />
      </div> */}
      <Link to="/about">
        <p className="tMain text-center tracking-wide mx-auto m-1">ShowZone</p>
      </Link>
    </header>
  );
}

export default Header;
