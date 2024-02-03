import './login.styles.css';
import {useLocation, useNavigate} from "react-router-dom";
import {useState} from 'react';
import { getEmployeeById, setFirstLogin, setPassword} from '../../static/employee-utils';

const Login = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    const employee = getEmployeeById(state.id);
    const [password, setEnteredPassword] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const { firstLogin } = employee;

    const handleSubmit = (e) => {
        e.preventDefault();

        if(firstLogin) {
            setFirstLogin(state.id);
            setPassword(state.id, password);
            navigate('/employee', { state: { id : employee.id }});
        } else if(employee.password === password) {
            navigate('/employee', { state: { id : employee.id }});
        }

        setIsInvalid(true);
    }

    const handleChange = (e) => {
        setEnteredPassword(e.target.value);
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
                {firstLogin ? <h3 className='error'>Create New Password</h3> : null}
                {isInvalid && !firstLogin ? <h3 className='error'>Incorrect Password</h3> : null}
            </form>
        </div>
    );
}

export default Login;