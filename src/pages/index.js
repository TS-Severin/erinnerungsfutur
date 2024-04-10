import Head from "next/head";
import Timeline from "@/components/Timeline/Timeline";
import Preview from "@/components/Preview/Preview";
import ZoomBar from "@/components/ZoomBar/ZoomBar";
import { useUser } from '@auth0/nextjs-auth0/client';
import AdminBar from "@/components/AdminBar/AdminBar";

export default function Home({ handlePreviewClick, previewIsClicked, entries, handleZoomChange, timelineZoom, handleTiptapText }) {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Head>
        <title>erinnerungsfutur</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div className="mx-4">
          {user ? (
            <AdminBar entries={entries} handleTiptapText={handleTiptapText} />
          ) : null}
          <Preview previewIsClicked={previewIsClicked} />

          <Timeline
            handlePreviewClick={handlePreviewClick}
            previewIsClicked={previewIsClicked}
            timelineZoom={timelineZoom}

          />
          <ZoomBar handleZoomChange={handleZoomChange} />
        </div>
      </main>
    </>
  );
}
