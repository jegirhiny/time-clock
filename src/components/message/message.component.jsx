import './message.styles.css';

const Message = ({ author, priority, text, date}) => {
    return (
        <div className='message'>
            <div className='message-top'>
                <h4 className={priority.toLowerCase()}>{priority}</h4>
                <h4>{author}</h4>
                <h4>{date}</h4>
            </div>
            <h4 className='message-bot'>{text}</h4>
        </div>
    )
}

export default Message;