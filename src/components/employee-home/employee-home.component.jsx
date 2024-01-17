import './employee-home.styles.css';
import {useLocation} from "react-router-dom";
import {setIsWorking} from '../../static/employee-utils.js';

const EmployeeHome = () => {
    const {state} = useLocation();
    const {employee} = state.employee;

    return (
        <div>
            <h3>{`Welcome back, ${employee.firstName}.`}</h3>
            <button onClick={() => setIsWorking(employee.id)}>Update Status</button>
        </div>
    )
}

export default EmployeeHome;