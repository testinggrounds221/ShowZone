import React from "react";
// import Button from './Button'
import { useHistory } from "react-router-dom";
import Navigation from "./Navigation";

function Footer() {
  // let history = useHistory()
  // <Button name="Back" clk={() => history.goBack()} />
  // <div >&copy; Copyright 2020</div>
  return (
    <div class="bg-gray-400 pt-16">
      <div class="fixed bg-gray-600">
        Fixed child
        <div class="absolute top-0 right-0 bg-gray-800">Absolute child</div>
      </div>
    </div>
  );
}
//
export default Footer;
