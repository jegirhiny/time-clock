import './employee-dashboard.styles.css';
import { useState } from 'react';
import {getSortedEmployees, getEmployeeByName} from '../../static/employee-utils.js';
import EmployeeCard from '../employee-card/employee-card.component.jsx';

const EmployeeDashboard = () => {
    const [employees, setEmployees] = useState(getSortedEmployees());

    const search = (e) => {
        setEmployees(getEmployeeByName(e.target.value));
    }

    return (
        <div className='dashboard'>
            <input type="text" onChange={search} placeholder='Search Employee'/>
            {employees.length !== 0 ? 
                (employees.map((employee) => (
                    <EmployeeCard key={employee.id} showDelete={false} showLogin={true} employee={employee} />
                )) 
            ) : (
                <h3>List Is Empty</h3>
            )}
        </div>
    )
}

export default EmployeeDashboard;