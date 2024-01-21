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
            <h3 className='name-card'>{`${firstName} ${lastName}`}</h3>
            {showDelete ? <button className='login-button' onClick={() => removeEmployee(employee.id)}>Remove</button> : null}
            {showLogin ? <button className='login-button' onClick={toLogin}>Login</button> : null}
        </div>
    );
}

export default EmployeeCard;