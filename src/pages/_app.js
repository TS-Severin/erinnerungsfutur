import "@/styles/globals.scss";
import { SWRConfig } from "swr";
import Navigation from "@/components/Navigation/Navigation";
import { useEffect } from "react";
import { useState } from "react";
import useSWR from "swr";
import { Cormorant_Garamond, Bricolage_Grotesque } from 'next/font/google'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { NextUIProvider } from "@nextui-org/react";


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
  const [timelineZoom, setTimelineZoom] =
    useState(100);



  // INITIALIZING STATE FOR PREVIEW
  const [previewIsClicked, setPreviewIsClicked] =
    useState([]);
  // do it once when loading
  useEffect(() => {
    if (entries.length > 0) {
      const initialState = entries.map(entry => ({ id: entry._id, clicked: false }));
      setPreviewIsClicked(initialState);
    }
  }, [entries]);
  if (isLoading) return <div>Loading...</div>;

  const handleZoomChange = (value) => {
    setTimelineZoom(value);
  }

  // SETTING CLICK STATE

  //   set state to true when hovering
  const handlePreviewClick = (clickedId) => {
    setPreviewIsClicked(prevState =>
      prevState.map(entry => ({
        ...entry,
        clicked: entry.id === clickedId ? true : false
      }
      ))

    );
  };


  // timelineZoom={timelineZoom}
  return (
    <NextUIProvider>
      <div className={`${cormorant.variable}  ${bricolage.variable} `}>
        <SWRConfig value={{ fetcher }}>
          <UserProvider>


            <Navigation />
            <Component {...pageProps}
              handlePreviewClick={handlePreviewClick}
              previewIsClicked={previewIsClicked}
              entries={entries}
              handleZoomChange={handleZoomChange}
              timelineZoom={timelineZoom}
            />

          </UserProvider>
        </SWRConfig>
      </div>
    </NextUIProvider>
  );
}
