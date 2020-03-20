import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import Product from '../product/Product';
import Reviewitem from '../Reviewitem/Reviewitem';
import Cart from '../cart/Cart';
import happyImage from '../../.../../images/giphy.gif';
import {Link} from 'react-router-dom';
import { useAuth } from '../Login/useAuth';
const Review = () => {
  const auth = useAuth();
    const [cart, setCart] = useState([]);
    const [orderplace , setOrderplace] = useState(false);

    let thankYou;
    if(orderplace){
      thankYou =  <img src={happyImage} alt=""/>
    }

    const placeOrder =  () => {
      processOrder();
      setCart([]);
      setOrderplace(true)
    }
    const handleItemRemove = (productKey) => {
      const newCart = cart.filter(product =>  product.key != productKey);
      setCart(newCart);
      removeFromDatabaseCart(productKey);
    };
    useEffect(() => {
      const savedCart = getDatabaseCart();
      const productKeys = Object.keys(savedCart);
      const cartProducts = productKeys.map(key => {
        const product = fakeData.find(product => product.key === key);
        product.quantity = savedCart[key];
        return product;
      })

      setCart(cartProducts);
    },[])

    return (
        <div className="shop-container">
          <div  className="product-container">
          {thankYou}
          {
            cart.map(item => 
              <div>
                <Reviewitem handleItemRemove={handleItemRemove} key={item.key} item={item}></Reviewitem>
              </div>
            )
          }
          {
            !cart.length && <h1>Your Cart is Empty</h1>
          }
          </div>

          <div className="cart-container">
            <Cart cart={cart}>
            <Link to="ship">
                {
                  auth.user?
                    <button onClick={placeOrder} className="buy-btn">Place Order</button>
                    :
                    <button onClick={placeOrder} className="buy-btn">Login to Procced</button>
                }
            </Link>
             
            </Cart>
          </div>
        </div>
    );
};

export default Review;