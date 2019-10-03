import React, { Component } from "react";
import { connect } from "react-redux";
import shopData from "../../data/shop.data";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";

const Shop = props => {
  const { collections } = props;
  return (
    <div className="shop-page">
      {collections.map(collection => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    collections: state.shop
  };
};

export default connect(mapStateToProps)(Shop);
