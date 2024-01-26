import './login.styles.css';
import {useLocation, useNavigate} from "react-router-dom";
import {useState} from 'react';
import { getEmployeeById } from '../../static/employee-utils';

const Login = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    const employee = getEmployeeById(state.id);
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(employee.password === password) {
            navigate('/employee', { state: { id : employee.id }});
        }
    }

    const handleChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className='fill'>
            <h3 className='employee-icon'>{employee.firstName.charAt(0)} {employee.lastName.charAt(0)}</h3>
            <form onSubmit={handleSubmit}>
                <input type="password" maxLength={4} onChange={handleChange} placeholder='Password'/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Login;