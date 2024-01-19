import './navigation.styles.css';
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from 'react';

const Navigation = () => {
    const navigate = useNavigate();
    const [localTime, setLocalTime] = useState(getTime())

    useEffect(() => {
        const id = setInterval(() => {
            setLocalTime(getTime());
        }, 1000);

        return () => clearInterval(id);
    }, []);

    function getTime() {
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        };

        return new Date().toLocaleTimeString('en-US', options);
    }

    return (
        <div className='nav-bar'>
            <button onClick={() => navigate('/admin')}>Admin</button>
            <button onClick={() => navigate('/')}>Home</button>
            <h3>{localTime}</h3>
        </div>
    )
}

export default Navigation;