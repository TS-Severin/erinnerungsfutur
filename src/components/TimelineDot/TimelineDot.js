import styled from "styled-components";
import GetDayOfYearHelper from "../../services/GetDayOfYearHelper";
import useGSAP from "./useDotAnimation";
import React, { useRef } from 'react';
import Link from "next/link";

export default function TimelineDot({ id, date, color, slug, handlePreviewClick }) {
  const percentOfYear = GetDayOfYearHelper(date);

  // define reference for gsap animatin of dots (pass as props)
  const dotRef = useRef(null);

  // Apply GSAP animation when the component mounts
  useGSAP(dotRef);

  return (
    <>
      <Link href={`/${slug}`}>
        <StyledTimelineDot key={id}
          ref={dotRef}
          $percentOfYear={percentOfYear}
          color={color}
          onMouseEnter={() => handlePreviewClick(id)}
        >
        </StyledTimelineDot>
      </Link>
    </>
  );
}
// onclick={handlePreviewClick}
// href={`/${slug}`}

const StyledTimelineDot = styled.div`
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
  height: 20px;
  width: 20px;
  background-color: orange;
  opacity: 0.1;
}
`;

