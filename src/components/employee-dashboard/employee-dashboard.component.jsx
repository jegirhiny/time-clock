import './employee-dashboard.styles.css';
import { useState } from 'react';
import { getEmployees, sortEmployees } from '../../static/employee-utils.js';
import EmployeeInfo from '../employee-info/employee-info.component.jsx';
import EmployeeCard from '../employee-card/employee-card.component.jsx';
import Search from '../search/search.component.jsx';

const EmployeeDashboard = ({ showLogin=false, showInfo=false, showDelete=false }) => {
    const [employees, setEmployees] = useState(sortEmployees(getEmployees()));

    const pullRequest = (employees) => {
        setEmployees(sortEmployees(employees));
    }

    return (
        <div className='employee-dashboard'>
            <div className='employee-table'>
                <div className='employee-top'>
                    <label>Employee Dashboard</label>
                    <Search pullRequest={pullRequest} />
                </div>
                <div className='employee-list'>
                    {employees.length !== 0 ? 
                        (employees.map((employee) => (
                            <EmployeeCard key={employee.id} showLogin={showLogin} showInfo={showInfo} showDelete={showDelete} employee={employee} />
                        )) 
                    ) : (
                        <h3>List Is Empty</h3>
                    )}
                </div>
            </div>
            <div className='marg-right employee-info'>
                <EmployeeInfo />
            </div>
        </div>
    )
}

export default EmployeeDashboard;