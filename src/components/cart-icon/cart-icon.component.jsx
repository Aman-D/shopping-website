import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';
import { connect } from 'react-redux';
import { CartToggel } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({ CartToggel, cartItems }) => (
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" onClick={CartToggel} />
        <span className="item-count">{cartItems.length}</span>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    CartToggel: () => dispatch(CartToggel())
});

const mapStatetoProps = state => ({
    cartItems: state.cart.cartItems
})

export default connect(mapStatetoProps, mapDispatchToProps)(CartIcon);

