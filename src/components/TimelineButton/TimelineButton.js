import styled from "styled-components";

export default function TimelineButton() {
  return (
    <>
      <StyledTimelineButton></StyledTimelineButton>
    </>
  );
}

const StyledTimelineButton = styled.button`
  grid-column: 10;
  overflow: visible;
`;

// ${dayOfTheYear}
