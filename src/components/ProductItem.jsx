import React from 'react';
import './ProductItem.css'
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cart';

function mapDispatchToProps(dispatch) {
    return {
      addToCart: cartItem => dispatch(addToCart(cartItem))
    };
}

function ProductItem(props) {
    const { price, currency, image, name, addToCart} = props;

    const cartItem = {
        name: name,
        price: price,
        image: image,
        currency: currency
    }

    console.log(addToCart)
    return(
        <div className="product-item col-12 col-md-4 d-flex flex-column align-items-center">
            <img src={image} alt="product" className="mt-3"/>
            <p>{name}</p>
            <p>{price}{currency}</p>
            <button 
                className="btn btn-outline-dark mb-5"
                onClick={() => addToCart(cartItem)}>
                    Adauga in cos</button>
        </div>
    )
}

export default connect( null, mapDispatchToProps)(ProductItem);