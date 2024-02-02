import './employee-dashboard.styles.css';
import { useState } from 'react';
import { getEmployeeById, getEmployees, sortEmployees } from '../../static/employee-utils.js';
import Announcements from '../announcements/announcements.component.jsx';
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
            {/* !! Title of Component */}
            <div className='employee-top'>
                <div className='marg-right'>
                    <label>Employee Dashboard</label>
                </div>
                <div className='marg-left'>
                    {isAdmin ? <label>Employee Info</label> : <label>Announcements</label>}
                </div>
            </div>
            <div className='inner-board'>
                {/* !! Table of Employees */}
                <div className='marg-right employee-table'>
                    <div className='employee-list'>
                        {/* !! Search Bar */}
                        <Search pullRequest={pullRequest} />
                        {/* !! List of Employees */}
                        <div className={employees.length !== 0 ? '' : 'center'}>
                            {employees.length !== 0 ? employees.map(employee => <EmployeeCard key={employee.id} getId={getId} isAdmin={isAdmin} employee={employee} />) : <h3>List Is Empty</h3>}
                        </div>
                    </div>
                </div>
                {/* !! Announcement / Info Component */}
                <div className='marg-left employee-info'>
                    {isAdmin ? <EmployeeInfo employee={employee} /> : <Announcements />}
                </div>
            </div>
        </div>
    )
}

export default EmployeeDashboard;