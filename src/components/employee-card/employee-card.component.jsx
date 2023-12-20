import './empoyee-card.styles.css';
import { useNavigate } from 'react-router-dom';

const EmployeeCard = ({ employee }) => {
    const { id, firstName, lastName, image } = employee;
    const navigate = useNavigate();
  
    const handleClick = () => {
        navigate(`/login/${id}`, { state: { employee : employee }});
    };

    return (
        <div>
            <div>
                <img src={image} alt={`${firstName} ${lastName} Photo`} />
                <h2>{`${firstName} ${lastName}`}</h2>
            </div>
            <button onClick={handleClick}>Login</button>
        </div>
    );
}

export default EmployeeCard;