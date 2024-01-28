import './employee-card.styles.css';
import {useNavigate} from 'react-router-dom';
import {removeEmployee} from '../../static/employee-utils.js';

const EmployeeCard = ({ employee, getId, isAdmin=false }) => {
    const navigate = useNavigate();
    const {firstName, lastName} = employee;

    const handleClick = () => {
        if(isAdmin) {
            getId(employee.id);
        } else {
            navigate('/login', { state: { id : employee.id }});
        }
    }

    return (
        <div className='card'>
            <h3 className='marg-left name-card' onClick={() => handleClick()}>{`${lastName}, ${firstName}`}</h3>
            <div>
                {isAdmin ? null : <button className='marg-right cursor' onClick={() => navigate('/login', { state: { id : employee.id }})}>Login</button>}
                {isAdmin ? <button className='marg-right cursor' onClick={() => getId(employee.id)}>Search</button> : null}
                {isAdmin ? <button className='marg-right cursor' onClick={() => removeEmployee(employee.id)}>Remove</button> : null}
            </div>
        </div>
    );
}

export default EmployeeCard;