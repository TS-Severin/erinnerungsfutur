import "@/styles/globals.css";
import "../components/Timeline/Timeline.css";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }) {
  const fetcher = async (...args) => {
    const response = await fetch(...args);
    if (!response.ok) {
      throw new Error(`Request with ${JSON.stringify(args)} failed.`);
    }
    return response.json();
  };

  return (
    <SWRConfig value={{ fetcher }}>
      <Component {...pageProps} />;
    </SWRConfig>
  );
}
