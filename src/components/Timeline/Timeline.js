import TimelineDot from "../TimelineDot/TimelineDot";
import TimelineMonths from "../TimelineMonths/TimelineMonths";
import TimelineAxis from "../TimelineAxis/TimelineAxis";
import TimelineToday from "../TimelineToday/TimelineToday";
import styled from "styled-components";
import styles from "./Timeline.module.scss";
import useSWR from "swr";


const StyledTimelineContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
background-color: white;
height: 8rem;
`;

export default function Timeline({ handlePreviewClick, previewIsClicked }) {
  const { data: entries, isLoading } = useSWR("/api");

  //   if (error) return <div>Error fetching data</div>;
  if (isLoading) return <div>Loading...</div>;

  // className={styles.timelineContainer}

  return (
    <>
      <div className={styles.timelineWindowContainer}>
        <StyledTimelineContainer
        >
          <div className={styles.timelineTodayContainer}>
            <TimelineToday entries={entries} previewIsClicked={previewIsClicked} />
          </div>
          <div className={styles.timelineAxisContainer}>
            <TimelineAxis />
          </div>
          <span className={styles.timelineLine}>
          </span>
          <div className={styles.timelineDotContainer}>

            {entries &&
              entries.map(({ id, date, color, slug }) => (
                <TimelineDot key={id} date={date} color={color} slug={slug} id={id} handlePreviewClick={handlePreviewClick} />
              ))}

          </div>
          <div className={styles.timelineMonthContainer}><TimelineMonths /></div>
        </StyledTimelineContainer >
      </div>
    </>
  );
}




