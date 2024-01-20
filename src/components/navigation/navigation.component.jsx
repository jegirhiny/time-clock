import './navigation.styles.css';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getTime } from '../../static/time-utils';

const Navigation = () => {
    const navigate = useNavigate();
    const [localTime, setLocalTime] = useState(getTime())

    useEffect(() => {
        const id = setInterval(() => {
            setLocalTime(getTime());
        }, 1000);

        return () => clearInterval(id);
    }, []);

    return (
        <div className='nav-bar'>
            <button onClick={() => navigate('/admin')}>Admin</button>
            <button onClick={() => navigate('/')}>Home</button>
            <h3>{localTime}</h3>
        </div>
    )
}

export default Navigation;