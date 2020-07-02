import React from "react";
import SearchBar from "../Components/SearchBar";
import ShowSearchResults from "../Components/ShowSearchResults";
import { useParams } from "react-router-dom";

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
      let val = document.getElementById("txtBox").value;
      console.log(val);
      content = (
        <div>
          <div className="bg-pl-3 w-full h-full">Search Results Go here</div>
          <ShowSearchResults val={val} by="shows" />
          <LogoutButton onClick={this.handleLogoutClick} />
        </div>
      );
    } else {
      content = (
        <div>
          <LoginButton onClick={this.handleLoginClick} />
        </div>
      );
    }

    return (
      <div>
        {stay}
        <Greeting isLoggedIn={isLoggedIn} />
        {content}
      </div>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

export default LoginControl;
