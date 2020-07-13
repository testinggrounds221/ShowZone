import React from "react";

import { withRouter } from "react-router-dom";
import Button from "../Components/Button";
import GalleryCard from "../Components/GalleryCard";
// className="w-1/4 h-10 bg-pl-4 mt-8 flex justify-evenly mx-auto rounded-md outline-none" Button
class Home extends React.Component {
  // let his = useHistory()

  constructor(props) {
    super(props);
    this.srch = this.handleSearchClick.bind(this);
    this.reset = this.handleResetClick.bind(this);
    this.state = { showResults: false };
  }

  handleSearchClick() {
    this.setState({ showResults: true });
  }
  handleResetClick() {
    this.setState({ showResults: false });
  }

  render() {
    const show = this.state.showResults;
    let content = null;
    let stay = (
      <div className="text-white">
        <div>
          <div className="bg-pl-1 py-10">
            <input
              id="txtBox"
              type="text"
              className="outline-none text-center font-serif bg-pl-1 rounded-md w-full tCon "
              placeholder="Search People and Shows"
              autoComplete="off"
            ></input>
            <div
              onClick={this.srch}
              className="w-1/4 bg-pl-4 mt-8 flex justify-center text-center mx-auto rounded-md outline-none cursor-pointer"
            >
              <Button name="GO" />
            </div>
          </div>
        </div>
      </div>
    );
    if (show) {
      let val = document.getElementById("txtBox").value;
      if (!val) {
        content = (
          <div>
            <div className="mx-auto  font-alegra-sc text-5xl text-center text-pl-4">
              Enter Text To Search
            </div>

            <div onClick={this.reset} className="cursor-pointer">
              <Button name="Back To Browsing !" />
            </div>
          </div>
        );
      } else {
        this.props.history.push(`/searchpage/${val}`);
      }
    } else content = BrowseCards();

    return (
      <div>
        {stay}
        {content}
      </div>
    );
  }
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
    17861,
  ];

  ids = shuffle(ids);
  let content = ids.map((id) => (
    <div key={id} className="content-center w-full items-center justify-center">
      <GalleryCard id={id} type="banner" for="hmBann" />
    </div>
  ));
  return <div>{content}</div>;
}
export default withRouter(Home);
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
