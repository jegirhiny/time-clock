import './message.styles.css';

const Message = ({ message, priority, posted }) => {
    return (
        <div className='message'>
            <div className='message-top'>
                <h4 className={priority.toLowerCase()}>{priority}</h4>
                <h4>{posted.date}</h4>
            </div>
            <h4 className='message-bot'>{message}</h4>
        </div>
    );
};

export default Message;