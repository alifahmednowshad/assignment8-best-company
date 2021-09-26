import React from 'react';
import './Cart.css';

const Cart = (props) => {
    return (
        <div>
            <h3 className='text-center'>Details</h3>
            <h5 class="card-title">Pofile Add: {props.cart.length} </h5>
            <h5 class="card-title">Renevue Add: {props.cart.length} </h5>
        </div>
    );
};

export default Cart;

