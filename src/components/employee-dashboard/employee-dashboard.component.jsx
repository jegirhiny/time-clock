import './employee-dashboard.styles.css';
import { useState } from 'react';
import { getEmployeeById, getEmployees, sortEmployees } from '../../static/employee-utils.js';
import EmployeeInfo from '../employee-info/employee-info.component.jsx';
import EmployeeCard from '../employee-card/employee-card.component.jsx';
import Search from '../search/search.component.jsx';

const EmployeeDashboard = ({ isAdmin=false }) => {
    const [employees, setEmployees] = useState(sortEmployees(getEmployees()));
    const [employee, setEmployee] = useState('');

    const pullRequest = (employees) => {
        setEmployees(sortEmployees(employees));
    }

    const getId = (id) => {
        setEmployee(getEmployeeById(id));
    }

    return (
        <div className='employee-dashboard'>
            {/* !! Title and Search Bar */}
            <div className='employee-top'>
                <label>Employee Dashboard</label>
            </div>

            {/* !! Table of Employees */}
            <div className='employee-table'>
                <div className={employees.length !== 0 ? 'employee-list' : 'employee-list center'}>
                <Search pullRequest={pullRequest} />
                {employees.length !== 0 ? 
                    employees.map((employee) => (
                        <EmployeeCard
                            key={employee.id}
                            getId={getId}
                            isAdmin={isAdmin}
                            employee={employee}
                        />
                    )) : 
                    <h3>List Is Empty</h3>
                }
            </div>

            {/* !! Employee Info Component */}
            {isAdmin && (
                <div className='employee-info'>
                    <EmployeeInfo employee={employee} />
                </div>
            )}
            </div>
        </div>
    )
}

export default EmployeeDashboard;