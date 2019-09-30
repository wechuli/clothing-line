import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItemToCart,
  removeItem
} from "../../redux/cart/cart.actions";
import "./CheckoutItem.scss";

const CheckoutItem = props => {
  const { clearItem, cartItem, addItem, removeItem } = props;
  const { name, imageUrl, price, quantity } = props.cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() => removeItem(cartItem)} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => addItem(cartItem)} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={() => clearItem(cartItem)} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItemToCart(item)),
    removeItem: item => dispatch(removeItem(item))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
