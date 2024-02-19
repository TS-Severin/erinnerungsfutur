import styled from "styled-components";
import getDayOfYearHelper from "./GetDateOfYearHelper";
import Image from "next/image";
import pic from "../../../public/image.jpg"

export default function TimelineButton({ id, date, color, slug }) {
  const dayOfTheYear = getDayOfYearHelper(date);

  return (
    <>
        <StyledTimelineDot key={id}
        dayoftheyear={dayOfTheYear}
        color={color} 
        href={`/${slug}`}><Image
         src={pic}
         width={15}
         height={15}
         alt="Picture of event" />
        </StyledTimelineDot>
    </>
  );
}

const StyledTimelineDot = styled.a`
  grid-column: ${(props) => props.dayoftheyear};
  overflow: visible;
  border: 1px solid red;
  transform: translateY(-800%);
`;

