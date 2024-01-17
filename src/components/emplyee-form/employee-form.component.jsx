import './employee-form.styles.css';
import { useState } from 'react';
import { createEmployee } from '../../static/employee-utils.js';

const EmployeeForm = () => {
    const [formData, setFormData] = useState({
        firstName: '', 
        lastName: '',
        password: '0000',
        isWorking: false
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        createEmployee(formData);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name='firstName' onChange={handleChange} placeholder='First Name'/>
            <input type="text" name='lastName' onChange={handleChange} placeholder='Last Name'/>
            <input type="submit" />
        </form>
    )
}

export default EmployeeForm;