import styled from "styled-components";
import getDayOfYearHelper from "./GetDateOfYearHelper";
import Link from "next/link";

export default function TimelineButton({ id, date, color, slug }) {
  const dayOfTheYear = getDayOfYearHelper(date);

  return (
    <>
      <StyledTimelineButton
        key={id}
        gridcolumn={dayOfTheYear}
        backgroundcolor={color}
      >
        <Link href={`/dates/${slug}`}>o</Link>
      </StyledTimelineButton>
    </>
  );
}

const StyledTimelineButton = styled.button`
  grid-column: ${(props) => props.gridcolumn};
  overflow: visible;
  border: 1px solid black;
  border-radius: 50px;
  background-color: ${(props) => props.backgroundcolor};
`;
