import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';
import { connect } from 'react-redux';
import { CartToggel } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({ CartToggel }) => (
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" onClick={CartToggel} />
        <span className="item-count">10</span>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    CartToggel: () => dispatch(CartToggel())
})

export default connect(null, mapDispatchToProps)(CartIcon);

