import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/CustomButton";
import "./CartDropDown.scss";
import CartItem from "../cart-item/CartItem";
import { selectCartItems } from "../../redux/cart/cart.selectors";

function CartDropDown(props) {
  const { cartItems } = props;
  console.log(cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => {
          return <CartItem key={cartItem.id} item={cartItem} />;
        })}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    cartItems: selectCartItems(state)
  };
};
export default connect(mapStateToProps)(CartDropDown);
