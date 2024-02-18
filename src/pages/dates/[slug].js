import { useRouter } from "next/router";
import useSWR from "swr";

export default function DateDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;
  const { data: date, error } = useSWR(`/api/dates/${slug}`);
  if (error) return <div>Error fetching data</div>;
  if (!date) return <div>Loading...</div>;
  return (
    <>
      <h1>Details Page</h1>
    </>
  );
}
