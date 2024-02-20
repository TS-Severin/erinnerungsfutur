import GetCurrentDayOfYearHelper from "@/services/GetCurrentDayOfYearHelper";
import styled from "styled-components";

const dayCount = GetCurrentDayOfYearHelper();

const StyledTimelineAxis = styled.span`
width: 1px;
height: 200px;
overflow: visible;
background-color: black;
grid-row: 1;
grid-column: ${dayCount};
transform: translateY(+50%);
border: 2px solid blue;
`;

const StyledTodayAxisElement = styled.p`
    grid-column: ${dayCount};
    color: blue;
    transform: translateY(-800%);
`



export default function TimelineAxis({title, date}) {
    return (
        
        <>
        <StyledTodayAxisElement>hello</StyledTodayAxisElement>
        <StyledTimelineAxis />
        </>
        
    );
}
