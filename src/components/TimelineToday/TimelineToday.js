import GetTodayFullDateHelper from "../../services/GetTodayFullDateHelper"
import GetFormattedDateHelper from "@/services/GetFormattedDateHelper";
import GetMonthDayDateHelper from "../../services/GetMonthDayDateHelper";
import GetCurrentDayOfYearHelper from "@/services/GetCurrentDayOfYearHelper";
import styled from "styled-components";

export default function TimelineToday({ entries, previewIsClicked }) {

    // Function to find an entry in the array with today's date NEW FUNCTION
    function findEntryWithTodayDate(entries) {
        // Get today's date in "mm-dd" format
        const today = GetFormattedDateHelper()
        const todayFormatted = GetMonthDayDateHelper(today);

        // Iterate over entries and find the one with today's date
        for (const entry of entries) {
            const entryDateFormatted = GetMonthDayDateHelper(entry.date);
            if (entryDateFormatted === todayFormatted) {
                return entry; // Return the entry with today's date
            }
        }
        return null; // Return null if no entry found for today's date
    }

    const todayEntry = findEntryWithTodayDate(entries);

    // find date which is currently shown in Preview, the title of the date today only shows when it is not the same as shown in the preview by hovering

    const clickedEntryId = previewIsClicked.find(
        entryObj => entryObj.clicked === true
    );

    if (!clickedEntryId) {
        return
    }

    const todayFullDate = GetTodayFullDateHelper();
    // gets the position of today on the X axis
    const currentPercentOfYear = GetCurrentDayOfYearHelper();
    return (
        <StyledTodayFullDate $currentPercentOfYear={currentPercentOfYear}>
            <h3>{todayFullDate}</h3>
            <p>{todayEntry && todayEntry.id !== clickedEntryId.id && todayEntry.title}</p>
        </StyledTodayFullDate>
    );
}


const StyledTodayFullDate = styled.div`
display: flex;
flex-direction: column;
position: absolute;
left: ${(props) => props.$currentPercentOfYear}%;
overflow: visible;
transform: translateX(5px);
`;