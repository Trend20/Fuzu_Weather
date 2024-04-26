import {FC, useEffect, useState} from "react";
import axios from "axios";
const baseUrl: any = process.env.REACT_APP_BASE_URL;

const Dashboard:FC = () => {
    const[weatherInfo, setWeatherInfo] = useState(null)
    const [language, setLanguage] = useState<string>("en");

    useEffect(() => {
        fetchWeatherInfo();
    }, []);

    const fetchWeatherInfo = async () => {
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
    return(
        <div>Dashboard</div>
    )
}

export default Dashboard;