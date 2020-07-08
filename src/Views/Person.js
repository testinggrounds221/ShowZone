import React from "react";
import { useParams } from "react-router";
import { useAxiosGetJSON, useAxiosGetArray } from "../Hooks/HttpRequests";
import Loader from "../Components/Loader";
import ImageLoader from "../Components/ImageLoader";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Card from "../Components/Card";

function Person() {
  let { id } = useParams();
  //const url = `http://api.tvmaze.com/people/1`
  const url = `http://api.tvmaze.com/people/${id}`; //http://api.tvmaze.com/people/1/castcredits?embed=show
  const urlCred = `http://api.tvmaze.com/people/${id}/castcredits?embed=show`;
  let req = useAxiosGetJSON(url);
  let req2 = useAxiosGetArray(urlCred);
  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  let content = null;

  if (req.error || req2.error) {
    content = <div>Error Found !! NO Person</div>;
  }

  if (req.loading || req2.loading) {
    content = <Loader></Loader>;
  }

  if (req.data && req2.data) {
    let per = req.data[0];
    let crd = req2.data;
    let crdCards = (
      <ThemeProvider theme={theme}>
        <Accordion>
          <AccordionSummary className="tMain text-lg">
            Cast Credits{" "}
          </AccordionSummary>
          {crd.map((shw) => (
            <AccordionDetails>
              <div key={shw._embedded.show.id} className="mx-auto ">
                <Card
                  name={shw._embedded.show.name}
                  link={`/show/${shw._embedded.show.id}`}
                  img={
                    shw._embedded.show.image
                      ? shw._embedded.show.image.medium
                      : null
                  }
                />
              </div>
            </AccordionDetails>
          ))}
        </Accordion>
      </ThemeProvider>
    );

    content = (
      <div className="h-full">
        <img src={per.image.medium} className="mx-auto"></img>
        <div className="bg-black-t-50 h-full mx-auto w-11/12 text-lg">
          
          {crdCards}
        </div>
        
      </div>
    );
  }
  return <div>{content}</div>;

  function calDiff(s1, s2) {
    let d1 = new Date(s1);
    let d2 = s2 ? new Date(s2) : new Date();
    return Math.floor((d2 - d1) / (1000 * 60 * 60 * 24 * 365));
  }
}

export default Person;
