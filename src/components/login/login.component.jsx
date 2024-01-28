import './login.styles.css';
import {useLocation, useNavigate} from "react-router-dom";
import {useState} from 'react';
import { getEmployeeById } from '../../static/employee-utils';

const Login = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    const employee = getEmployeeById(state.id);
    const [password, setPassword] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(employee.password === password) {
            navigate('/employee', { state: { id : employee.id }});
        }

        setIsInvalid(true);
    }

    const handleChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className='fill'>
            <h3 className='employee-icon'>{employee.firstName.charAt(0)} {employee.lastName.charAt(0)}</h3>
            <form className='login-form' onSubmit={handleSubmit}>
                <input type="password" maxLength={4} onChange={handleChange} placeholder='Password'/>
                <div className='button-group'>
                    <button type='button' onClick={() => navigate('/')}>Back</button>
                    <button type='submit'>Submit</button>
                </div>
                <h3 className='error'>{isInvalid ? 'Incorrect Password' : null}</h3>
            </form>
        </div>
    );
}

export default Login;