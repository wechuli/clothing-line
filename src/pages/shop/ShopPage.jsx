import React, { Component } from "react";
import { Route } from "react-router-dom";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import CollectionPage from "../collection/CollectionPage";
import { updateCollections } from "../../redux/shop/shop.actions";

export class Shop extends Component {
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection("collections");
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      // console.log(collectionsMap);
    });
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path="/shop" component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCollections: collectionsMap =>
      dispatch(updateCollections(collectionsMap))
  };
};

export default connect(null,mapDispatchToProps)(Shop);
