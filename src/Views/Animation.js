import React from "react";
import { animated, useSpring,useSprings,useTrail } from "react-spring";
import { useState} from 'react'
function Animation() {
	let content = null;

	
  return <div>{content}</div>;
}

export default Animation;






//function unUsed(){
	/*   const springProps = useSpring({
    from: { backgroundColor: "red" },
    to: { backgroundColor: "green" },
  });
  const [clicked, setClicked] = useState(false);
  
  const { size, springProps } = useSpring({
	to:{
		size: clicked ? 300 : 200,
		backgroundPosition: clicked ? "50% 100%" : "50% 0%"
	},
    from: {
      size: 200,
      backgroundPosition: "50% 0%",
    },
  });

  content = (
    <animated.div
      style={{height:size,springProps,width:size,backgroundColor:'red',textAlign:'center'}}
      onClick={() => setClicked(!clicked)}
    >
      Hey There !!
    </animated.div>
  );
let colors = ['red','blue','yellow','indigo','green']
const [index,setIndex] = useState(null)
const springs = useSprings(colors.length,
	colors.map((color,i) => ({
		background:color,
		opacity:index === null | i === index ? 1:0.6,
		height: index === null ? 120 : 60,
	from:{
		opacity:0,
		height:120
	}
	})))
	const [springProps,setSpringProps] = useSpring(() => ({
		from:{
			height:0,
			opacity:0
		}
	})) */

/* 	const onItemClick = i => {
		const col = colors[i];
		setSpringProps({
			background:col,
			opacity:1,
			height:200
		})
	}
content = 
	<div>
		{springs.map((prop,i) => (
			<animated.div
				key={i}
				onClick={() => {setIndex(i); onItemClick(i)}}
				style={prop}
			>
			</animated.div>
		))}
	

	
	
	<animated.div>
		<animated.div>{springProps.background}</animated.div>
		<animated.div>
			{index !== null && colors[index]}
		</animated.div>
	</animated.div>

	</div>

}
 */