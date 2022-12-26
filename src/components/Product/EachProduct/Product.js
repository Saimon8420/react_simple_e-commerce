import React from 'react';
import './Product.css';
const Product = ({ product, handleEachDetails }) => {
    const { category, price, image, title } = product;
    return (
        <div className='display-product'>
            <img src={image} alt="" />
            <h4>{title}</h4>
            <h5>{category}</h5>
            <h6>${price}</h6>
            <p><button onClick={() => handleEachDetails(product.id)}>See More Details</button></p>
        </div>
    );
};

export default Product;