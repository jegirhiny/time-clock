import './time-card.styles.css';

const TimeCard = ({ event }) => {
    return (
        <div className='time-card'>
            <h3 className='marg-left'>{event.date} {event.time} {event.status ? "Clock In" : "Clock Out"}</h3>
        </div>
    )
}

export default TimeCard;