import './employee-dashboard.styles.css';
import EmployeeCard from '../employee-card/employee-card.component.jsx';
import {hasEmployees, getEmployees} from '../../static/employee-utils.js';

const EmployeeDashboard = () => {
    if(hasEmployees()) {
        return (
            <div className='dashboard'>
                {
                    getEmployees().map((employee) => (
                        <EmployeeCard key={employee.id} employee = {employee} />
                    ))
                }
            </div>
        )
    }

    return (
        <h3>No Employees</h3>
    )
}

export default EmployeeDashboard;