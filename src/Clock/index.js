import { useCurrentDate } from "../useCurrentDate";
import { Div } from "./styled";

const formatDate = (date) => date.toLocaleString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long",
});

export const Clock = () => {
    
    const date = useCurrentDate()

    return (
        <Div>
            Dzisiaj jest
            {" "}
            {formatDate(date)}
        </Div>
    )
};
