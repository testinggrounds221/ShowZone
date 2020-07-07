import React from "react";

import ShowSearchResults from "../Components/ShowSearchResults";

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
    
    let stay = (
      <div className="text-white">
        <div>
          <div className="bg-pl-1 py-10">
            <input
              id="txtBox"
              type="text"
              className="outline-none text-center font-serif bg-pl-1 rounded-md w-full tCon "
              placeholder="Search"
              autoComplete="off"
            ></input>
            <div onClick={this.handleLoginClick} className="w-1/4 h-10 bg-pl-4 mt-8 flex justify-evenly mx-auto rounded-md outline-none">
              <LoginButton  />
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
      <div className="text-center font-medium text-t-1 text-2xl rounded-full">Shows Matching "{val}"</div>
      <ShowSearchResults val={val} by="shows" />
      <div className="text-center">People</div>
      <ShowSearchResults val={val} by="people" />
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
    17861
  ];
  
  ids=shuffle(ids)
  let content = ids.map((id) => (
    <div key={id} className="content-center w-full items-center justify-center">
      <GalleryCard  id={id} type="banner" for="hmBann"/>
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
  return (
    <button onClick={props.onClick} className="outline-none">
      GO
    </button>
  );
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Reset</button>;
}

export default LoginControl;
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}