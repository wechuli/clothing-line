import { connect } from "react-redux";
import React from "react";
import { createStructuredSelector } from "reselect";
import "./CollectionOverview.scss";
import CollectionPreview from "../collection-preview/CollectionPreview";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

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

// const mapStateToProps = state => {
//   return {
//     collections: state.shop.collections
//   };
// };
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
