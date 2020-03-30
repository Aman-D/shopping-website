import React from "react";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { selectItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { CartToggel } from "../../redux/cart/cart.actions";

import "./cartDropDown.styles.scss";

const CartDropDown = ({ cartItems, history, dispatch }) => {
  var price = 0;
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(item => {
            price += item.quantity * item.price;
            return <CartItem key={item.id} item={item} />;
          })
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>

      {price != 0 ? (
        <span className="total-price">Total Price: {price}</span>
      ) : (
        ""
      )}

      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(CartToggel());
        }}
      >
        Go To Checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectItems
});

//When mapDispatchToProps is not send in connect as an argument, then the connect will itself give dispatch as a prop.

export default withRouter(connect(mapStateToProps)(CartDropDown));
