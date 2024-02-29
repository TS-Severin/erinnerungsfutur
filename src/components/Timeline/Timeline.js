import TimelineDot from "../TimelineDot/TimelineDot";
import TimelineMonths from "../TimelineMonths/TimelineMonths";
import TimelineAxis from "../TimelineAxis/TimelineAxis";
import TimelineToday from "../TimelineToday/TimelineToday";
import styled from "styled-components";
import styles from "./Timeline.module.scss";
import useSWR from "swr";




export default function Timeline({ handlePreviewClick, previewIsClicked, timelineZoom }) {
  const { data: entries, isLoading } = useSWR("/api");
  //   if (error) return <div>Error fetching data</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className={styles.timelineWindowContainer}>
        <div style={{ width: `${timelineZoom}%` }} className="flex flex-col bg-white h-32"
        >
          <div className={styles.timelineTodayContainer}>
            <TimelineToday entries={entries} previewIsClicked={previewIsClicked} timelineZoom={timelineZoom} />
          </div>
          <div className="relative top-[51%] w-full">
            <TimelineAxis timelineZoom={timelineZoom} />
          </div>
          <StyledTimelineLine $timelineZoom={timelineZoom} />
          <div className={styles.timelineDotContainer}>

            {entries &&
              entries.map(({ id, date, color, slug }) => (
                <TimelineDot key={id} date={date} color={color} slug={slug} id={id} handlePreviewClick={handlePreviewClick} timelineZoom={timelineZoom} />
              ))}

          </div>
          <div className={styles.timelineMonthContainer}><TimelineMonths timelineZoom={timelineZoom} /></div>
        </div >
      </div>
    </>
  );
}

const StyledTimelineLine = styled.span`
  width: 100%;
  height: ${(props) => (props.$timelineZoom / 250 + 1)}px;
  background-color: grey;
  position: relative;
  top: ${(props) => (props.$timelineZoom / 200 + 60)}%;;
`