import {FC} from "react";
import {FaCloudShowersHeavy, FaWind} from "react-icons/fa";
import {IoCloudy} from "react-icons/io5";

interface WeatherItemProps {
    item: any
}

const WeatherItem:FC<WeatherItemProps> = ({item}) =>{
    return (
        <div className="flex items-center space-x-4 flex-col">
            <span className='flex items-center space-x-3'>
                {item.main === "Clouds" ? <IoCloudy className="h-12 w-12"/> : item.main === "Rain" ? <FaCloudShowersHeavy className="h-12 w-12"/> : <FaWind className="h-12 w-12"/>}
                <p className="text-2xl font-medium">
                    {item.main}
                </p>
            </span>
            <p className="text-lg text-whiten font-medium capitalize">
                {item.description}
            </p>
        </div>
    )
}

export default WeatherItem;