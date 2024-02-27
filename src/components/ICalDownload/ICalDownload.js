import GetPreviewText from "@/services/GetPreviewText";
import GenerateICalFiles from "@/services/GenerateICalFile";
import Link from "next/link";
import Image from "next/image";

export default function ICalDownload({ date, title, iCalSlug, text }) {

    // ICAL LOGIC
    // get preview text for ical-file
    const previewText = GetPreviewText(text);
    const iCalText = `${text} ... Weiter lesen unter dem Link`;
    // ical download
    // define function that generates ical files
    const kalender = GenerateICalFiles(date, title, iCalSlug, iCalText)
    // console.log("iCalFiles", kalender)
    const icalDownloadLink = `data:text/calendar;charset=utf-8,${encodeURIComponent(kalender)}`;
    // console.log("Link", icalDownloadLink)

    return (
        <>
            <Link href={icalDownloadLink} download={`${iCalSlug}.ics`}>

                <Image src="/calenderFresh.png" alt="icon for ical data download" width={25} height={25} />

            </Link>
        </>

    );

    // className="absolute top-8 right-8"



}