import React from "react";
import { useParams } from "react-router";
import { useAxiosGetJSON, useAxiosGetArray } from "../Hooks/HttpRequests";
import Loader from "../Components/Loader";
import Button from "../Components/Button";

function EpisodePage() {
  let { sesid, id } = useParams();

  const url = `http://api.tvmaze.com/episodes/${id}`;
  const u2 = `http://api.tvmaze.com/seasons/${sesid}/episodes`;
  let req = useAxiosGetJSON(url);
  let r2 = useAxiosGetArray(u2);

  let content = null;

  if (req.error) {
    content = <div>Error Found !! NO Person</div>;
  }

  if (req.loading) {
    content = <Loader></Loader>;
  }

  if (req.data && r2.data) {
    let ep = req.data[0];

    let key = [];
    let value = [];
    if (ep.season) {
      value.push(ep.season);
      key.push("Season");
    }
    if (ep.number) {
      value.push(ep.number);
      key.push("Episode Number");
    }
    if (ep.runtime) {
      value.push(ep.runtime);
      key.push("Runtime");
    }
    if (ep.airdate) {
      value.push(date(ep.airdate));
      key.push("Air Date");
    }
    let info = value.map((elem, i) => (
      <p className="text-center m-4" key={i}>
        <span className="tKey">{key[i]}</span>
        <span className="tVal bg-pl-1">{elem}</span>
      </p>
    ));

    let near = r2.data.filter((el) => {
      if (el.number === ep.number + 1 || el.number === ep.number - 1) {
        return el;
      }
      return null;
    });
    //&#x21E6 &#x21E8
    let nb,
      pb = null;
    if (near[0]) {
      if (near[0].number === ep.number - 1) {
        pb = (
          <Button
            name="&#x21E6; Prev"
            to={`/episode/${sesid}/${near[0].id}`}
          ></Button>
        );
      }
      if (near[0].number === ep.number + 1) {
        nb = (
          <Button
            name="Next &#x21E8;"
            to={`/episode/${sesid}/${near[0].id}`}
          ></Button>
        );
      }
    }
    if (near[1] && near[1].number === ep.number + 1) {
      nb = (
        <Button
          name="Next &#x21E8;"
          to={`/episode/${sesid}/${near[1].id}`}
        ></Button>
      );
    }
    //https://raw.githubusercontent.com/testinggrounds221/ShowZone/master/i/per.svg
    content = (
      <div>
        {!ep.image && (
          <img
            src="https://raw.githubusercontent.com/testinggrounds221/ShowZone/master/i/em.svg"
            className="mx-auto w-4/5"
            alt="TryLater"
          ></img>
        )}
        {ep.image && (
          <img
            src={ep.image.medium}
            className="mx-auto w-3/5 h-auto object-cover"
            alt="TryLater"
          ></img>
        )}

        <div className="bg-black-t-50 absolute inset-x-0 mx-auto w-11/12 rounded-md">
          <p className="text-center">
            <span className="tMain font-semibold text-3xl text-center">
              {ep.name}
            </span>
          </p>
          {info}
          <div className="flex flex-wrap justify-between mb-5">
            <div className="w-2/5">{pb}</div>
            <div className="w-2/5">{nb}</div>
          </div>

          <p className="tCon text-center mb-5 px-1">{stripHtml(ep.summary)}</p>
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
  function stripHtml(html) {
    let tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

  function date(str) {
    if (!str) {
      return "Unknown";
    }
    let dt = new Date(str);
    let mon = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "April",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return dt.getDate() + " " + mon[dt.getMonth()] + " " + dt.getFullYear();
  }
}

export default EpisodePage;
