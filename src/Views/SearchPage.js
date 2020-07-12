import React from "react";
import ShowSearchResults from "../Components/ShowSearchResults";
import { useParams } from "react-router-dom";
import Button from "../Components/Button";
function SearchPage(props) {
  let content = null;
  let { val } = useParams();

  content = (
    <div className="">
      <div>
        <div className="tMain text-center text-xl sticky top-0 z-10 bg-black-t-15 mx-auto">
          Shows Matching "{val}"
        </div>
        <ShowSearchResults val={val} by="shows" />
      </div>
      

      <div>
        <div className="tMain text-center text-xl sticky top-0 z-10 bg-black-t-15 mx-auto">
          People Matching "{val}"
        </div>
        <ShowSearchResults val={val} by="people" />
      </div>
    </div>
    // <div className="text-white">{val} Hey</div>
  );
  return <div>{content}</div>;
}

export default SearchPage;
