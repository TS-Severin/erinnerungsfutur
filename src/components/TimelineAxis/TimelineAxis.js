import GetCurrentDayOfYearHelper from "@/services/GetCurrentDayOfYearHelper";
// import GetTodayFullDateHelper from "@/services/GetTodayFullDateHelper";
import styled from "styled-components";



export default function TimelineAxis({ title, date }) {
    const currentPercentOfYear = GetCurrentDayOfYearHelper();
    return (

        <>
            <StyledTimelineAxis $currentPercentOfYear={currentPercentOfYear} />
        </>

    );
}


const StyledTimelineAxis = styled.span`
position: absolute;
left: ${(props) => props.$currentPercentOfYear}%;
width: 2px;
height: 24px;
overflow: visible;
background-color: black;`;