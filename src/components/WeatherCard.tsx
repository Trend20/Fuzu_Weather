import {FC} from "react";
import { IoMdSunny } from "react-icons/io";
import { FaWind } from "react-icons/fa";
import { FaThermometerEmpty } from "react-icons/fa";
import { FaCloudShowersHeavy } from "react-icons/fa";

interface WeatherCardProps {
    info:any;
    language: string;
}
const WeatherCard:FC<WeatherCardProps> = ({info, language}) => {
    return (
        <div className="flex flex-col items-center space-y-4">
            <div className="text-8xl font-bold">{info.main.temp}°C</div>
            <div className="flex items-center space-x-4">
                <IoMdSunny className="h-12 w-12"/>
                <div className="text-2xl font-medium">Sunny</div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm font-medium">
                <div className="flex items-center space-x-2">
                    <FaWind className="h-5 w-5"/>
                    <span>{info.wind.speed} km/h</span>
                </div>
                <div className="flex items-center space-x-2">
                    <FaThermometerEmpty className="h-5 w-5"/>
                    <span>{info.main.temp}%</span>
                </div>
                <div className="flex items-center space-x-2">
                    <FaCloudShowersHeavy className="h-5 w-5"/>
                    <span>{info.clouds.all}%</span>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;