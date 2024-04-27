import {IoCloudy} from "react-icons/io5";
import {FC} from "react";

interface WeatherItemProps {
    item: any
}

const WeatherItem:FC<WeatherItemProps> = ({item}) =>{
    return (
        <div className="flex items-center space-x-4 flex-col">
            <span>
                <IoCloudy className="h-12 w-12"/>
                <p className="text-2xl font-medium">{item.main}</p>
            </span>
            <p className="text-sm font-medium">{item.description}</p>
        </div>
    )
}

export default WeatherItem;