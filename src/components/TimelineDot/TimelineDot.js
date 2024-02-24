import styled from "styled-components";
import GetDayOfYearHelper from "../../services/GetDayOfYearHelper";
import useGSAP from "./useDotAnimation";
import React, { useRef } from 'react';
import Link from "next/link";
import getRandomPurple from "@/services/GetRandomPurple";

export default function TimelineDot({ id, date, slug, handlePreviewClick }) {
  const percentOfYear = GetDayOfYearHelper(date);

  // random purple for each dot
  const randomPurple = getRandomPurple();

  // define reference for gsap animatin of dots (pass as props)
  const dotRef = useRef(null);

  // Apply GSAP animation when the component mounts
  useGSAP(dotRef);
  return (
    <>
      <Link href={`/${slug}`}>
        <StyledTimelineDot key={id}
          ref={dotRef}
          $randomPurple={randomPurple}
          $percentOfYear={percentOfYear}
          onMouseEnter={() => handlePreviewClick(id)}
        >
        </StyledTimelineDot>
      </Link>
    </>
  );
}
// onclick={handlePreviewClick}
// href={`/${slug}`}
// ${(props) => props.randomPurple}

const StyledTimelineDot = styled.div`
position: absolute;
left: ${(props) => props.$percentOfYear}%;
transform: translateX(-50%);
overflow: visible;
height: 8px;
width: 8px;
background-color: ${(props) => props.$randomPurple};
border-radius: 50%;
display: inline-block;
justify-self: center;
transition: width 0.3s ease, height 0.3s ease, background-color 0.3s ease; 
transition-timing-function: ease-out;
&:hover {
  height: 12px;
  width: 12px;
  background-color: RGB(255, 131, 250);
  opacity: 0.1;
}
`;

