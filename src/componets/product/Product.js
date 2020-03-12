import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faShoppingCart} from '@fortawesome/free-solid-svg-icons'



const Product = (props) => {
    const {img, name,seller,price, stock} = props.product;
    // console.log(props)
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>By : {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock</small></p>
                <button
                 className="buy-btn" onClick={() => props.handleAddProduct(props.product)}
                 ><FontAwesomeIcon icon={faShoppingCart} /> 
                  Add to cart</button>

            </div>
        </div>
    );
};

export default Product;