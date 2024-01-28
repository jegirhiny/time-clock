import './admin-dashboard.styles.css';
import EmployeeForm from '../emplyee-form/employee-form.component';
import EmployeeDashboard from '../employee-dashboard/employee-dashboard.component.jsx';

const AdminDashboard = () => {
    return (
        <div className='admin-container'>
            <EmployeeDashboard  isAdmin={true} />
            <div className='dashboard-other'>
                <EmployeeForm />
            </div>
        </div>
    )
}

export default AdminDashboard;