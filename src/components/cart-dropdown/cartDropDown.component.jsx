import React from "react";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { selectItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { CartToggel } from "../../redux/cart/cart.actions";

import {
  CartDropDownConatiner,
  CartItemConatiner,
  EmptyMessage,
  TotalPrice,
} from "./cartDropDown.style";

const CartDropDown = ({ cartItems, history, dispatch }) => {
  var price = 0;
  return (
    <CartDropDownConatiner>
      <CartItemConatiner>
        {cartItems.length ? (
          cartItems.map((item) => {
            price += item.quantity * item.price;
            return <CartItem key={item.id} item={item} />;
          })
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemConatiner>

      {price != 0 ? <TotalPrice>Total Price: {price}</TotalPrice> : ""}

      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(CartToggel());
        }}
      >
        Go To Checkout
      </CustomButton>
    </CartDropDownConatiner>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectItems,
});

//When mapDispatchToProps is not send in connect as an argument, then the connect will itself give dispatch as a prop.

export default withRouter(connect(mapStateToProps)(CartDropDown));
