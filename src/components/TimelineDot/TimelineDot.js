import styled from "styled-components";
import GetDayOfYearHelper from "../../services/GetDayOfYearHelper";
import useGSAP from "./useDotAnimation";
import React, { useRef } from 'react';

export default function TimelineDot({ id, date, color, slug }) {
  const percentOfYear = GetDayOfYearHelper(date);
  
  // define reference for gsap animatin of dots (pass as props)
  const dotRef = useRef(null);

  // Apply GSAP animation when the component mounts
  useGSAP(dotRef);


  return (
    <>
        <StyledTimelineDot key={id}
        ref={dotRef}
        $percentOfYear={percentOfYear}
        color={color} 
        href={`/${slug}`}>
        </StyledTimelineDot>
    </>
  );
}


const StyledTimelineDot = styled.a`
position: absolute;
left: ${(props) => props.$percentOfYear}%;
transform: translateX(-50%);
overflow: visible;
height: 8px;
width: 8px;
background-color: red;
border-radius: 50%;
display: inline-block;
justify-self: center;
transition: width 0.3s ease, height 0.3s ease, background-color 0.3s ease; 
transition-timing-function: ease-out;
&:hover {
  height: 200px;
  width: 200px;
  background-color: white;
  opacity: 0.5;
}
`;