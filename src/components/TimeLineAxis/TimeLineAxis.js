import GetCurrentDayOfYearHelper from "@/services/GetCurrentDayOfYearHelper";
import styled from "styled-components";
import TodayAxisElement from "../TodayAxisElement/TodayAxisElement";

const dayCount = GetCurrentDayOfYearHelper();

const StyledTimelineAxis = styled.span`
width: 1px;
height: 200px;
overflow: visible;
background-color: black;
grid-row: 1;
grid-column: ${dayCount};
transform: translateY(+50%);
`;


export default function TimelineAxis({title, date}) {
    return (
        <>
        <TodayAxisElement title={title} date={date} />
        <StyledTimelineAxis />
        </>
    );
}
