import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { useParams } from "react-router";

import Loader from "../Components/Loader";
import { useAxiosGetJSON } from "../Hooks/HttpRequests";
import Card from "../Components/Card";

import ImageLoader from "../Components/ImageLoader";
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
    let bg = <GalleryCard id={id} for  = "shwBack" loc={lc}/>

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
            <div key={el.id} className="flex">
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
            <GalleryCard type={type} id={id} for="shwGal"/>
          </div>
        </AccordionDetails>
      </Accordion>
    ));
    
      
    content = (
      <div className="mx-auto h-full object-cover object-center bg-transparent p-0 content-center w-full">
        <div className="w-auto">{bg}</div>
        {/* <div className="bg-local h-full object-cover object-center bg-transparent p-0">
        <div className="w-full m-0">{bg}</div> */}
        <div className="bg-black-t-50 z-10 h-auto -my-20 absolute w-screen">
          <p className="text-pl-1 font-semibold text-4xl text-center">
            {show.name}
            {show.id}
          </p>
          <p><span className="tHead">Genres :  </span><span className="tCon">{show.genres}</span></p>
          
          <p className=""> Ordinary text</p>
          
          <p > Ordinary text</p>
          {galCards}
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
