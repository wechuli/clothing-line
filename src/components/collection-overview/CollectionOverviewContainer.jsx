import { connect } from "react-redux";
import withSpinner from "../with-spinner/WithSpinner";
import CollectionsOverview from "./CollectionOverview";

const mapStateToProps = state => {
  return {
    isCollectionFetching: state.shop.isFetching,
    isCollectionLoaded: !!state.shop.collections
  };
};

const CollectionsOverviewContainer = connect(mapStateToProps)(
  withSpinner(CollectionsOverview)
);
