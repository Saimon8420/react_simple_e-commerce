import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import home from "../../../images/home.png";
import cart from "../../../images/shopping-cart.png";
import login from "../../../images/enter.png";
import signUp from "../../../images/add-user.png";
import { useDispatch, useSelector } from 'react-redux';
import { filterBySearch } from '../../../features/productSlice';
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSearch = (event) => {
        event.preventDefault();
        const searchVal = event.target.search.value;
        const valueConvert = searchVal.toLowerCase();
        dispatch(filterBySearch(valueConvert));
        event.target.reset();
        navigate("/home");
    };
    const cartItem = useSelector(state => state.cartProduct.product);
    const getQn = cartItem.map(product => product.quantity);
    const reducer = (a, b) => a + b;
    const totalQn = getQn.reduce(reducer, 0);
    return (
        <div className='display-header'>
            <div className='navigation'>
                <Link to={"/home"}>
                    <img id='image' src={home} alt="" />
                </Link>
                <div className='cart-quantity'>
                    <Link to={"/home/cartItem"}>
                        <p>{totalQn}</p>
                        <img id='image' src={cart} alt="" />
                    </Link>
                </div>
                <Link to={"/login"}>
                    <img id='image' src={login} alt="" />
                </Link>
                <Link to={"/profile"}>
                    <img id='image' src={signUp} alt="" />
                </Link>
            </div>
            <div className='search-display'>
                <form onSubmit={handleSearch}>
                    <p>
                        <input type="text" placeholder='search product name' name='search' id='search' />
                        <button type="submit">Search</button>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Header;