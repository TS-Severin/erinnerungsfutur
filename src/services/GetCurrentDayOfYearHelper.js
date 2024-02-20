import GetDayOfYearHelper from "./GetDayOfYearHelper";
import GetFormattedDateHelper from "./GetFormattedDateHelper";

export default function GetCurrentDayOfYearHelper(){
const formattedDate = GetFormattedDateHelper();
console.log(formattedDate); // Output: "yyyy-mm-dd"
const currentDayOfYear = GetDayOfYearHelper(formattedDate);
// console.log(currentDayOfYear);
return currentDayOfYear;
}