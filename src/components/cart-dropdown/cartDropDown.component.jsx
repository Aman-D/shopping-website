import React from 'react';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from "../custom-button/custom-button.component";
import { connect } from 'react-redux';
import './cartDropDown.styles.scss';

const CartDropDown = ({ cartItems }) => {
    var price = 0;
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(item => {
                        price += item.quantity * item.price;
                        return < CartItem key={item.id} item={item} />
                    }
                    )
                }
            </div>
            {price != 0 ? <span className="total-price">Total Price: {price}</span> : ''}
            <CustomButton>Go To Checkout</CustomButton>

        </div>
    )
};


const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartDropDown);