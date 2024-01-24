import './time-card.styles.css';

const TimeCard = ({ event }) => {
    return (
        <div className='time-card'>
            <h3>{event.date}</h3>
            <h3>{event.time}</h3>
            <h3>{event.status ? "Clock In" : "Clock Out"}</h3>
        </div>
    )
}

export default TimeCard;