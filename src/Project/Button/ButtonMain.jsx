import "./ButtonStyle.css";
import {useState} from "react";
import { IoIosSwitch } from "react-icons/io";

export const ButtonMain=()=>{
    const [isOn,setIsOn]=useState(false);
    const handleToggleSwitch=()=>{
        setIsOn(!isOn);
    }

    return (
        <section className="buttonMain" onClick={handleToggleSwitch}>
    
            <div className={`buttonMain__container ${isOn ? "bgOn" : "bg"}`}>
                
                <div className={`buttonMain__button ${isOn ? "on" : "off"}`}>
                    <span>{isOn ? "ON" : "OFF"}</span>
                </div>
            </div>
        </section>
    );
}