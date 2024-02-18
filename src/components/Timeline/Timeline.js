import TimelineDot from "../TimelineDot/TimelineDot";
import useSWR from "swr";

export default function Timeline() {
  const { data: dates } = useSWR("/api/dates");

  //   if (error) return <div>Error fetching data</div>;
  //   if (!dates) return <div>Loading...</div>;

  console.log("dates: ", dates);

  return (
    <div className="timeline-grid-container">
      {dates &&
        dates.map(({ id, date, color, slug }) => (
          <TimelineDot key={id} date={date} color={color} slug={slug} />
        ))}
    </div>
  );
}
