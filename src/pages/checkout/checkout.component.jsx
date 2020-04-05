import React from "react";
import "./checkout.styles.scss";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectItems, selectTotalPrice } from "../../redux/cart/cart.selector";

const Checkout = ({ cartItems, totalPrice }) => (
  <div className="checkout">
    <h1>CHECKOUT</h1>
    <div className="heading">
      <span className="head">Image</span>
      <span className="head">Description</span>
      <span className="head">Price</span>
      <span className="head">Quantity</span>
      <span className="head">Remove</span>
    </div>
    {cartItems.length ? (
      cartItems.map(item => <CheckoutItem item={item} />)
    ) : (
      <span className="empty">Your Cart is Empty</span>
    )}
    {totalPrice ? (
      <span className="total-price">Total Price :₹ {totalPrice}</span>
    ) : (
      ""
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectItems,
  totalPrice: selectTotalPrice
});

export default connect(mapStateToProps)(Checkout);
