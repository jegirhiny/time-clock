import './admin-dashboard.styles.css';
import EmployeeForm from '../emplyee-form/employee-form.component';
import EmployeeDashboard from '../employee-dashboard/employee-dashboard.component.jsx';
import MessageForm from '../message-form/message-form.component.jsx';

const AdminDashboard = () => {
    return (
        <div className='admin-container'>
            <EmployeeDashboard isAdmin={true} />
            <div className='dashboard-other'>
                <EmployeeForm />
                <MessageForm />
            </div>
        </div>
    )
}

export default AdminDashboard;