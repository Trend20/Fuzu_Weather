import {FC, useContext} from "react";
import { FaWind, FaThermometerEmpty } from "react-icons/fa";
import {WeatherContext} from "../../contexts/WeatherContext";
import WeatherItem from "../weatheritem/WeatherItem";
import {IoCloudy} from "react-icons/io5";

const WeatherCard:FC = () => {
    const [weatherInfo] = useContext(WeatherContext);
    if (!weatherInfo || Object.keys(weatherInfo).length === 0) {
        return <div className="loader">Loading...</div>;
    }
    const {main, wind, clouds} = weatherInfo;
    return (
        <div className="flex flex-col items-center space-y-4">
            <h3 className="text-xl font-semibold">{weatherInfo.name}, {weatherInfo.sys.country}</h3>
            <div className="text-8xl font-bold">{main.temp}°C</div>
            <div className="flex justify-center items-center py-4">
                {
                    weatherInfo.weather.map((item:any) =>(
                        <WeatherItem key={item.id} item={item} />
                    ))
                }
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm font-medium">
                <div className="flex items-center space-x-2">
                    <FaWind className="h-5 w-5"/>
                    <span>{wind.speed} km/h</span>
                </div>
                <div className="flex items-center space-x-2">
                    <FaThermometerEmpty className="h-5 w-5"/>
                    <span>{main.temp}%</span>
                </div>
                <div className="flex items-center space-x-2">
                    <IoCloudy className="h-5 w-5"/>
                    <span>{clouds.all}%</span>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;