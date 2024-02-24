import { useRouter } from "next/router"
import useSWR from "swr"
import Link from "next/link"
import Image from "next/image"

export default function DateDetailsPage() {
  const router = useRouter()
  const { slug } = router.query
  const { data, error } = useSWR(`/api/${slug}`)
  if (error) return <div>Error fetching data</div>
  if (!data) return <div>Loading...</div>
  const { title, author, datestring, text } = data

  const createMarkup = (htmlString) => {
    return { __html: htmlString }
  };

  return (
    <>
      <div className="relative bg-white h-64 m-4 p-8 border-4 rounded-3xl shadow-xl">
        <h1 className="text-xl">{`${datestring}: ${title}`}</h1>
        <h2 className="italic text-right pt-8">{author}</h2>
        <div dangerouslySetInnerHTML={createMarkup(text)} />
        <Link href="/destination-page" className="absolute top-8 right-8">

          <Image src="/calenderFresh.png" alt="icon for ical data download" width={25} height={25} />

        </Link>
      </div>

    </>
  )
}
