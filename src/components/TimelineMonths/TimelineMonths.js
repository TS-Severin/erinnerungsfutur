import styles from "./TimelineMonths.module.scss";

export default function TimelineMonths() {
    return (
        <>
<p className={`${styles.month} ${styles.jan}`}>jan</p>
<p className={`${styles.month} ${styles.feb}`}>feb</p>
<p className={`${styles.month} ${styles.mar}`}>mar</p>
<p className={`${styles.month} ${styles.apr}`}>apr</p>
<p className={`${styles.month} ${styles.mai}`}>mai</p>
<p className={`${styles.month} ${styles.juni}`}>juni</p>
<p className={`${styles.month} ${styles.juli}`}>juli</p>
<p className={`${styles.month} ${styles.aug}`}>aug</p>
<p className={`${styles.month} ${styles.sept}`}>sept</p>
<p className={`${styles.month} ${styles.nov}`}>nov</p>
<p className={`${styles.month} ${styles.dez}`}>dez</p>
</>
    );
}