import {FC} from "react";
const SwitchLang:FC = ({onChange}:any) => {
    return(
        <div>
            <select onChange={(e) => onChange(e.target.value)}>
                <option value="en">English</option>
                <option value="fr">French</option>
            </select>
        </div>
    )
}

export default SwitchLang;