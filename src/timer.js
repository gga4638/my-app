import React, { useEffect, useState } from "react";

export default function Timer() {
    const [seconds, setSeconds] = useState(0);

    const tick = () => {
        setSeconds(seconds + 1);
    }
    
    useEffect(() => {
        const timer = setInterval(() => tick(), 1000);

        return () => {
            clearInterval(timer);
        }
    },[seconds]);

    return (
        <div>
            Seconds: {seconds}
        </div>
    );
}