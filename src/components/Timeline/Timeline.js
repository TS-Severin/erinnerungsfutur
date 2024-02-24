import TimelineDot from "../TimelineDot/TimelineDot";
import TimelineMonths from "../TimelineMonths/TimelineMonths";
import TimelineAxis from "../TimelineAxis/TimelineAxis";
import TimelineToday from "../TimelineToday/TimelineToday";
import TimelinePreview from "../TimelinePreview/TimelinePreview";
import styles from "./Timeline.module.scss";
import useSWR from "swr";


export default function Timeline({ handlePreviewClick, previewIsClicked }) {
  const { data: entries, isLoading } = useSWR("/api");

  //   if (error) return <div>Error fetching data</div>;
  if (isLoading) return <div>Loading...</div>;


  return (
    <>

      <div className="flex flex-col bg-white w-full p-8 h-44 border-4 rounded-b-3xl shadow-xl">
        <div className={styles.timelineTodayContainer}>
          <TimelineToday entries={entries} previewIsClicked={previewIsClicked} />
        </div>
        <div className={styles.timelineAxisContainer}>
          <TimelineAxis />
        </div>
        <span className={styles.timelineLine}>
        </span>
        <div className="flex w-full align-middle justify-center relative top-20">

          {entries &&
            entries.map(({ id, date, color, slug }) => (
              <TimelineDot key={id} date={date} color={color} slug={slug} id={id} handlePreviewClick={handlePreviewClick} />
            ))}

        </div>
        <div className={styles.timelineMonthContainer}><TimelineMonths /></div>
      </div>

    </>
  );
}
