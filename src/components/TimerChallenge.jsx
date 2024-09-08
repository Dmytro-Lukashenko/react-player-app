import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

const TimerChallange = ({ title, targetTime }) => {
    const timer = useRef();
    const dialog = useRef();
    const initialTime = targetTime * 1000;

    const [timeRemaining, setTimeRemaining] = useState(initialTime)

    const timerIsActive = timeRemaining > 0 && timeRemaining < initialTime

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    const handleReset = () => {
        setTimeRemaining(initialTime);
    }

    const handleStart = () => {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);
    }

    const handleStop = () => {
        dialog.current.open();
        clearInterval(timer.current);
    }
    return (
        <>
            <ResultModal 
            ref={dialog} 
            targetTime={targetTime} 
            remainingTime={timeRemaining} 
            onReset={handleReset}
            />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} seconds{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    )


}

export default TimerChallange;