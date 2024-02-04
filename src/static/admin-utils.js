import { v4 as uuidv4 } from 'uuid';

const getReminders = () => {
    return JSON.parse(localStorage.getItem('reminders')) || [];
}

const hasReminders = () => {
    return JSON.parse(localStorage.getItem('reminders')) !== null;
}

const addReminder = ({ message, priority, posted }) => {
    const prevReminders = getReminders();
    localStorage.setItem('reminders', JSON.stringify([...prevReminders, {id: uuidv4(), message, priority, posted}]));
}

const removeReminder = () => {

}

const sortReminders = (reminders) => {

}

export { getReminders, hasReminders, addReminder, removeReminder, sortReminders };