import GetTodayFullDateHelper from "../../services/GetTodayFullDateHelper"
import GetFormattedDateHelper from "@/services/GetFormattedDateHelper";
import GetMonthDayDateHelper from "../../services/GetMonthDayDateHelper";
import GetCurrentDayOfYearHelper from "@/services/GetCurrentDayOfYearHelper";
import styled from "styled-components";


export default function TimelineToday({entries}) {
    console.log("entries in today", entries);
    // const today = GetTodayFullDateHelper();
    // const todayFormatted = GetFormattedDateHelper();
    // console.log("heute formatted: ", todayFormatted);
    // const { entriesArray } = entries;

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
console.log(todayEntry);

  const todayFullDate = GetTodayFullDateHelper();
// gets the position of today on the X axis
  const currentPercentOfYear = GetCurrentDayOfYearHelper();
    return (
        <StyledTodayFullDate $currentPercentOfYear={currentPercentOfYear}>
        <h3>{todayFullDate}</h3>
        <p>{todayEntry.title}</p>
        </StyledTodayFullDate>
    );
}


const StyledTodayFullDate = styled.div`
display: flex;
flex-direction: column;
position: absolute;
top: 33%;
left: ${(props) => props.$currentPercentOfYear}%;
overflow: visible;
`;