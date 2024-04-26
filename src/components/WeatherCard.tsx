import {FC} from "react";

const WeatherCard: FC = ({info, language}: any) => {
    return(
        <div>
            <h2>{info.location}</h2>
            <p>{info.temperature}</p>
        </div>
    )
}

export default WeatherCard;