import GetDayOfYearHelper from "./GetDayOfYearHelper";
import GetFormattedDateHelper from "./GetFormattedDateHelper";

export default function GetCurrentDayOfYearHelper(){
const formattedDate = GetFormattedDateHelper();
const currentDayOfYear = GetDayOfYearHelper(formattedDate);
// console.log(currentDayOfYear);
return currentDayOfYear;
}

// current day of year in percent of the whole year