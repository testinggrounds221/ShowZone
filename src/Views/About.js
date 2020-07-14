import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faDribbble,
  faReact,
  faYarn,
  faCss3,
  faFontAwesome,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(https://raw.githubusercontent.com/testinggrounds221/ShowZone/master/i/chalkboard.jpg)",
        }}
        className="font-serif h-screen w-full"
      >
        <h1 className="text-2xl mb-1 font-bond text-center justify-center tMain">
          ShowZone
        </h1>
        <h2 className="tMain text-center">About The App</h2>
        <div className="text-white text-center px-3 text-lg tracking-wider space-y-6 my-3">
          <p className="">This Page was put together using</p>
          <div className="flex justify-between my-3 mx-auto w-3/4">
            <div className="justify-center">
            <a href="https://reactjs.org/">
              <FontAwesomeIcon icon={faReact} size="3x" color={"lightblue"}/>
             </a>
            </div>
            <div className="justify-center">
             <a href="https://classic.yarnpkg.com/en/"> 
              <FontAwesomeIcon icon={faYarn} size="3x" color={"white"} />
             </a> 
            </div>
            <div className="justify-center">
            <a href="https://tailwindcss.com/"> 
              <FontAwesomeIcon icon={faCss3} size="3x" color={"yellow"} />
            </a>  
            </div>
            <div className="justify-center">
            <a href="https://fontawesome.com/"> 
              <FontAwesomeIcon
                icon={faFontAwesome}
                size="3x"
                color={"lightblue"}
              />
              </a>
            </div>
          </div>
          <p className="">
            Content is made available using CORS meachanism from{" "}
            <a
              className=" border-b  text-blue-200"
              href="http://www.tvmaze.com/api"
            >
              <a
                className=" border-b  text-blue-200"
                href="http://www.tvmaze.com/api"
              >
                TV Maze
              </a>
            </a>
            . You can get it{" "}
            <a
              className=" border-b  text-blue-200"
              href="http://www.tvmaze.com/api"
            >
              here.
            </a>
          </p>
          <p className="">
            This project was bootstrapped with{" "}
            <a
              className=" border-b  text-blue-200"
              href="https://github.com/facebook/create-react-app"
            >
              Create React App.
            </a>
          </p>

          <p className="">
            You Can Get the whole code for this site{" "}
            <a
              className=" border-b  text-blue-200"
              href="https://github.com/testinggrounds221/ShowZone/tree/branch2"
            >
              here.
            </a>
          </p>
        </div>
      </div>
      <div>
        <h2 className="tMain text-center text-2xl">About The Developer</h2>

        <img
          src="https://raw.githubusercontent.com/testinggrounds221/ShowZone/master/i/myAvatar.png"
          className="rounded-full mx-auto"
          alt="Shot"
        ></img>
        <div className="text-white font-sans text-lg tracking-wide text-center mb-5 px-1">
          <p>Hey there !!!</p>
          <p>
            This app was created by Shreeram. Shreeram is a noob web developer
            and this is his first-ever <b>completed</b> project.{" "}
            <p className="my-2">
              In case you missed it, the guy above this section resembles him.
            </p>
            Shreeram loves inputs and feedbacks about his work and would be
            highly motivated if he was offered some.
          </p>
        </div>
        {/* Face Color : edbca1 */}

        <p className="tCon text-center my-5">You can catch him on</p>
        <div className="justify-between flex mx-auto w-3/4">
          <div className=" m-1 inline ">
          <a href="https://github.com/testinggrounds221"> 
            <FontAwesomeIcon icon={faGithub} size="3x" color={"white"} />
           </a> 
          </div>

          <div className="inline m-1">
          <a href="https://www.instagram.com/testinggrounds221/"> 
            <FontAwesomeIcon icon={faInstagram} size="3x" color={"405DE6"} />
            </a>
          </div>
          <div className="inline m-1">
          <a href="https://dribbble.com/testinggrounds"> 
            <FontAwesomeIcon icon={faDribbble} size="3x" color={"#ea4c89"} />
           </a> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
