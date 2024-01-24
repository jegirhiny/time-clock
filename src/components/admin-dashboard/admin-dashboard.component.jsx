import './admin-dashboard.styles.css';
import EmployeeForm from '../emplyee-form/employee-form.component';
import EmployeeDashboard from '../employee-dashboard/employee-dashboard.component.jsx';

const AdminDashboard = () => {
    return (
        <div className='admin-container'>
            <EmployeeDashboard showInfo={true} showDelete={true}/>
            <EmployeeForm />
        </div>
    )
}

export default AdminDashboard;