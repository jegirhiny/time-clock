import './employee-form.styles.css';
import { useState } from 'react';
import { createEmployee } from '../../static/employee-utils.js';

const EmployeeForm = () => {
    const [formData, setFormData] = useState({
        firstName: '', 
        lastName: '',
        password: '0000',
        firstLogin: true,
        status: false,
        history: []
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();

        createEmployee(formData);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value.replaceAll(' ', '')})
    }

    return (
        <div className='employee-form'>
            <label>Create Employee</label>
            <form onSubmit={handleSubmit}>
                <input type="text" name='firstName' onChange={handleChange} placeholder='First Name' required/>
                <input type="text" name='lastName' onChange={handleChange} placeholder='Last Name' required/>
                <button className='align-right fit cursor'>Submit</button>
            </form>
        </div>
    )
}

export default EmployeeForm;