import './admin-dashboard.styles.css';
import { useState } from 'react';
import {getEmployees, getEmployeeByName} from '../../static/employee-utils.js';
import EmployeeForm from '../emplyee-form/employee-form.component';
import EmployeeCard from '../employee-card/employee-card.component.jsx';

const AdminDashboard = () => {
    const [employees, setEmployees] = useState(getEmployees(), [])

    const search = (e) => {
        setEmployees(getEmployeeByName(e.target.value));
    }

    return (
        <div className='dashboard'>
            <EmployeeForm />
            <input type="text" onChange={search}/>
            {
                employees.map((employee) => (
                    <EmployeeCard key={employee.id} showLogin={false} showDelete={true} employee={employee} s/>
                ))
            }
        </div>
    )
}

export default AdminDashboard;