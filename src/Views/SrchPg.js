import React from "react";

import ShowSearchResults from "../Components/ShowSearchResults";
import { useParams } from "react-router-dom";
import GalleryCard from "../Components/GalleryCard";
class LoginControl extends React.Component {
  constructor(props) {
    super(props);

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let content = null;
    let button;
    let stay = (
      <div className="bg-pl-4 text-white">
        <div>
          <div className="items-center inline justify-evenly">
            <input
              id="txtBox"
              type="text"
              className=" font-f1 bg-pl-2 text-black rounded-md w-full"
            ></input>
            <div className="w-auto flex items-center justify-evenly">
              <LoginButton onClick={this.handleLoginClick} />
            </div>
          </div>
        </div>
      </div>
    );
    if (isLoggedIn) {
      content = <LogoutButton onClick={this.handleLogoutClick} />;
    }
    return (
      <div>
        {stay}
        {content}
        <Greeting isLoggedIn={isLoggedIn} />
      </div>
    );
  }
}

function Results(props) {
  // Show Sreach results
  let content = null;
  let val = document.getElementById("txtBox").value;
  content = (
    <div>
      <ShowSearchResults val={val} by="shows" />
    </div>
  );
  return <div>{content}</div>;
}

function BrowseCards(props) {
  let ids = [
    49,
    42167,
    27436,
    7194,
    431,
    4,
    1851,
    1850,
    26020,
    1871,
    143,
    5079,
    12888,
    82,
    20683,
    124,
  ];
  let content = ids.map((id) => (
    <div className="content-center w-full items-center justify-center">
      <GalleryCard id={id} />
    </div>
  ));
  return <div>{content}</div>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <Results />;
  }
  return <BrowseCards />;
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Reset</button>;
}

export default LoginControl;
