import Head from "next/head";
// import { Inter } from "next/font/google";
import Timeline from "@/components/Timeline/Timeline";
import Preview from "@/components/Preview/Preview";
import ZoomBar from "@/components/ZoomBar/ZoomBar";



export default function Home({ handlePreviewClick, previewIsClicked }) {


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
          <Preview previewIsClicked={previewIsClicked} />
          <ZoomBar />
          <Timeline
            handlePreviewClick={handlePreviewClick}
            previewIsClicked={previewIsClicked}

          />
        </div>
      </main>
    </>
  );
}

// .main {
//   display: flex;
//   flex - direction: column;
//   // justify-content: space-between;
//   align - items: center;
//   padding: 6rem;
//   min - height: 100vh;
// }
