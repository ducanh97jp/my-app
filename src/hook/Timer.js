import { useState, useEffect } from "react";

function Timer () {
    let [time, setTime] = useState(10);

    useEffect (() => {
        const times= setTimeout(() =>{
            setTime(time - 1)
        },1000)
        if (time < 0) {
            const stopTime =() => {
                clearTimeout(times)
            }
            stopTime();
            alert("Time's up");

        }
        
    })

    return (
        <div>Count down from {time}</div>
    )
}

export default Timer;