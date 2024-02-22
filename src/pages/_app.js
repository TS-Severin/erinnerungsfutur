import "@/styles/globals.css";
import { SWRConfig } from "swr";
import Navigation from "@/components/Navigation/Navigation";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const fetcher = async (...args) => {
    const response = await fetch(...args);
    if (!response.ok) {
      throw new Error(`Request with ${JSON.stringify(args)} failed.`);
    }
    return response.json();
  };

// INITIALIZING STATE

  // const [previewIsHovered, setPreviewIsHovered] = useState(false);
  // const [previewIsClicked, setPreviewIsClicked] = 
  // useLocalStorageState(
  //   "previewIsClicked",
  //   {
  //     defaultValue: [false],
  //   }
  // );

  return (
    <SWRConfig value={{ fetcher }}>
      <Navigation/>
      <Component {...pageProps} 
      // previewIsHovered={previewIsHovered}
      // previewIsClicked={previewIsClicked}
      // setPreviewIsHovered={setPreviewIsHovered}
      // setPreviewIsClicked={setPreviewIsClicked}
      />;
    </SWRConfig>
  );
}
