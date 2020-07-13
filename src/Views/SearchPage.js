import React from "react";
import ShowSearchResults from "../Components/ShowSearchResults";
import { useParams } from "react-router-dom";

function SearchPage(props) {
  let content = null;
  let { val } = useParams();

  content = (
    <div className="">
      <div>
        <div className="tMain text-center text-xl sticky top-0 z-20 bg-black mx-auto">
          Shows Matching "{val}"
        </div>
        <ShowSearchResults val={val} by="shows" />
      </div>
      

      <div>
      <div className="tMain text-center text-xl sticky top-0 z-20 bg-black mx-auto">
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
