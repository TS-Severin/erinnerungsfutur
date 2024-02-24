// import styles from "./Navigation.module.scss";
import GenerateICalFiles from "@/services/GenerateICalFile";


export default function Navigation() {
    const kalender = GenerateICalFiles()
    console.log("iCalFiles", kalender)
    const downloadLink = `data:text/calendar;charset=utf-8,${encodeURIComponent(kalender)}`;
    console.log("Link", downloadLink)

    // <a href={downloadLink} download="calendar.ics">Download Calendar</a>

    return (
        <div className="flex justify-between mt-4 ml-4 mr-4 p-4 bg-white border-4 rounded-3xl shadow-xl">

            <h1>ERINNERUNGSFUTUR</h1>
            <ul className="flex">
                <li className="mr-2"><a href="#">Kalenderimport</a></li>
                <li className="mr-2"><a href="#">Bookmarks</a></li>
                <li className="mr-2"><a href="#">About</a></li>
            </ul>
        </div>
    );
}