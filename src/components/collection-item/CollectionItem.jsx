import React from "react";
import { connect } from "react-redux";
import "./CollectionItem.scss";
import CustomButton from "../custom-button/CustomButton";
import { addItemToCart } from "../../redux/cart/cart.actions";

const CollectionItem = props => {
  const { item, addItemToCart } = props;
  const { id, name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={() => addItemToCart(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: item => dispatch(addItemToCart(item))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
