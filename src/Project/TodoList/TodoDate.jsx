import { useEffect, useState } from "react";
export const TodoDate=()=>{
    const [dateTimes,setDateTimes]=useState("11:11:11 APM");

    // const localDateTime=()=>{
    //     const now=new Date();
    //     const dateFormat=now.toDateString();
    //     const timeFormat=now.toLocaleTimeString();
    //     setDateTimes(`${dateFormat} - ${timeFormat}`);
    // }
    // setInterval(()=>{localDateTime()},1000);
    //****here we faced a problem that  setInterval always call localDAteTime function, therefore state variable dataTime continous store a new value, so here a memory problem. for this reason we use useEffect() function. go to below for code. 
    useEffect(()=>{
        const interval= setInterval(() => {
            const now=new Date();
            const dateFormat=now.toDateString();
            const timeFormat=now.toLocaleTimeString();
            setDateTimes(`${dateFormat} - ${timeFormat}`);
        },1000);
        return()=>clearInterval(interval);
    },[]);

    return (
        <div className="todo-time">{dateTimes}</div>
    ); 
}