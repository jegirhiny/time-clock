import './login.styles.css';
import {useLocation, useNavigate} from "react-router-dom";
import {useState} from 'react';

const Login = () => {
    const navigate = useNavigate();
    const {state} = useLocation();
    const {employee} = state.employee;
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(employee.password === password) {
            navigate('/employee', { state: { employee : {employee} }});
        }
    }

    const handleChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="password" maxLength={4} onChange={handleChange}/>
            <input type="submit" />
        </form>
    );
}

export default Login;