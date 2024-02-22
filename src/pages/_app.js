import "@/styles/globals.css";
import { SWRConfig } from "swr";
import Navigation from "@/components/Navigation/Navigation";
import { useEffect } from "react";
import { useState } from "react";
import useSWR from "swr";


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

  //  toggle state when clicking / hovering
  const handlePreviewClick = (clickedId) => {
    setPreviewIsClicked(prevState =>
      prevState.map(entry => {
        if (entry.id === clickedId) {
          return { ...entry, clicked: !entry.clicked };
        } else {
          return { ...entry, clicked: false };
        }
      })
    );
  };

  //  console.log("status: ", previewIsClicked);

  return (
    <SWRConfig value={{ fetcher }}>
      <Navigation />
      <Component {...pageProps}
        handlePreviewClick={handlePreviewClick}
        previewIsClicked={previewIsClicked}
      />;
    </SWRConfig>
  );
}
