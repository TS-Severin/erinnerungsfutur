import TimelineDot from "../TimelineDot/TimelineDot";
import TimelineMonths from "../TimelineMonths/TimelineMonths";
import TimelineAxis from "../TimelineAxis/TimelineAxis";
import styles from "./Timeline.module.scss";
import useSWR from "swr";

export default function Timeline() {
  const { data: entries, isLoading } = useSWR("/api");

  //   if (error) return <div>Error fetching data</div>;
    if (isLoading) return <div>Loading...</div>;

  console.log("dates in timeline: ", entries);

  return (
    <div className={styles.timelineGridContainer}>
      <TimelineAxis />
      {entries &&
        entries.map(({ id, date, color, slug }) => (
          <TimelineDot key={id} date={date} color={color} slug={slug} />
        ))}
        <TimelineMonths />
    </div>
  );
}
