export default function GetFormattedDateHelper() {

const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0'); 
// Adding 1 to month because getMonth() returns zero-based index
const day = String(now.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;
return formattedDate
}

// gets current date in yyyy-mm-dd form