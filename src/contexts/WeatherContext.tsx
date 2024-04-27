import React, {createContext, FC, useEffect, useState} from "react";
import axios from "axios";
const baseUrl: any = process.env.REACT_APP_BASE_URL;
export const WeatherContext = createContext<any[]>([]);

interface Props {
    children: React.ReactNode;
}
export const WeatherProvider: FC<Props> = ({ children }) => {
    const[weatherInfo, setWeatherInfo] = useState<any[]>([])
    useEffect(() =>{
        const getWeatherInfo = async () =>{
            try {
                const response = await axios.get(`${baseUrl}`);
                console.log(response);
                setWeatherInfo(response.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }
        getWeatherInfo();
    },[])
    return(
        <WeatherContext.Provider value={[weatherInfo, setWeatherInfo]}>
            {children}
        </WeatherContext.Provider>
    )
}