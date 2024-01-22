import './employee-dashboard.styles.css';
import { useState } from 'react';
import { getEmployees, sortEmployees } from '../../static/employee-utils.js';
import EmployeeCard from '../employee-card/employee-card.component.jsx';
import Search from '../search/search.component.jsx';

const EmployeeDashboard = ({showDelete, showLogin}) => {
    const [employees, setEmployees] = useState(sortEmployees(getEmployees()));

    const pullRequest = (employees) => {
        setEmployees(sortEmployees(employees));
    }

    return (
        <div className='employee-dashboard'>
            <label>Employee Dashboard</label>
            <Search pullRequest={pullRequest} />
            {employees.length !== 0 ? 
                (employees.map((employee) => (
                    <EmployeeCard key={employee.id} showDelete={showDelete} showLogin={showLogin} employee={employee} />
                )) 
            ) : (
                <h3>List Is Empty</h3>
            )}
        </div>
    )
}

export default EmployeeDashboard;