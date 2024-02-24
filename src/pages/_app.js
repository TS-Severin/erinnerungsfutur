import "@/styles/globals.css";
import { SWRConfig } from "swr";
import Navigation from "@/components/Navigation/Navigation";
import { useEffect } from "react";
import { useState } from "react";
import useSWR from "swr";
import localFont from "next/font/local";

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
