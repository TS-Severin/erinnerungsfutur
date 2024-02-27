import { useRouter } from "next/router"
import useSWR from "swr"
import GenerateICalFiles from "@/services/GenerateICalFile";
import Link from "next/link"
import Image from "next/image"
import GetPreviewText from "@/services/GetPreviewText";
import ICalDownload from "@/components/ICalDownload/ICalDownload";
import { useUser } from '@auth0/nextjs-auth0/client';
import { useState } from "react";
import EntryForm from "@/components/EntryForm/EntryForm";


export default function DateDetailsPage() {
  const [isEditMode, setIsEditMode] = useState(false);
  const { user, error, isLoading } = useUser();
  const router = useRouter()
  const { slug } = router.query
  const { data: entries, error: swrError, mutate } = useSWR(slug ? `/api/${slug}` : null)
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;





  if (swrError) return <div>Error fetching data</div>
  if (!entries) return <div>Loading...</div>
  const { title, author, datestring, text, date, slug: iCalSlug } = entries;

  const createMarkup = (htmlString) => {
    return { __html: htmlString }
  };

  const handleDelete = async () => {
    const response = await fetch(`/api/${slug}`, {
      method: "DELETE",
    });
    if (response.ok) {
      await response.json();

      router.push("/");
    } else {
      console.error(`Error: ${response.status}`);
    }
  };

  const handleEdit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const response = await fetch(`/api/${slug}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      mutate();
      setIsEditMode(false);
      router.push("/");
    } else {
      console.error(`Error: ${response.status}`);
    }
  };

  return (
    <>
      <div className="relative bg-white m-4 p-8 border-4 rounded-3xl shadow-xl">
        {user ? (
          <>
            <button className="mr-6 font-bold" onClick={handleDelete}>Eintrag löschen</button>
            <button onClick={() => setIsEditMode(!isEditMode)} className="mr-6 font-bold">{isEditMode ? "Schließen" : "Eintrag bearbeiten"}</button>
            {isEditMode && <EntryForm onHandleSubmit={handleEdit} entries={entries} update />}

          </>
        ) : null}
        <h1 className="text-xl">{`${datestring}: ${title}`}</h1>
        <h2 className="italic text-right pt-8">{author}</h2>
        <div dangerouslySetInnerHTML={createMarkup(text)} />
        <div className="absolute top-8 right-8">
          <ICalDownload date={date} title={title} iCalSlug={iCalSlug} text={text} />
        </div>
      </div>

    </>
  )
}
