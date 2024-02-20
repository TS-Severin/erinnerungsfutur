import styled from "styled-components";
import GetDayOfYearHelper from "../../services/GetDayOfYearHelper";
import styles from "./TimelineDot.module.scss"
// for axis
import GetCurrentDayOfYearHelper from "@/services/GetCurrentDayOfYearHelper";
// for today axis element
import GetTodayFullDateHelper from "@/services/GetTodayFullDateHelper";

// current day for axis
const dayCount = GetCurrentDayOfYearHelper();

// full day for axis today element
const fullDate = GetTodayFullDateHelper();

export default function TimelineDot({ id, date, color, slug }) {
  const dayOfTheYear = GetDayOfYearHelper(date);
  
  return (
    <>
        <StyledTimelineAxis/>
        <StyledTodayAxisElement>
        </StyledTodayAxisElement>
        <StyledTimelineDot key={id}
        $dayoftheyear={dayOfTheYear}
        color={color} 
        href={`/${slug}`}>
        </StyledTimelineDot>
    </>
  );
}

// dot styled component

const StyledTimelineDot = styled.a`
grid-column: ${(props) => props.$dayoftheyear};
grid-row: 1;
overflow: visible;
transform: translateY(0);
height: 10px;
width: 10px;
background-color: red;
border-radius: 50%;
display: inline-block;
justify-self: center;
`;

// axis styled component


const StyledTimelineAxis = styled.span`
width: 1px;
height: 200px;
overflow: visible;
background-color: black;
grid-row: 1;
grid-column: 68;
transform: translateY(0);
justify-self: center;
`;

// axis today element styled component

const StyledTodayAxisElement = styled.p`
    grid-column: ${dayCount};
    transform: translateY(0);
`