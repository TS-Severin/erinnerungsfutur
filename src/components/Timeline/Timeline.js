import TimelineDot from "../TimelineDot/TimelineDot";
import TimelineMonths from "../TimelineMonths/TimelineMonths";
import styles from "./Timeline.module.scss";
import useSWR from "swr";

export default function Timeline() {
  const { data: entries } = useSWR("/api");

  //   if (error) return <div>Error fetching data</div>;
  //   if (!dates) return <div>Loading...</div>;

  console.log("dates in timeline: ", entries);

  return (
    <div className={styles.timelineGridContainer}>
      {entries &&
        entries.map(({ id, date, color, slug }) => (
          <TimelineDot key={id} date={date} color={color} slug={slug} />
        ))}
        <TimelineMonths />
    </div>
  );
}
