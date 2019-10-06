import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/CollectionItem";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./CollectionPage.scss";

const CollectionPage = props => {
  const { collection } = props;
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {
          items.map(item=>(<CollectionItem key={item.id} item={item}/>))
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

// const mapStateToProps = (state, ownProps) => {
//   return {
//     collection: state.shop.collections.find(
//       collection => collection.routeName === ownProps.match.params.collectionId
//     )
//   };
// };

export default connect(mapStateToProps)(CollectionPage);