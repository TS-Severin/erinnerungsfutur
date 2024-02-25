import styled from "styled-components";
import GetDayOfYearHelper from "../../services/GetDayOfYearHelper";



export default function TimelineMonths() {
    const months = [
        { month: "jan", dateToBeShown: "2024-01-15" },
        { month: "feb", dateToBeShown: "2024-02-14" },
        { month: "mar", dateToBeShown: "2024-03-15" },
        { month: "apr", dateToBeShown: "2024-04-15" },
        { month: "mai", dateToBeShown: "2024-05-16" },
        { month: "juni", dateToBeShown: "2024-06-15" },
        { month: "juli", dateToBeShown: "2024-07-15" },
        { month: "aug", dateToBeShown: "2024-08-16" },
        { month: "sept", dateToBeShown: "2024-09-14" },
        { month: "okt", dateToBeShown: "2024-10-15" },
        { month: "nov", dateToBeShown: "2024-11-14" },
        { month: "dez", dateToBeShown: "2024-12-14" }
    ]

    const calculatePercentOfYear = (date) => {
        return GetDayOfYearHelper(date)
    };

    return (
        <>
            {months.map(month => {
                const percentOfYear = calculatePercentOfYear(month.dateToBeShown);
                return (
                    <StyledMonth key={month.month} $percentOfYear={percentOfYear}>
                        {month.month}
                    </StyledMonth>

                );
            })}

        </>
    );
}

const StyledMonth = styled.p`
position: absolute;
left: ${(props) => props.$percentOfYear}%;
transform: translateX(-50%);
text-transform: uppercase;
font-size: 0.6rem;
overflow: visible;
`;