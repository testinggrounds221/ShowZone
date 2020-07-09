import React from "react";
import { useParams } from "react-router";
import { useAxiosGetJSON, useAxiosGetArray } from "../Hooks/HttpRequests";
import Loader from "../Components/Loader";
import { dateToStr,dateDiffYear } from "../Hooks/MyHook";
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
            Starred In
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

    let key = [];
    let value = [];
    if (per.country) {
      value.push(per.country.name);
      key.push("Country");
    }
    if (per.gender) {
      value.push(per.gender);
      key.push("Gender");
    }
    if (per.birthday) {
      value.push(dateDiffYear(per.birthday, per.deathday));
      value.push(dateToStr(per.birthday));

      key.push("Age");
      key.push("Birthday");
    }
    let info = value.map((elem, i) => (
      <p className="text-center m-4">
        <span className="tKey">{key[i]}</span>
        <span className="tVal bg-pl-1">{elem}</span>
      </p>
    ));
    //https://opendoodles.s3-us-west-1.amazonaws.com/loving.png
    content = (
      <div>
        {per.image && <img src={per.image.medium} className="mx-auto"></img>}
        {!per.image && (
          <img
            src="https://raw.githubusercontent.com/testinggrounds221/ShowZone/master/i/per.svg"
            className="mx-auto rounded-full h-3/5 w-3/5"
          ></img>
        )}
        <div>
          <div className="bg-black-t-50 mx-auto w-11/12 text-lg -my-10 z-10 absolute inset-x-0">
            <p className="text-center">
              <span className="tMain font-semibold text-3xl text-center">
                {per.name}
              </span>
            </p>
            {info}
            <div className="mt-5 bg-pl-1 p-3">{crdCards}</div>
          </div>
        </div>
      </div>
    );
  }
  return <div>{content}</div>;

  
}

export default Person;
