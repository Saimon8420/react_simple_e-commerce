import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../../features/authSlice';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const phone = event.target.phone.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        dispatch(signUp({ name, phone, email, password }));
        event.target.reset();
        navigate('/login');
    }
    const [checked, setChecked] = useState(false);
    const toggle = () => {
        if (!checked === true) {
            navigate('/login');
        }
    }
    return (
        <div className='display-login'>
            <h2>Sign-Up</h2>
            <form id='form-display' onSubmit={handleLogin}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder='Enter name' />
                <label htmlFor="phone">Phone</label>
                <input type="tel" name="phone" id="phone" placeholder='Enter phone number' />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required placeholder='Enter email' />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required placeholder='Enter password' />
                <button type="submit">Sign-Up</button>
            </form>
            <p><input type="checkbox" name="check" id="" onClick={toggle} />Already have an account? Then Login.</p>
        </div>
    );
};

export default SignUp;