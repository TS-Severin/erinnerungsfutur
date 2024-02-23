// import useSWR from "swr";
import ical, { ICalCalendarMethod } from 'ical-generator';

// Function to generate iCalendar files for each event
export default function GenerateICalFiles() {
    // Fetch calendar data from API
    // const { data: entries, isLoading } = useSWR("/api");

    // Use map to generate iCalendar files for each event




    // Create a new iCalendar instance for the event
    const cal = ical();
    // A method is required for outlook to display event as an invitation
    cal.method(ICalCalendarMethod.REQUEST);
    const startDate = new Date("2024-02-23");
    const endDate = new Date("2024-02-23");
    // Create an iCalendar event
    cal.createEvent({
        start: startDate,
        end: endDate,
        summary: "Erinnerungsfutur"
    });

    // Generate the iCalendar file content
    const iCalFile = cal.toString();
    // Set the appropriate HTTP headers
    const headers = {
        'Content-Type': 'text/calendar; charset=utf-8',
        'Content-Disposition': 'attachment; filename="calendar.ics"'
    };

    return { headers, iCalFile };

}