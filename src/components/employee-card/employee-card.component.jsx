import './employee-card.styles.css';
import {useNavigate} from 'react-router-dom';

const EmployeeCard = ({employee}) => {
    const navigate = useNavigate();
    const {firstName, lastName} = employee;
  
    const handleClick = () => {
        navigate('/login', { state: { employee : {employee} }});
    };

    return (
        <div className='card'>
            <h2>{`${firstName} ${lastName}`}</h2>
            <button onClick={handleClick}>Login</button>
        </div>
    );
}

export default EmployeeCard;