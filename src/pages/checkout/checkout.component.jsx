import React from "react";
import "./checkout.styles.scss";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripButton from "../../components/stripe-button/stripe-button.component";
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
      <div>
        <span className="total-price">Total Price :₹ {totalPrice}</span>
        <StripButton price={totalPrice} />
        <div className="warning">
          <p> Use the following card no. for payment 4242 4242 4242 4242</p>
          <p>For date use any Future date</p>
          <p>For CVV use any 3 digit number</p>
        </div>
      </div>
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
