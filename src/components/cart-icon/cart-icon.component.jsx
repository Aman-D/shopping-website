import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';
import { connect } from 'react-redux';
import { CartToggel } from '../../redux/cart/cart.actions';
import { selectItemsCount } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect'

import './cart-icon.styles.scss';

const CartIcon = ({ CartToggel, itemCount }) => (
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" onClick={CartToggel} />
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    CartToggel: () => dispatch(CartToggel())
});

const mapStatetoProps = createStructuredSelector({
    itemCount: selectItemsCount
})

export default connect(mapStatetoProps, mapDispatchToProps)(CartIcon);

