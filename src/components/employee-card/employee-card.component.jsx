import './employee-card.styles.css';
import {useNavigate} from 'react-router-dom';
import {removeEmployee} from '../../static/employee-utils.js';

const EmployeeCard = ({employee, getId, showLogin=false, showInfo=false, showDelete=false}) => {
    const navigate = useNavigate();
    const {firstName, lastName} = employee;

    return (
        <div className='card'>
            <h3 className='marg-left name-card'>{`${lastName}, ${firstName}`}</h3>
            <div>
                {showLogin ? <button className='marg-right cursor' onClick={() => navigate('/login', { state: { id : employee.id }})}>Login</button> : null}
                {showInfo ? <button className='marg-right cursor' onClick={() => getId(employee.id)}>Info</button> : null}
                {showDelete ? <button className='marg-right cursor' onClick={() => removeEmployee(employee.id)}>Remove</button> : null}
            </div>
        </div>
    );
}

export default EmployeeCard;