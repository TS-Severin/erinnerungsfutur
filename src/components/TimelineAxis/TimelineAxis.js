import GetCurrentDayOfYearHelper from "@/services/GetCurrentDayOfYearHelper";
// import GetTodayFullDateHelper from "@/services/GetTodayFullDateHelper";
import styled from "styled-components";



export default function TimelineAxis({ title, date, timelineZoom = { timelineZoom } }) {
    const currentPercentOfYear = GetCurrentDayOfYearHelper();
    return (

        <>
            <StyledTimelineAxis $currentPercentOfYear={currentPercentOfYear} $timelineZoom={timelineZoom} />
        </>

    );
}


const StyledTimelineAxis = styled.span`
position: absolute;
left: ${(props) => props.$currentPercentOfYear}%;
width: ${(props) => (props.$timelineZoom / 250 + 2)}px;
height: ${(props) => (props.$timelineZoom / 100 + 24)}px;
overflow: visible;
background-color: black;
z-index: 1000
`;