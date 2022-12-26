import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addToCart } from '../../../features/cartSlice';
import './EachItem.css';
const EachItem = () => {
    const product = useSelector(state => state.product.eachProduct);

    const location = useLocation();
    const navigate = useNavigate();
    const navigation = () => {
        navigate("/home");
    }
    const dispatch = useDispatch();

    const handleAddCart = product => {
        dispatch(addToCart(product));
        navigate("/home");
    }

    return (
        <div className='display-eachItem' key={product?.id}>
            <p onClick={navigation}>{location.pathname}</p>
            <div className='eachItem-display'>
                <div className='eachItem'>
                    <div className='eachItem-image'>
                        {product.length === 0 ?
                            navigation()
                            : <img src={product?.image} alt="" />
                        }
                    </div>
                    <div className='details'>
                        {product.length === 0 ?
                            navigation()
                            : [< h2 > Title:{product?.title}</h2>,
                            <h3>Category:{product?.category}</h3>,
                            <h4>Description:{product?.description}</h4>,
                            <h5>Price:${product?.price}</h5>,
                            <h6>Ratings:{product?.rating.rate} out of 5</h6>
                            ]
                        }
                    </div>
                </div>
                <button onClick={() => handleAddCart(product)}>Add To Cart</button>
            </div>
        </div>
    );
};

export default EachItem;