import './navigation.styles.css';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getTime } from '../../static/time-utils';
import Clock from '../../images/clock.png'
import Cog from '../../images/cog.png'
import Home from '../../images/home.png'

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
        <div className='nav-container'>
            <div className='nav-bar'>
                <div className='nav-item'>
                    <img className='image' src={Clock} alt="Clock Icon" />
                    <h3 className='nav-text def-view'>{localTime}</h3>
                </div>
                <div className='nav-item' onClick={() => navigate('/admin')}>
                    <img className='image' src={Cog} alt="Cog Icon" />
                    <h3 className='nav-text'>Admin</h3>
                </div>
                <div className='nav-item' onClick={() => navigate('/')}>
                    <img className='image' src={Home} alt="Home Icon" />
                    <h3 className='nav-text'>Home</h3>
                </div>
            </div>
            <div className='footer dark'>
                <h3>Clockify — Time Clock</h3>
            </div>
        </div>
    )
}

export default Navigation;