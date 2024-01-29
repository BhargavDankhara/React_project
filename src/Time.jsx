import React, { useState, useEffect } from 'react';


const Time = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [isPaused, setIsPaused] = useState(true);

    useEffect(() => {
        let interval;

        if (!isPaused) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => {
                    const newSeconds = (prevSeconds + 1) % 60;
                    setMinutes((prevMinutes) => {
                        const newMinutes = (prevMinutes + Math.floor((prevSeconds + 1) / 60)) % 60;
                        setHours((prevHours) => prevHours + Math.floor(newMinutes / 60));
                        return newMinutes;
                    });
                    return newSeconds;
                });
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isPaused]);

    const handleStartPause = () => {
        setIsPaused((prevIsPaused) => !prevIsPaused);
    };

    const handleReset = () => {
        setSeconds(0);
        setMinutes(0);
        setHours(0);
        setIsPaused(true);
    };
    return (
        <>
            <section className="count">
                <div className="container">
                    <center className="pt-5 timer">
                        <div className="t-bord">
                            <h1 className="stop">STOP WATCH</h1>
                            <div className="clock mb-3 fs-3">{`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</div>
                            <button className=" t-btn btn btn-outline-success fs-5" onClick={handleStartPause}>{isPaused ? 'Start' : 'Pause'}</button>
                            <button className=" t-btn btn btn-outline-danger ms-3 fs-5" onClick={handleReset}>Reset</button>
                        </div>
                    </center>
                </div>
            </section>
        </>
    );
};

export default Time;