import styles from "./Navigation.module.scss";
import GenerateICalFiles from "@/services/GenerateICalFile";


export default function Navigation() {
    const kalender = GenerateICalFiles()
    console.log("iCalFiles", kalender)
    return (
        <div className={styles.box}>
            <h1>ERINNERUNGSFUTUR</h1>
            <ul>
                <li><a href={`data:text/calendar;charset=utf-8,${encodeURIComponent(kalender)}`} download="calendar.ics">Download Calendar</a>
                </li>
                <li><a href="#">Kalenderimport</a></li>
                <li><a href="#">Bookmarks</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </div>
    );
}