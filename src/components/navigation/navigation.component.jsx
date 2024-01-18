import './navigation.styles.css';
import {useNavigate} from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate();

    return (
        <div className='nav-bar'>
            <button onClick={() => navigate('/admin')}>Admin</button>
            <button onClick={() => navigate('/')}>Home</button>
        </div>
    )
}

export default Navigation;