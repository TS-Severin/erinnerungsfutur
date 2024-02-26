import "@/styles/globals.css";
import { SWRConfig } from "swr";
import Navigation from "@/components/Navigation/Navigation";
import { useEffect } from "react";
import { useState } from "react";
import useSWR from "swr";
import localFont from "next/font/local";
import { useRef } from "react";

const cormorant = localFont({
  src: [
    {
      path: "../../public/fonts/CormorantGaramond/CormorantGaramond-Regular.ttf",
      weight: '400'
    }
  ],
  variable: '--font-cormorant'
})

export default function App({ Component, pageProps }) {
  const fetcher = async (...args) => {
    const response = await fetch(...args);
    if (!response.ok) {
      throw new Error(`Request with ${JSON.stringify(args)} failed.`);
    }
    return response.json();
  };


  const { data: entries = [], isLoading } = useSWR("/api");


  // INITIALIZING STATE FOR ZOOM
  // const [timelineZoom, setTimelineZoom] =
  //  useState(100);

  // INITIALIZING REF FOR ZOOM
  const timelineZoom = useRef(100);


  // INITIALIZING STATE FOR PREVIEW
  const [previewIsClicked, setPreviewIsClicked] =
    useState([]);
  // do it once when loading
  useEffect(() => {
    if (entries.length > 0) {
      const initialState = entries.map(entry => ({ id: entry.id, clicked: false }));
      setPreviewIsClicked(initialState);
    }
  }, [entries]);
  if (isLoading) return <div>Loading...</div>;

  // SETTING REF FOR ZOOM
  // console.log("ZOOM: ", timelineZoom);

  // SETTING ZOOM STATE
  // const handleZoomIncrease = () => {
  //   setTimelineZoom(prevZoom => prevZoom + 10);
  // }
  // const handleZoomDecrease = () => {
  //   setTimelineZoom(prevZoom => prevZoom - 10);
  // }


  // SETTING CLICK STATE

  //   set state to true when hovering
  const handlePreviewClick = (clickedId) => {
    setPreviewIsClicked(prevState =>
      prevState.map(entry => ({
        ...entry,
        clicked: entry.id === clickedId ? true : false
      }))
    );
  };


  // timelineZoom={timelineZoom}
  return (
    <div className={`${cormorant.variable}`}>
      <SWRConfig value={{ fetcher }}>
        <Navigation />
        <Component {...pageProps}
          handlePreviewClick={handlePreviewClick}
          previewIsClicked={previewIsClicked}
        />;
      </SWRConfig>
    </div>
  );
}
