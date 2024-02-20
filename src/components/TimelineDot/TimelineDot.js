import styled from "styled-components";
import GetDayOfYearHelper from "../../services/GetDayOfYearHelper";
import styles from "./TimelineDot.module.scss"
// import Image from "next/image";
// import pic from "../../../public/image.jpg"



export default function TimelineDot({ id, date, color, slug }) {
  const dayOfTheYear = GetDayOfYearHelper(date);
  
  
  return (
    <>
        <StyledTimelineDot key={id}
        dayoftheyear={dayOfTheYear}
        color={color} 
        href={`/${slug}`}>
        </StyledTimelineDot>
    </>
  );
}

const StyledTimelineDot = styled.a`
grid-column: ${(props) => props.dayoftheyear};
grid-row: 2;
overflow: visible;
transform: translateY(-60%);
height: 10px;
width: 10px;
background-color: red;
border-radius: 50%;
display: inline-block;

`;

