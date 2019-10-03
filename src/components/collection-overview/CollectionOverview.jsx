import { connect } from "react-redux";
import React from "react";
import "./CollectionOverview.scss";
import CollectionPreview from "../collection-preview/CollectionPreview";

const CollectionOverview = props => {
  const { collections } = props;
  return (
    <div className="collection-overview">
      {collections.map(collection => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    collections: state.shop.collections
  };
};

export default connect(mapStateToProps)(CollectionOverview);
