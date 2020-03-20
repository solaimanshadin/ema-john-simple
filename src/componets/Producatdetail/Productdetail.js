import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../product/Product'

const Productdetail = () => {
    const {productKey} = useParams();
    const product = fakeData.find(product => product.key === productKey);
    
    return (
        <div>
            <h1>Your Product Detail</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default Productdetail;