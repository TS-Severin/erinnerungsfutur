import styles from "./Navigation.module.scss";

export default function Navigation() {

    return (
<div className={styles.box}>
    <h1>ERINNERUNGSFUTUR</h1>
      <ul>
        <li><a href="#">Kalenderimport</a></li>
        <li><a href="#">Bookmarks</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </div>
    );
}