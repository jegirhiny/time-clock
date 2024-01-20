import './employee-card.styles.css';
import {useNavigate} from 'react-router-dom';
import {removeEmployee} from '../../static/employee-utils.js';

const EmployeeCard = ({employee, showDelete, showLogin}) => {
    const navigate = useNavigate();
    const {firstName, lastName} = employee;

    const toLogin = () => {
        navigate('/login', { state: { id : employee.id }});
    };

    return (
        <div className='card'>
            <h2>{`${firstName} ${lastName}`}</h2>
            {showDelete ? <button onClick={() => removeEmployee(employee.id)}>Remove</button> : null}
            {showLogin ? <button onClick={toLogin}>Login</button> : null}
        </div>
    );
}

export default EmployeeCard;