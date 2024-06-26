import styled from "styled-components";
import GetDayOfYearHelper from "../../services/GetDayOfYearHelper";
import useGSAP from "./useDotAnimation";
import React, { useRef, useState, useEffect } from 'react';
import Link from "next/link";
import getRandomPurple from "@/services/GetRandomPurple";

export default function TimelineDot({ id, date, slug, handlePreviewClick, timelineZoom }) {
  const percentOfYear = GetDayOfYearHelper(date);
  // random purple for each dot
  const randomPurple = getRandomPurple();

  // define reference for gsap animatin of dots (pass as props)
  const dotRef = useRef(null);
  const mobileDotRef = useRef(null);


  // Apply GSAP animation when the component mounts

  useGSAP(dotRef);
  // useGSAP(mobileDotRef);

  // State to track screen width
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Function to update isSmallScreen state based on screen width
  const updateScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 640);
  };

  // Add event listener for screen resize
  useEffect(() => {
    updateScreenSize(); // Initial check

    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);

    };
  }, []); // Empty dependency array to run only on mount and unmount

  var ConditionalLink = !isSmallScreen ? Link : "div";


  return (
    <>


      <ConditionalLink href={`/${slug}`}>
        <StyledTimelineDot
          key={id}
          ref={dotRef}
          $randomPurple={randomPurple}
          $percentOfYear={percentOfYear}
          onMouseEnter={!isSmallScreen ? () => handlePreviewClick(id) : undefined}
          onClick={isSmallScreen ? () => handlePreviewClick(id) : undefined}
          $timelineZoom={timelineZoom}
        />
      </ConditionalLink>

    </>
  );
}



const StyledTimelineDot = styled.div`
position: absolute;
left: ${(props) => props.$percentOfYear}%;
transform: translateX(-50%);
overflow: visible;
height: ${(props) => (props.$timelineZoom / 100 + 8)}px;
width: ${(props) => (props.$timelineZoom / 100 + 8)}px;
background-color: ${(props) => props.$randomPurple};
border-radius: 50%;
z-index: 1000;
justify-self: center;
transition: width 0.3s ease, height 0.3s ease, background-color 0.3s ease; 
transition-timing-function: ease-out;
&:hover {
  height: 12px;
  width: 12px;
  background-color: red;
  opacity: 0.1;
}

  @media (max-width: 640px) {
    position: absolute;
    left: ${(props) => props.$percentOfYear}%;
    transform: translateX(-50%);
    overflow: visible;
    z-index: 1000;
    height: ${(props) => (props.$timelineZoom / 100 + 16)}px;
    width: ${(props) => (props.$timelineZoom / 100 + 16)}px;
    background-color: ${(props) => props.$randomPurple};
    border-radius: 50%;
    justify-self: center;
    transition: width 0.1s ease, height 0.1s ease, background-color 0.1s ease; 
    transition-timing-function: ease-in;
    &:hover {
      height: 12px;
      width: 12px;
      background-color: red;
      opacity: 0.1;
      box-shadow: inset 0px 0px 1px 1px grey;
    }
  }

`;

// const StyledTimelineDotMobile = styled.div`
// position: absolute;
// left: ${(props) => props.$percentOfYear}%;
// transform: translateX(-50%);
// overflow: visible;
// z-index: 1000;
// height: ${(props) => (props.$timelineZoom / 100 + 16)}px;
// width: ${(props) => (props.$timelineZoom / 100 + 16)}px;
// background-color: ${(props) => props.$randomPurple};
// border-radius: 50%;
// justify-self: center;
// transition: width 0.3s ease, height 0.3s ease, background-color 0.3s ease; 
// transition-timing-function: ease-out;
// &:hover {
//   height: 24px;
//   width: 24px;
//   background-color: rgb(155, 50, 150);
// }
// `;