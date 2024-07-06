import TimelineDot from "../TimelineDot/TimelineDot";
import TimelineMonths from "../TimelineMonths/TimelineMonths";
import TimelineAxis from "../TimelineAxis/TimelineAxis";
import TimelineToday from "../TimelineToday/TimelineToday";
import styled from "styled-components";
import useSWR from "swr";
import { useState, useEffect } from 'react';



export default function Timeline({ handlePreviewClick, previewIsClicked, timelineZoom }) {
  const { data: entries, isLoading } = useSWR("/api");


  // turns on overflow-visibility of dots when flying in and turns on overflow-x-scroll afterwards

  const [overflowVisible, setOverflowVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setOverflowVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  //   if (error) return <div>Error fetching data</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div
        className={`w-full overflow-x-${overflowVisible ? 'visible' : 'scroll'} bg-white border-4 py-8`}
      >

        <div style={{ width: `${timelineZoom}%` }} className="flex flex-col bg-white h-32"
        >


          <div
            className="relative top-[8%] w-full"
          >
            <TimelineToday entries={entries} previewIsClicked={previewIsClicked} timelineZoom={timelineZoom} />
          </div>



          <div className="relative top-[51%] max-sm:top-[54%] w-full">
            <TimelineAxis timelineZoom={timelineZoom} />
          </div>


          <StyledTimelineLine $timelineZoom={timelineZoom} />



          <div
            className="relative  w-full align-middle justify-center top-[57%]"

          >



            {entries &&
              entries.map(({ _id: id, date, color, slug }) => (
                <TimelineDot key={id} date={date} color={color} slug={slug} id={id} handlePreviewClick={handlePreviewClick} timelineZoom={timelineZoom} />
              ))}

          </div>


          <div
            className="w-full relative top-[70%] align-middle justify-center">

            <TimelineMonths timelineZoom={timelineZoom} />

          </div>
        </div >
      </div>
    </>
  );
}

const StyledTimelineLine = styled.span`
  width: 100%;
  height: ${(props) => (props.$timelineZoom / 250 + 1)}px;
  background-color: red;
  position: relative;
  top: ${(props) => (props.$timelineZoom / 200 + 60)}%;;
  
  
  @media (max-width: 640px) {
    width: 100%;
  height: ${(props) => (props.$timelineZoom / 250 + 1)}px;
  background-color: red;
  position: relative;
  top: ${(props) => (props.$timelineZoom / 200 + 63)}%;;
  transition: all 0.3s ease;
  }
`
