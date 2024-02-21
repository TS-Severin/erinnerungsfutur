export default function GetMonthDayDateHelper(originalDateString) {
    const dateParts = originalDateString.split("-"); // Split the string into parts
    const month = dateParts[1]; // Extract the month part
    const day = dateParts[2]; // Extract the day part
  
    return `${month}-${day}`; // Interpolated date string in "mm-dd" format
  }

  // interpolates a datestring yyyy-mm-dd to mm-dd