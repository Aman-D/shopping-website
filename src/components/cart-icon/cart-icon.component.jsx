import React from "react";
// import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";
import { connect } from "react-redux";
import { CartToggel } from "../../redux/cart/cart.actions";
import { selectItemsCount } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

import "./cart-icon.styles.scss";
import { CartIconContainer, ItemCount, Icon } from "./cart-icon.style";

const CartIcon = ({ CartToggel, itemCount }) => (
  <CartIconContainer>
    <Icon onClick={CartToggel} />
    <ItemCount>{itemCount}</ItemCount>
  </CartIconContainer>
);

const mapDispatchToProps = (dispatch) => ({
  CartToggel: () => dispatch(CartToggel()),
});

const mapStatetoProps = createStructuredSelector({
  itemCount: selectItemsCount,
});

export default connect(mapStatetoProps, mapDispatchToProps)(CartIcon);
