import React from 'react';
import fakeData from '../../fakeData';
import { useState ,useEffect} from "react";
import './Shop.css'
import Product from '../product/Product';
import Cart from '../cart/Cart';
import {NavLink} from 'react-router-dom';
import { addToDatabaseCart ,getDatabaseCart } from '../../utilities/databaseManager';
const Shop = () => {
    const firstTen = fakeData.slice(0,10);

    const [products , setProduct] = useState(firstTen);
    const [cart , setCart] = useState([]);
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productsKeys = Object.keys(savedCart);
        const previousCart = productsKeys.map((extingKey) => {
            const product = fakeData.find(p => extingKey == p.key);
            product.quantity = savedCart[extingKey];
            return product;
        })
        setCart(previousCart);
    }, [])
    const handleAddProduct = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => toBeAddedKey === pd.key);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.length + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => toBeAddedKey !== pd.key);
            newCart = [...others , sameProduct];

        }else{
            product.quantity = 1;
            newCart = [...cart , product]
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
           
                {
                    products.map(product =>  <Product key={product.key} handleAddProduct={handleAddProduct} showAddToCart="true" product={product}></Product> )
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <NavLink className="buy-btn" to="/review">
                        <button className="buy-btn">Review order</button>
                    </NavLink>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;