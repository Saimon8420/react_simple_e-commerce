import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { decreaseQuantity, increaseQuantity } from '../../../features/cartSlice';
import './CartProduct.css';
const CartProduct = () => {
    const cartItem = useSelector(state => state.cartProduct.product);
    const dispatch = useDispatch();
    const handleQuantity = (item, sign) => {
        if (sign === "+") {
            dispatch(increaseQuantity(item));
        }
        else {
            dispatch(decreaseQuantity(item));
        }
    }
    const getPrice = cartItem.map(pro => pro.price * pro.quantity);
    const reducer = (a, b) => a + b;
    const totalPrice = getPrice.reduce(reducer, 0);
    const roundTotal = Math.floor(totalPrice);

    const navigate = useNavigate();
    const handleConfirm = () => {
        navigate('/confirm');
    }
    // const show = useSelector(state => console.log(state.auth.email));
    return (
        <div className='display-cart'>
            {
                cartItem.length === 0 ? <h4 id='nothing-added'>Nothing added,please add some product</h4> :
                    <div className='cartItem-display'>
                        {
                            cartItem.map(product =>
                                <div className='cart-container' key={product.id}>
                                    <div className='cart-image'>
                                        <img src={product.image} alt="" />
                                    </div>
                                    <div className='info'>
                                        <h5>Title:{product.title}</h5>
                                        <p className='cart-button'>
                                            <button onClick={() => handleQuantity(product, "+")}>+</button>
                                            {product.quantity}
                                            <button onClick={() => handleQuantity(product, "-")}>-</button>
                                        </p>
                                        <h6>Price:${product.price * product.quantity}</h6>
                                    </div>
                                </div>
                            )}
                    </div>}
            <div>
                {
                    cartItem.length > 0 ?
                        <div className='proceed-order'>
                            <h4>Total Price: ${roundTotal}</h4>
                            <button onClick={() => handleConfirm()}>Confirm</button>
                        </div>
                        : " "
                }
            </div>
        </div >
    );
};

export default CartProduct;