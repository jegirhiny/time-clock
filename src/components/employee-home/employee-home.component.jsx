import './employee-home.styles.css';
import { useLocation, useNavigate } from "react-router-dom";
import { getEmployeeTime } from '../../static/time-utils.js';
import { getEmployeeById, logTime } from '../../static/employee-utils.js';
import { useState } from 'react';

const EmployeeHome = () => {
    const navigate = useNavigate();
    const {state} = useLocation();
    const employee = getEmployeeById(state.id);
    const [working, setWorking] = useState(employee.status);

    const updateWorking = () => {
        setWorking((isWorking) => !isWorking);
        logTime(employee.id, getEmployeeTime());
    }

    const toDashboard = () => {
        navigate('/');
    }

    return (
        <div>
            <h3>{`Welcome back, ${employee.firstName}.`}</h3>
            <button onClick={updateWorking}>{working ? "Clock Out" : "Clock In"}</button>
            <button onClick={toDashboard}>Logout</button>
        </div>
    )
}

export default EmployeeHome;