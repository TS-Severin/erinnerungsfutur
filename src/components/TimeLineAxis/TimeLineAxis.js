import GetCurrentDayOfYearHelper from "@/services/GetCurrentDayOfYearHelper";
import styled from "styled-components";
import { useEffect } from "react";

const dayCount = GetCurrentDayOfYearHelper();

export default function TimelineAxis() {


    return (
        <StyledTimelineAxis />
    );
}

const StyledTimelineAxis = styled.span`
width: 1px;
height: 200px;
overflow: visible;
background-color: black;
grid-row: 1;
grid-column: ${dayCount};
transform: translateY(+50%);
`;