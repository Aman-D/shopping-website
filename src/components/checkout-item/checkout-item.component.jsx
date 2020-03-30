import React from "react";
import "./checkout-item.styles.scss";

import { connect } from "react-redux";

import { DeleteItem, RemoveItem, AddItem } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ item, deleteItem, addItem, removeItem }) => {
  const { name, price, imageUrl, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={`${imageUrl}`} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="price">₹ {price}</span>
      <span className="quantity">{quantity}</span>
      <span className="remove" onClick={() => deleteItem(item)}>
        &#10008;
      </span>
      <span className="addItem AR" onClick={() => addItem(item)}>
        +
      </span>
      <span className="removeItem AR" onClick={() => removeItem(item)}>
        -
      </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteItem: item => dispatch(DeleteItem(item)),
  removeItem: item => dispatch(RemoveItem(item)),
  addItem: item => dispatch(AddItem(item))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
