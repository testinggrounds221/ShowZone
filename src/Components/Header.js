import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b p-4/5 flex items-center bg-pl-1 sticky top-0">
      <div className="mx-2 mr-3">
        <Navigation />
      </div>

      <span className="tMain text-center tracking-wide">
        <Link to="/">ShowZone</Link>
      </span>
    </header>
  );
}

export default Header;
