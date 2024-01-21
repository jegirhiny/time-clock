import './admin-dashboard.styles.css';
import { useState } from 'react';
import { getEmployees, sortEmployees } from '../../static/employee-utils.js';
import EmployeeForm from '../emplyee-form/employee-form.component';
import EmployeeCard from '../employee-card/employee-card.component.jsx';
import Search from '../search/search.component.jsx';

const AdminDashboard = () => {
    const [employees, setEmployees] = useState(sortEmployees(getEmployees()));

    const pullRequest = (employees) => {
        setEmployees(sortEmployees(employees));
    }

    return (
        <div className='dashboard'>
            <EmployeeForm />
            <Search pullRequest={pullRequest} />
            {
                employees.map((employee) => (
                    <EmployeeCard key={employee.id} showLogin={false} showDelete={true} employee={employee}/>
                ))
            }
        </div>
    )
}

export default AdminDashboard;