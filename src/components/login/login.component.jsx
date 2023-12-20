import { useState, useEffect } from 'react';
import './login.styles.css';
// import { useLocation  } from "react-router-dom";

const Login = () => {
    const [ combo, setCombo ] = useState('');
    const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    // const { state } = useLocation();

    const submitKey = (key) => {
        if(combo.length < 4) {
            setCombo(combo + key);
        }
    }

    const keyPressed = (e) => {
        const pressed = e.key, length = combo.length;

        if(pressed === 'Backspace' && length > 0) {
            setCombo(combo.substring(0, length - 1));
        } else if(keys.includes(pressed) && length !== 4) {
            setCombo(combo + pressed);
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', keyPressed);
        
        return () => {
            document.removeEventListener('keydown', keyPressed);
        };
      }, [combo]);

    return (
        <div className='full-screen-center opaque'>
            <div className='combo-display'>
                <h3 className='text'>Enter Passcode</h3>
                <h2 className='text combo'>{ combo }</h2>
            </div>
            <div className='keypad'>
                {keys.map((key, index) => <button key={index} className='key' onClick={() => submitKey(key)} value={key}>{key}</button>)}
            </div>
        </div>
    );
}

export default Login;