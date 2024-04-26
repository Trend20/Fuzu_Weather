import {FC} from "react";

interface WeatherCardProps {
    info:any;
    language: string;
}

const WeatherCard:FC<WeatherCardProps> = ({info, language}) => {
    return(
        <div>
            <h2>{info.name}</h2>
            <p>{info.temperature}</p>
        </div>
    )
}

export default WeatherCard;