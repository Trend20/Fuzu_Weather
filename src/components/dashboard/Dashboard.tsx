import {FC, useContext} from "react";
import SwitchLang from "../switchlang/SwitchLang";
import WeatherCard from "../weathercard/WeatherCard";
import { CiCalendarDate } from "react-icons/ci";
import {WeatherContext} from "../../contexts/WeatherContext";

const Dashboard:FC = () => {
    const[weatherInfo] = useContext(WeatherContext);
    return (
        <div
            className="flex flex-col min-h-screen items-center justify-center text-white">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-md shadow-lg">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                        <SwitchLang />
                    </div>
                    <div className="flex items-center space-x-2">
                        <CiCalendarDate className="h-5 w-5"/>
                        <span className="text-sm font-medium"/>
                    </div>
                </div>
                {weatherInfo && <WeatherCard />}
            </div>
        </div>
    )
}

export default Dashboard;