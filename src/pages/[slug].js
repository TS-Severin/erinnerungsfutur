import { useRouter } from "next/router"
import useSWR from "swr"
import GenerateICalFiles from "@/services/GenerateICalFile";
import Link from "next/link"
import Image from "next/image"
import GetPreviewText from "@/services/GetPreviewText";

export default function DateDetailsPage() {
  const router = useRouter()
  const { slug } = router.query
  const { data, error } = useSWR(`/api/${slug}`)
  if (error) return <div>Error fetching data</div>
  if (!data) return <div>Loading...</div>
  const { title, author, datestring, text, date, slug: iCalSlug } = data

  const createMarkup = (htmlString) => {
    return { __html: htmlString }
  };

  // get preview text for ical-file
  const previewText = GetPreviewText(text);
  const iCalText = `${text} ... Weiter lesen unter dem Link`;


  // ical download
  // define function that generates ical files
  const kalender = GenerateICalFiles(date, title, iCalSlug, iCalText)
  console.log("iCalFiles", kalender)
  const icalDownloadLink = `data:text/calendar;charset=utf-8,${encodeURIComponent(kalender)}`;
  console.log("Link", icalDownloadLink)

  // <Link href={icalDownloadLink} download="calendar.ics" className="absolute top-8 right-8">

  return (
    <>
      <div className="relative bg-white m-4 p-8 border-4 rounded-3xl shadow-xl">
        <h1 className="text-xl">{`${datestring}: ${title}`}</h1>
        <h2 className="italic text-right pt-8">{author}</h2>
        <div dangerouslySetInnerHTML={createMarkup(text)} />
        <Link href={icalDownloadLink} download="calendar.ics" className="absolute top-8 right-8">

          <Image src="/calenderFresh.png" alt="icon for ical data download" width={25} height={25} />

        </Link>
      </div>

    </>
  )
}
