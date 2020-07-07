import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { useParams } from "react-router";

import Loader from "../Components/Loader";
import { useAxiosGetJSON } from "../Hooks/HttpRequests";
import Card from "../Components/Card";
import Button from "../Components/Button";
import Rating from "../Components/Rating";
import SeasonCard from "../Components/SeasonCard";
import GalleryCard from "../Components/GalleryCard";
//http://api.tvmaze.com/shows/10
//http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast
function Show() {
  let { id } = useParams();
  const url = `http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`;
  let ssnCards = null;
  let req = useAxiosGetJSON(url);

  let content = null;
  if (req.error) {
    content = <div>Error Found !! NO ITEM</div>;
  }

  if (req.loading) {
    content = <Loader></Loader>;
  }

  if (req.data) {
    let show = req.data[0];
    let castCards = null;
    let lc = null;
    try {
      lc = show.image.medium;
    } catch {
      lc = "noImg";
    }
    let bg = <GalleryCard id={id} for="shwBack" loc={lc} />;

    castCards = (
      <Accordion>
        <AccordionSummary>CAST</AccordionSummary>
        {show._embedded.cast.map((elem) => (
          <AccordionDetails key={elem.person.id}>
            <div key={elem.person.id} className="flex p-3">
              <Card
                name={elem.person.name}
                link={`/person/${elem.person.id}`}
                img={elem.person.image ? elem.person.image.medium : null}
              />
            </div>
          </AccordionDetails>
        ))}
      </Accordion>
    );

    ssnCards = (
      <Accordion>
        <AccordionSummary>SEASONS</AccordionSummary>
        {show._embedded.seasons.map((el) => (
          <AccordionDetails key={el.id}>
            <div key={el.id} className="flex w-full">
              <SeasonCard sn={el} />
            </div>
          </AccordionDetails>
        ))}
      </Accordion>
    );
    let types = ["poster", "background", "banner", "typography"];
    let galCards = types.map((type) => (
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content">
          {type}
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <GalleryCard type={type} id={id} for="shwGal" />
          </div>
        </AccordionDetails>
      </Accordion>
    ));
    let genCards = show.genres.map((gen) => (
      <span className="tCon bg-gray-900 m-1 px-2 rounded-full tracking-wide">
        {gen}
      </span>
    ));
    let iter = (arr) =>
      arr.map((el) => (
        <span className="tMain bg-gray-900 m-1 px-3 rounded-full tracking-wide">
          {el}
        </span>
      ));
    content = (
      <div className=" h-full bg-transparent p-0 w-full">
        <div className="w-auto">{bg}</div>
        {/* <div className="bg-local h-full object-cover object-center bg-transparent p-0">
        <div className="w-full m-0">{bg}</div> */}
        <div className="bg-black-t-50 h-auto -my-20 absolute left-10 mx-2 w-11/12 rounded-md">
          <p className="text-pl-1 font-semibold text-3xl text-center">
            <span className="tMain">
            {show.name}
            </span>
            
          </p>
          <div className="text-center">
            <Rating val={show.rating.average} />
          </div>

          <p className="text-center">
            <span className="tHead">Genres : </span>
            {iter(show.genres)}
          </p>
          <p className="text-center">
            <span className="tHead">Type: </span>
            <span className="tCon">{show.type}</span>
          </p>
          <Button name="Latest Episode"/>
		  <p className="tCon text-center tracking-wide my-2">
			{stripHtml(show.summary)}
		  </p>
      <div className="p-3">
          {galCards}
          {ssnCards}
          {show.id}
      </div>
        </div>
      </div>
    );
  }

  return <div>{content}</div>;

  function stripHtml(html) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }
}

export default Show;
