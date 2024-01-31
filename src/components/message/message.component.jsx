import './message.styles.css';

const Message = ({ author, priority, text, date}) => {
    return (
        <div className='message'>
            <div className='message-top'>
                <h3 className={priority.toLowerCase()}>{priority}</h3>
                <h3>{author}</h3>
                <h3>{date}</h3>
            </div>
            <h3 className='message-bot'>{text}</h3>
        </div>
    )
}

export default Message;