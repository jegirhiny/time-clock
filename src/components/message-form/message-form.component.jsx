import './message-form.styles.css';
import { useState } from 'react';
import { getEmployeeTime } from '../../static/time-utils';
import { addReminder } from '../../static/admin-utils';

const MessageForm = () => {
    const [formData, setFormData] = useState({
        message: '',
        priority: 'Low',
        posted: getEmployeeTime()
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();

        addReminder(formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className='employee-form'>
            <label>Post Reminder</label>
            <form onSubmit={handleSubmit}>
                <textarea className='message-area' type="text" name='message' onChange={handleChange} placeholder='Message' required />
                <select name="priority" onChange={handleChange} required>
                    <option value="Low">Low</option>
                    <option value="Med">Medium</option>
                    <option value="High">High</option>
                </select>
                <button className='align-right fit cursor'>Submit</button>
            </form>
        </div>
    );
};

export default MessageForm;