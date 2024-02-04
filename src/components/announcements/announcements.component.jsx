import './announcements.styles.css';
import Message from '../message/message.component';
import { getReminders, hasReminders } from '../../static/admin-utils';

const Announcements = () => {
    return (
        <div className={hasReminders() ? 'message-container' : 'center-message'}>
            {hasReminders() ? getReminders().map((data, index) => <Message key={index} {...data} />) : <h3>No Messages</h3>}
        </div>
    )
}

export default Announcements;