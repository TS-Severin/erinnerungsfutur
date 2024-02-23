import styles from "./Navigation.module.scss";
import GenerateICalFiles from "@/services/GenerateICalFile";


export default function Navigation() {
    const kalender = GenerateICalFiles()
    console.log("iCalFiles", kalender)
    const downloadLink = `data:text/calendar;charset=utf-8,${encodeURIComponent(kalender)}`;
    console.log("Link", downloadLink)


    return (
        <div className={styles.box}>
            <a href={downloadLink} download="calendar.ics">Download Calendar</a>
            <h1>ERINNERUNGSFUTUR</h1>
            <ul>
                <li><a href="#">Kalenderimport</a></li>
                <li><a href="#">Bookmarks</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </div>
    );
}

{/* <a href={`data:text/calendar;charset=utf-8,${encodeURIComponent(kalender)}`} download="calendar.ics">Download Calendar</a> */ }