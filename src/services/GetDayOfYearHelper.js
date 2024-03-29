export default function GetDayOfYearHelper(dateString) {
  // Parse the date string to create a Date object
  const date = new Date(dateString);

  // Get the day of the year
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const percentOfYear = Math.floor(diff / oneDay) * 0.274;

  
  return percentOfYear;
}
