import { useRouter } from "next/router"
import useSWR from "swr"
import GenerateICalFiles from "@/services/GenerateICalFile";
import Link from "next/link"
import Image from "next/image"
import GetPreviewText from "@/services/GetPreviewText";
import ICalDownload from "@/components/ICalDownload/ICalDownload";

export default function DateDetailsPage() {
  const router = useRouter()
  const { slug } = router.query
  const { data: entries, error } = useSWR(`/api/${slug}`)
  if (error) return <div>Error fetching data</div>
  if (!entries) return <div>Loading...</div>
  const { title, author, datestring, text, date, slug: iCalSlug } = entries;

  const createMarkup = (htmlString) => {
    return { __html: htmlString }
  };


  return (
    <>
      <div className="relative bg-white m-4 p-8 border-4 rounded-3xl shadow-xl">
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
