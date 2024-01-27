import './time-card.styles.css';

const TimeCard = ({ event }) => {
    return (
        <div className='time-card'>
            <h3>{event.date}</h3>
            <h3>{event.time}</h3>
            <h3 className={event.status ? 'valid' : 'invalid'}>{event.status ? 'IN' : 'OUT'}</h3>
        </div>
    )
}

export default TimeCard;