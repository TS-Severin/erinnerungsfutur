import styled from "styled-components";
import GetDayOfYearHelper from "../../services/GetDayOfYearHelper";
import styles from "./TimelineDot.module.scss"


export default function TimelineDot({ id, date, color, slug }) {
  const dayOfTheYear = GetDayOfYearHelper(date);
  
  return (
    <>
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