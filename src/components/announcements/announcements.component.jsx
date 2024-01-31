import './announcements.styles.css';
import Message from '../message/message.component';

const Announcements = () => {
    const messages = JSON.parse(localStorage.getItem('announcements')) || [];

    return (
        <div className='message-container'>
            <Message author="Jake Girhiny" priority="High" text="Please remember to complete closing items before sending your closing email." date="1/30/2024"></Message>
            <Message author="Luke Lombard" priority="Low" text="The trash bin under your desk is for paper ONLY. Garbage is to be thrown away in the breakroom." date="1/28/2024"></Message>
            <Message author="Steven Holik" priority="Med" text="Computers are ONLY meant to be used for work purposes." date="1/31/2024"></Message>
        </div>
    )
}

export default Announcements;