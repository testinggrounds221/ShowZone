import React from "react";
import LoginControl from "./SrchPg";
import { Link, useHistory,withRouter } from "react-router-dom";
import Button from "../Components/Button";
import GalleryCard from "../Components/GalleryCard";
import ShowSearchResults from "../Components/ShowSearchResults";
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
              placeholder="Search Shit"
              autoComplete="off"
            ></input>
            <div onClick={this.srch}>
              <Button name="GO !!!!!!" />
            </div>
            <div onClick={this.reset}>
              <Button name="Reset" />
            </div>
          </div>
        </div>
      </div>
    );
    if (show) {
      this.props.history.push(`/${document.getElementById("txtBox").value}`)
      content = (

        <div>
          {document.getElementById("txtBox").value}
          <div className="text-center tKey"></div>
          <ShowSearchResults
            val={document.getElementById("txtBox").value}
            by="shows"
          />
          <div className="text-center tVal">People</div>
          <ShowSearchResults
            val={document.getElementById("txtBox").value}
            by="people"
          />
          Show Results for VAL
        </div>
      );
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
// 	function rtSrch(){
//   	let val = document.getElementById("txtBox").value;
// 	console.log(val);
// 	// his.push(`/srchpg/${val}`)

//   	// c2 = <ShowSearchResults by={sby} qr={val} />
// }
// 	let stay = (
//       <div className="text-white">
//         <div>
//           <div className="bg-pl-1 py-10">
//             <input
//               id="txtBox"
//               type="text"
//               className="outline-none text-center font-serif bg-pl-1 rounded-md w-full tCon "
//               placeholder="Search Shit"
//               autoComplete="off"
//             ></input>
//             <div
//               onClick={rtSrch}
//               className="w-1/4 h-10 bg-pl-4 mt-8 flex justify-evenly mx-auto rounded-md outline-none"
//             >
//               <Button name="Click to search shit" />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// 	return(
// 		<div className="bg-pl-1">
// 			{stay}
// 			<div>
//       <div className="text-center tKey">Shows Matching "{val}"</div>
//       <ShowSearchResults val={val} by="shows" />
//       <div className="text-center tVal">People</div>
//       <ShowSearchResults val={val} by="people" />
//     </div>

// 		</div>
// 	)

export default withRouter(Home);
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
