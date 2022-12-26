import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addAddress, logout } from '../../../features/authSlice';
import './Profile.css';
const Profile = () => {
    const userInfo = useSelector(state => state.auth.currentUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleAddress = (event) => {
        event.preventDefault();
        const address = event.target.address.value;
        dispatch(addAddress(address));
        event.target.reset();
    }
    // const print = useSelector(state => console.log(state));
    return (
        <div className='profile-container'>
            <div className='display-info'>
                <h2>User Info</h2>
                {
                    userInfo?.length === 0 ? [< p >No user found. please login</p>,
                    < p ><button onClick={() => navigate('/login')}>Login</button></p>]
                        : userInfo.map(user => <div>
                            <h4>User Name: {user?.name}</h4>
                            <h5>Phone:{user?.phone}</h5>
                            <h6>Email:{user?.email}</h6>
                            {
                                user?.address ?
                                    <p>Address:{user.address}</p>
                                    :
                                    [<p>Add address:</p>,
                                    <form onSubmit={handleAddress}>
                                        <input type="text" name="address" id="address" />
                                        <br />
                                        <button>Save address</button>
                                    </form>
                                    ]
                            }
                            <button onClick={() => dispatch(logout())}>LogOut</button>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Profile;