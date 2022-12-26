import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { eachProduct, filterByCategory, filterPriceHigh, filterPriceLow, productFetch } from '../../features/productSlice';
import Product from './EachProduct/Product';
import './LoadProduct.css';
const LoadProduct = () => {
    const { isLoading, error, products, filterProducts, search } = useSelector(state => state.product);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productFetch());
    }, []);

    const handlePriceFilter = (option) => {
        if (option === 'low') {
            dispatch(filterPriceLow());
        }
        else {
            dispatch(filterPriceHigh());
        }
    };

    const handleCategoryFilter = (option) => {
        if (option === "women's clothing") {
            dispatch(filterByCategory("women's clothing"));
        }
        else if (option === "men's clothing") {
            dispatch(filterByCategory("men's clothing"));
        }
        else if (option === "jewelery") {
            dispatch(filterByCategory("jewelery"));
        }
        else if (option === "electronics") {
            dispatch(filterByCategory("electronics"));
        }
        else {
            dispatch(filterByCategory("default"));
        }
    };

    const navigate = useNavigate();

    const handleEachDetails = (id) => {
        dispatch(eachProduct(id));
        navigate("/home/eachItem");
    }

    return (
        <div className='home-container'>
            <h3>All Products</h3>
            <div className='display'>
                <div className='filter-container'>
                    <h4>Filter Product</h4>
                    <div>
                        <h3>Price</h3>
                        <button onClick={() => handlePriceFilter('low')}>Price:a-z</button>

                        <button onClick={() => handlePriceFilter('high')}>Price:z-a</button>
                    </div>
                    <div>
                        <h3>Category</h3>
                        <button onClick={() => handleCategoryFilter('default')}>Default</button>

                        <button onClick={() => handleCategoryFilter("women's clothing")}>Women's Clothing</button>

                        <button onClick={() => handleCategoryFilter("men's clothing")}>Men's Clothing</button>

                        <button onClick={() => handleCategoryFilter('jewelery')}>Jewellery</button>

                        <button onClick={() => handleCategoryFilter('electronics')}>Electronics</button>
                    </div>
                </div>
                <div>
                    {search.length === 0 ?
                        <div className='product-container'>
                            {
                                filterProducts.length === 0 ?
                                    products.map(product => <Product key={product.id}
                                        product={product}
                                        handleEachDetails={handleEachDetails}
                                    ></Product>)
                                    :
                                    filterProducts.map(product => <Product key={product.id}
                                        product={product}
                                        handleEachDetails={handleEachDetails}
                                    ></Product>)
                            }
                        </div>
                        :
                        <div className='not-found'>
                            <h4>{search}</h4>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default LoadProduct;