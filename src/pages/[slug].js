import { useRouter } from "next/router"
import useSWR from "swr"
import ICalDownload from "@/components/ICalDownload/ICalDownload";
import { useUser } from '@auth0/nextjs-auth0/client';
import { useState } from "react";
import EntryForm from "@/components/EntryForm/EntryForm";


export default function DateDetailsPage({ handleTiptapText }) {
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
    if (confirm("Wirklich löschen?")) {
      const response = await fetch(`/api/${slug}`, {
        method: "DELETE",
      });
      if (response.ok) {
        await response.json();
        alert("Gelöscht!");
        router.push("/");
      } else {
        console.error(`Error: ${response.status}`);
      }
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
      alert("Bearbeitet!")
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
            <button className="font-bricolage mr-8 mb-8 p-4 rounded-3xl shadow-md hover:bg-fuchsia-300 hover:shadow-inner active:scale-75 transition ease-in-out" onClick={handleDelete}>Eintrag löschen</button>
            <button onClick={() => setIsEditMode(!isEditMode)} className="font-bricolage p-4 rounded-3xl shadow-md hover:bg-fuchsia-300 hover:shadow-inner active:scale-75 transition ease-in-out">{isEditMode ? "Schließen" : "Eintrag bearbeiten"}</button>
            {isEditMode && <EntryForm handleTiptapText={handleTiptapText} onHandleSubmit={handleEdit} entries={entries} update />}

          </>
        ) : null}
        <h1 className="font-bricolage font-extralight text-2xl">{`${datestring}:`}</h1>
        <h1 className="font-bricolage font-extralight pt-2 text-2xl">{title}</h1>
        <h2 className="italic font-cormorant pt-8">{author}</h2>
        <div className="font-cormorant pt-4" dangerouslySetInnerHTML={createMarkup(text)} />
        <div className="absolute top-8 right-8">
          <ICalDownload date={date} title={title} iCalSlug={iCalSlug} text={text} />
        </div>
      </div>

    </>
  )
}
