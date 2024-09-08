const TimerChallange = ({ title, targetTime }) => {
    return <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} seconds{targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button>
                Start Challange
            </button>
        </p>
        <p className="">
            Time is running
        </p>
    </section>
}

export default TimerChallange;