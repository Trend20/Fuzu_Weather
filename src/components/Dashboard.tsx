import {FC, useEffect, useState} from "react";
import axios from "axios";
import SwitchLang from "./SwitchLang";
import WeatherCard from "./WeatherCard";
import { CiCalendarDate } from "react-icons/ci";
const baseUrl: any = process.env.REACT_APP_BASE_URL;

const Dashboard:FC = () => {
    const[weatherInfo, setWeatherInfo] = useState<any>(null)
    const [language, setLanguage] = useState<string>("en");

    useEffect(() => {
        fetchWeatherInfo();
    }, []);

    const fetchWeatherInfo = async ():Promise<void> => {
        try {
            const response = await axios.get(`${baseUrl}`);
            console.log(response);
            setWeatherInfo(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    const handleLanguageChange = (selectedLanguage: string) => {
        setLanguage(selectedLanguage);
    };

    return (
        <div
            className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-indigo-500 text-white">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-md shadow-lg">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                        <SwitchLang handleSelectChange={handleLanguageChange} />
                        {/*<div className="text-sm font-medium">{weatherInfo.name}</div>*/}
                    </div>
                    <div className="flex items-center space-x-2">
                        <CiCalendarDate className="h-5 w-5"/>
                        <span className="text-sm font-medium"/>
                    </div>
                </div>
                {weatherInfo && <WeatherCard  info={weatherInfo} language={language} />}
            </div>
        </div>
    )
}

export default Dashboard;