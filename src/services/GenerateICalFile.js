// import useSWR from "swr";
import ical, { ICalCalendarMethod } from 'ical-generator';

// Function to generate iCalendar files for each event
export default function GenerateICalFiles(date, title, iCalSlug, text) {
    // Fetch calendar data from API
    // const { data: entries, isLoading } = useSWR("/api");

    // Use map to generate iCalendar files for each event




    // Create a new iCalendar instance for the event
    const cal = ical();
    // A method is required for outlook to display event as an invitation
    cal.method(ICalCalendarMethod.REQUEST);
    const startDate = new Date(date);
    const endDate = new Date(date);
    // Create an iCalendar event
    cal.createEvent({
        start: startDate,
        end: endDate,
        allDay: true,
        summary: title,
        repeating: {
            freq: 'YEARLY',
        },
        url: `https://erinnerungsfutur.vercel.app/${iCalSlug}`,
        description: text
    });

    // Generate the iCalendar file content
    const iCalContent = cal.toString();
    // Set the appropriate HTTP headers
    const headers = {
        'Content-Type': 'text/calendar; charset=utf-8',
        'Content-Disposition': `attachment; filename=${iCalSlug}.ics`
    };

    const iCalFile =
        Object.entries(headers)
            .map(([key, value]) => `${key}: ${value}`)
            .join('\r\n') + '\r\n\r\n' + iCalContent;

    return iCalFile;

}