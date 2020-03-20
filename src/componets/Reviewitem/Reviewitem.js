import React from 'react';
import './Reviewitem.css'
const Reviewitem = (props) => {
    const {name,img, key, price, quantity} = props.item;
    return (
        <div className="review-item">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4>{name}</h4>
                <p>Price : {price}</p>
                <p>Qunatity : {quantity}</p>
                <button className="buy-buttom" onClick={() => props.handleItemRemove(key)}>Remove</button>
            </div>
           
        </div>
    );
};

export default Reviewitem;