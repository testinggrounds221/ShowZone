import {Link} from 'react-router-dom';
import React from 'react'

function Card(props){
  const imgStyle = {
    backgroundImage: `url('${props.img? props.img:'' }')`,
    position:'relative',
    height:'300px',
    width:'200px'
  };
  const imgStyleNoImg =  {
    position:'relative',
    backgroundImage: 'url("https://raw.githubusercontent.com/testinggrounds221/ShowZone/master/i/ques.svg")', /* The image used */
    height: '300px',/* You must set a specified height */
    width:'200px',
    backgroundPosition: 'center', /* Center the image */
    backgroundRepeat: 'no-repeat', /* Do not repeat the image */
    backgroundSize: 'cover' /* Resize the background image to cover the entire container */
  }
  const txtStyle = {
    'width': '100%',
    'height': '100%',
    'backgroundColor': 'rgba(0,0,0,0.5)',
    'left':'0',
    'top':'0',
    'position': 'absolute',
    'zIndex': '10',
    'paddingTop':'100px',
    'opacity': '0.9'
  }
  return(
    // bg-pl-2
    <div className="shadow flex content-center">
    <div className="mx-auto">
    <Link to={props.link}>
    <div style={props.img? imgStyle:imgStyleNoImg}>
    <div style={txtStyle} className="text-center font-medium text-t-4 items-center">
    <p>{props.name}</p>
    </div>
    </div>
    </Link>
    </div>
    </div>
    )

}

export default Card