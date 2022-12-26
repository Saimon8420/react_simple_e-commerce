import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../features/authSlice';
import './LogIn.css';
const LogIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        dispatch(login({ email, password }));
        event.target.reset();
        navigate("/profile");
    }
    const [checked, setChecked] = useState(false);
    const toggle = () => {
        if (!checked === true) {
            navigate('/signUp');
        }
    }
    return (
        <div className='display-login'>
            <h2>Login</h2>
            <form id='form-display' onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required placeholder='Enter email' />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required placeholder='Enter password' />
                <button type="submit">Login</button>
            </form>
            <p><input type="checkbox" name="check" id="" onClick={toggle} />Haven't any account? Then Sign-up</p>
        </div>
    );
};

export default LogIn;