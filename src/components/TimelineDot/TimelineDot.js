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
  useGSAP(mobileDotRef);

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

opacity: 0;
position: absolute;
left: ${(props) => props.$percentOfYear}%;
transform: translateX(-50%);
transform: translateY(-1px);
overflow: visible;
height: ${(props) => (props.$timelineZoom / 100 + 10)}px;
width: ${(props) => (props.$timelineZoom / 100 + 10)}px;
background-color: gray;
box-shadow: rgb(0 0 0 / 20%) 0 0 ${(props) => (props.$timelineZoom / 100 + 10)}px;
border-radius: 50%;
z-index: 1000;
justify-self: center;
transition: all 3s ease;
&:hover {
  background-color: #7638c8;
  box-shadow: rgb(118, 56, 200)
  0px 7px 29px ${(props) => (props.$timelineZoom / 100 + 10)}px;
  transition: all 0.01s ease;

}

  @media (max-width: 640px) {
    scale: 1;
    opacity: 1;
    position: absolute;
left: ${(props) => props.$percentOfYear}%;
transform: translateX(-50%);
overflow: visible;
height: ${(props) => (props.$timelineZoom / 100 + 16)}px;
width: ${(props) => (props.$timelineZoom / 100 + 16)}px;
background-color: gray;
box-shadow: rgb(0 0 0 / 20%) 0 0 ${(props) => (props.$timelineZoom / 100 + 8)}px;
border-radius: 50%;
z-index: 1000;
justify-self: center;
transition: all 3s ease;
&:hover {
  background-color: #7638c8;
  box-shadow: rgb(118, 56, 200)
  0px 7px 29px ${(props) => (props.$timelineZoom / 100 + 8)}px;
  transition: all 0.01s ease;

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