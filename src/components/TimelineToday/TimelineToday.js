import GetTodayFullDateHelper from "../../services/GetTodayFullDateHelper"
import GetFormattedDateHelper from "@/services/GetFormattedDateHelper";
import GetMonthDayDateHelper from "../../services/GetMonthDayDateHelper";
import GetCurrentDayOfYearHelper from "@/services/GetCurrentDayOfYearHelper";
import styled from "styled-components";

export default function TimelineToday({ entries, previewIsClicked, timelineZoom }) {

    // Function to find an entry in the array with today's date
    function findEntryWithTodayDate(entries) {
        // Get today's date in "mm-dd" format
        // get today's date in yyyy-mm-dd
        const today = GetFormattedDateHelper()
        // convert today's date to mm-dd => today
        const todayFormatted = GetMonthDayDateHelper(today);
        // console.log("heute :", today);
        // console.log("heute mm-dd: ", todayFormatted);
        // console.log(entries);

        // Iterate over entries and find the one with today's date
        for (const entry of entries) {
            const entryDateFormatted = GetMonthDayDateHelper(entry.date);
            // console.log("alle mm-dd daten: ", entryDateFormatted);
            if (entryDateFormatted === todayFormatted) {
                return entry; // Return the entry with today's date
            }
        }
        return null; // Return null if no entry found for today's date
    }

    const todayEntry = findEntryWithTodayDate(entries);
    // console.log("heutiges ereignis: ", todayEntry);

    // find date which is currently shown in Preview, the title of the date today only shows when it is not the same as shown in the preview by hovering

    const clickedEntryId = previewIsClicked.find(
        entryObj => entryObj.clicked === true);

    // console.log("beim hovern: ", clickedEntryId);


    const todayFullDate = GetTodayFullDateHelper();
    // gets the position of today on the X axis
    const currentPercentOfYear = GetCurrentDayOfYearHelper();
    return (
        <StyledTodayFullDate $currentPercentOfYear={currentPercentOfYear} $timelineZoom={timelineZoom}>
            <h3 className="font-bricolage">{todayFullDate}</h3>
            {todayEntry && (
                clickedEntryId === undefined || clickedEntryId.id !== todayEntry.id ? (
                    <p className="font-bricolage">{todayEntry.title}</p>
                ) : null
            )}


        </StyledTodayFullDate>
    );
}
// <p>{todayEntry && clickedEntryId && todayEntry.id !== clickedEntryId.id && todayEntry.title}</p>

const StyledTodayFullDate = styled.div`
display: flex;
flex-direction: column;
position: absolute;
left: ${(props) => props.$currentPercentOfYear}%;
overflow: visible;
transform: translateX(5px);
font-size: ${(props) => (props.$timelineZoom / 1000 + 0.8)}rem;
transition: all 0.3s ease;
`;