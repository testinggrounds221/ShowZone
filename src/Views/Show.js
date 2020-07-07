import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router";

import Loader from "../Components/Loader";
import { useAxiosGetJSON } from "../Hooks/HttpRequests";
import Card from "../Components/Card";
import Button from "../Components/Button";
import Rating from "../Components/Rating";
import SeasonCard from "../Components/SeasonCard";
import GalleryCard from "../Components/GalleryCard";
import { text } from "@fortawesome/fontawesome-svg-core";
//http://api.tvmaze.com/shows/10
//http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast
function Show() {
  let { id } = useParams();
  const url = `http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`;
  let ssnCards = null;
  let req = useAxiosGetJSON(url);
  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
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
        <AccordionSummary>
          <span className="tMain text-lg"> Cast </span>
        </AccordionSummary>
        {show._embedded.cast.map((elem) => (
          <AccordionDetails key={elem.person.id}>
            <div key={elem.person.id} className="mx-auto z-50">
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
      <ThemeProvider theme={theme}>
        <Accordion TransitionProps={{ unmountOnExit: true }}>
          <AccordionSummary>
          <span className="tMain text-lg">Seasons</span>
          </AccordionSummary>
          {show._embedded.seasons.map((el) => (
            <AccordionDetails key={el.id}>
              <div key={el.id} className="mx-auto">
                <SeasonCard sn={el} />
              </div>
            </AccordionDetails>
          ))}
        </Accordion>
      </ThemeProvider>
    );
    let nm = ["Posters", "Wallpapers", "Banners", "Typographies"];
    let types = ["Poster", "background", "banner", "typography"];
    let galCards = types.map((type, i) => (
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content">
          <span className="tMain text-lg">{nm[i]}</span>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <GalleryCard type={type.toLowerCase()} id={id} for="shwGal" />
          </div>
        </AccordionDetails>
      </Accordion>
    ));

    let iter = (arr) =>
      arr.map((el) => (
        <span className="tMain bg-gray-900 m-1 px-3 rounded-full tracking-wide">
          {el}
        </span>
      ));
    let rat = show.rating.average ? (
      <Rating val={show.rating.average} />
    ) : (
      <div></div>
    );
    let bt = (show._links.previousepisode != undefined) ? (
      <Button
        name="Latest Episode"
        to={`/episode/${show._links.previousepisode.href.substring(31)}`}
      />
    ) : (
      <div></div>
    );
    
    content = (
      <div className="h-full bg-pl-1 p-0 w-full">
        {bg}
        <div className="w-auto relative text-center">
          <div className="bg-black-t-50 -my-20 absolute w-11/12 rounded-md inset-x-0 mx-auto">
            <p className="text-pl-1 font-semibold text-3xl text-center">
              <span className="tMain">{show.name}</span>
            </p>
            <div className="text-center">{rat}</div>

            <p className="text-center">
              <span className="font-cairo text-lg text-t-4">Genres : </span>
              {iter(show.genres)}
            </p>
            <p className="text-center">
              <span className="font-cairo text-lg text-t-4">Type: </span>
              <span className="tMain bg-gray-900 m-1 px-3 rounded-full tracking-wide">
          {show.type}
        </span>
            </p>
            <p className="text-center">
              <span className="font-cairo text-lg text-t-4">Runtime: </span>
              <span className="tMain bg-gray-900 m-1 px-3 rounded-full tracking-wide">
          {show.runtime? show.runtime:"Specific"}
        </span>
            </p>
            <p className="text-center">
              <span className="font-cairo text-lg text-t-4">Language: </span>
              <span className="tMain bg-gray-900 m-1 px-3 rounded-full tracking-wide">
          {show.language}
        </span>
            </p>
            <p className="text-center">
              <span className="font-cairo text-lg text-t-4">Premiered: </span>
              <span className="tMain bg-gray-900 m-1 px-3 rounded-full tracking-wide">
          {date(show.premiered)}
        </span>
            </p>

            <span className="tMain bg-gray-900 m-1 px-3 rounded-full tracking-wide">
          {show.status}
        </span>
            <div className="text-center my-5">
              <Button
                name="Latest Episode"
                to={`/episode/${show._links.previousepisode.href.substring(
                  31
                )}`}
              />
            </div>

            <p className="tCon text-center tracking-wide my-2">
              {stripHtml(show.summary)}
            </p>
            

            <div className="p-3">
              {castCards}
              {ssnCards}
              {galCards}
              {show.id}
            </div>
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
  function date(str) {
    let yr = str.substring(0,4);
    let mon = ["Jan","Feb","Mar","Apr","May","June","July","April","Sep","Oct","Nov","Dec"]
    let month = mon[parseInt(str.substring(5,7))-1]
    let day = str.substring(8);
    return(day+' '+month+' '+yr)
  }
function open(url) {
  const win = window.open(url, "_blank");
  if (win != null) {
    win.focus();
  }
}


export default Show;
