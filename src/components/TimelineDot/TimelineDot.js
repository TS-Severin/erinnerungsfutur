import styled from "styled-components";
import GetDayOfYearHelper from "../../services/GetDayOfYearHelper";


export default function TimelineDot({ id, date, color, slug }) {
  const positionInYear = GetDayOfYearHelper(date);
  console.log("Prozent im Jahr: ", positionInYear)
  
  return (
    <>
        <StyledTimelineDot key={id}
        $positionInYear={positionInYear}
        color={color} 
        href={`/${slug}`}>
        </StyledTimelineDot>
    </>
  );
}

// dot styled component
// grid-column: ${(props) => props.$positionInYear};
// transform: translateX(${(props) => props.$positionInYear});
const StyledTimelineDot = styled.a`
transform: translateX(500%);
overflow: visible;
height: 8px;
width: 8px;
background-color: red;
border-radius: 50%;
display: inline-block;
justify-self: center;
`;