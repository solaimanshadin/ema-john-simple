import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';

const Cart = (props) => {
    const auth = useAuth()
    const totalPrice = props.cart.reduce((acc, crr) => {
        return acc+crr.price * (crr.quantity*2 || 1)
    },0)
    let shipping = 0;
    if(totalPrice >= 100){
        shipping = 0;
    }else if(totalPrice > 15){
        shipping = 4.99;
    }
    const formatNumber = num => parseFloat(num.toFixed(2));
    const tax = formatNumber(totalPrice/5);
    const grandTotal =  formatNumber(totalPrice + tax + shipping);
    return (
        <div>
            <h3>Order Summery</h3>
            <h5>Items ordered : {props.cart.length}</h5>
            <h5>Total Price : ${totalPrice.toFixed(2)}</h5>
            <h6>Shipping Cost : ${shipping}</h6>
            <h6>Estimated Tax: ${tax}</h6>
            <h5>Total Price :${grandTotal} </h5>
            {
                props.children
            }
        </div>
    );
};

export default Cart;