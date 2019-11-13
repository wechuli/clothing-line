import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import CollectionPage from "../collection/CollectionPage";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/WithSpinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSinner = WithSpinner(CollectionPage);

class Shop extends Component {

 
  componentDidMount() {

    const {fetchCollectionsStartAsync} = this.props;
    fetchCollectionsStartAsync();
  }
  render() {
    const { match,isCollectionFetching,isCollectionLoaded } = this.props;

    return (
      
      <div className="shop-page">
        <Route
          exact
          path="/shop"
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={!isCollectionLoaded} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSinner isLoading={!isCollectionLoaded} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isCollectionFetching: state.shop.isFetching,
    isCollectionLoaded: !!state.shop.collections
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
