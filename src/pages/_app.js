import "@/styles/globals.css";
import { SWRConfig } from "swr";
import Navigation from "@/components/Navigation/Navigation";
import { useEffect } from "react";
import { useState } from "react";
import useSWR from "swr";
import { useRef } from "react";
import { Cormorant_Garamond, Bricolage_Grotesque, Comic_Neue } from 'next/font/google'
import { UserProvider } from '@auth0/nextjs-auth0/client';


const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-cormorant',
})

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bricolage',
})

const comic = Comic_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-comic',
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
  let timelineZoom = useRef(100);


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

  const handleZoomIncrease = () => {
    timelineZoom.current += 10;
    console.log("ZOOM: ", timelineZoom);
  }
  const handleZoomDecrease = () => {
    timelineZoom.current -= 10;
    console.log("ZOOM: ", timelineZoom);
  }


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
    <div className={`${cormorant.variable}  ${bricolage.variable} ${comic.variable} `}>
      <SWRConfig value={{ fetcher }}>
        <UserProvider>

          <Navigation />
          <Component {...pageProps}
            handlePreviewClick={handlePreviewClick}
            previewIsClicked={previewIsClicked}
            entries={entries}
            handleZoomIncrease={handleZoomIncrease}
            handleZoomDecrease={handleZoomDecrease}
          />

        </UserProvider>
      </SWRConfig>
    </div>
  );
}
