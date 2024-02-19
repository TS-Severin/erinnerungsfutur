import { useRouter } from "next/router";
import useSWR from "swr";

export default function DateDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;
  const { data, error } = useSWR(`/api/entries/${slug}`);
  if (error) return <div>Error fetching data</div>;
  if (!data) return <div>Loading...</div>;
  const {title, author, datestring, text } = data;

  return (
  <>
  <h1>{`${datestring}: ${title}`}</h1>
  <h2>{author}</h2>
  <p>{text}</p>
  </>
  )
}
